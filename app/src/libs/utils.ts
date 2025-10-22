import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getFolderMarkups = (
  directory: string,
  locale: string
): matter.GrayMatterFile<string>[] | null => {
  /* Converts all files in a directory to gray-matter objects */
  try {
    const directoryPath = path.join(process.cwd(), directory, locale);
    const files = fs.readdirSync(directoryPath);

    return files.map((filename) => {
      const filePath = path.join(directoryPath, filename);
      const data = matter.read(filePath);
      data.data.slug = filename.replace(".md", "");
      return data;
    });
  } catch {
    return null;
  }
};

export const getMarkup = (
  directory: string,
  locale: string,
  filename: string
): matter.GrayMatterFile<string> | null => {
  /* Converts specific file to a gray-matter object */
  try {
    const file = matter.read(path.join(process.cwd(), directory, locale, filename));
    return file;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const getBlogPosts = (locale: string): matter.GrayMatterFile<string>[] | null => {
  return getFolderMarkups("contents/blog", locale);
};

export const getBlogPost = (locale: string, slug: string): matter.GrayMatterFile<string> | null => {
  return getMarkup("contents/blog", locale, `${slug}.md`);
};

export const formatDate = (input?: string): string => {
  if (!input) return "";
  const date = new Date(input);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};