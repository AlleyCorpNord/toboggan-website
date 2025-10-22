#!/usr/bin/env node
"use strict";

const fs = require("fs/promises");
const path = require("path");
const OpenAI = require("openai");

async function readFileSafe(filePath) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (err) {
    return null;
  }
}

function getOutputPathForLang(enPath, langCode) {
  // Replace '/en/' with '/fr/' or '/es/' keeping same filename
  const replaced = enPath.replace(path.sep + "en" + path.sep, path.sep + langCode + path.sep);
  return replaced;
}

function splitChangedFilesEnv(envValue) {
  if (!envValue) return [];
  return envValue
    .split(".md")
    .map((s) => s.trim())
    .filter(Boolean)
}

async function ensureDirForFile(filePath) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
}

async function translateWithOpenAI({ apiKey, model, text, targetLanguage }) {
  const client = new OpenAI({ apiKey, baseURL: process.env.OPENAI_BASE_URL });
  const system = `You are a professional translator. Translate the following Markdown blog post into ${targetLanguage}.

Requirements:
- Preserve YAML front matter delimiters (---) and keys and their values except translating only the natural-language text values if present.
- Preserve all Markdown structure, headings, links, images, code blocks, and URLs. Do not translate URLs, code, or image paths.
- Output MUST be Markdown only (no extra commentary).`;

  const completion = await client.chat.completions.create({
    model: model || process.env.TRANSLATION_MODEL || "gpt-5",
    messages: [
      { role: "system", content: system },
      { role: "user", content: text },
    ],
    temperature: 0.2,
  });
  const content = completion.choices?.[0]?.message?.content;
  if (!content) throw new Error("OpenAI response missing content");
  return content;
}


async function processFile(enFilePath, apiKey, model) {
  const raw = await readFileSafe(enFilePath);
  if (!raw) {
    console.warn(`Skipping missing file: ${enFilePath}`);
    return [];
  }
  const input = raw;

  const targets = [
    { langCode: "fr", langName: "French" },
    { langCode: "es", langName: "Spanish" },
  ];

  const outputs = [];
  for (const t of targets) {
    const outPath = getOutputPathForLang(enFilePath, t.langCode);
    try {
      const outContent = await translateWithOpenAI({ apiKey, model, text: input, targetLanguage: t.langName });
      await ensureDirForFile(outPath);
      const existing = await readFileSafe(outPath);
      if (existing !== outContent) {
        await fs.writeFile(outPath, outContent, "utf8");
        console.log(`Wrote translation: ${outPath}`);
        outputs.push(outPath);
      } else {
        console.log(`No changes for: ${outPath}`);
      }
    } catch (e) {
      console.error(`Failed translating ${enFilePath} -> ${t.langCode}:`, e.message);
    }
  }
  return outputs;
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("OPENAI_API_KEY is required but not set. Skipping translations.");
    process.exit(1);
  }

  const changedFilesEnv = process.env.CHANGED_FILES || "";
  const changed = splitChangedFilesEnv(changedFilesEnv)
    .filter((p) => p.includes(`${path.sep}app${path.sep}contents${path.sep}blog${path.sep}en${path.sep}`));

  if (changed.length === 0) {
    console.log("No changed EN markdown files. Nothing to do.");
    return;
  }

  console.log("Processing changed files:\n" + changed.map((p) => ` - ${p}`).join("\n"));
  const model = process.env.TRANSLATION_MODEL || "gpt-4o-mini";

  let wroteAny = false;
  for (const filePath of changed) {
    const outputs = await processFile(filePath, apiKey, model);
    if (outputs.length > 0) wroteAny = true;
  }

  if (!wroteAny) {
    console.log("No translation changes produced.");
  }
}

main().catch((err) => {
  console.error("Translation script failed:", err);
  process.exit(1);
});


