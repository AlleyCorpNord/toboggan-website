import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getFolderMarkups = (
  directory: string
): matter.GrayMatterFile<string>[] | null => {
  /* Converts all files in a directory to gray-matter objects */
  try {
    const directoryPath = path.join(process.cwd(), directory);
    const files = fs.readdirSync(directoryPath);

    return files.map((filename) => {
      const filePath = path.join(directoryPath, filename);
      const data = matter.read(filePath);
      data.data.slug = filename.replace(".md", "");
      return data;
    });
  } catch (error) {
    return null;
  }
};

export const getMarkup = (
  directory: string,
  filename: string
): matter.GrayMatterFile<string> | null => {
  /* Converts specific file to a gray-matter object */
  try {
    const file = matter.read(path.join(process.cwd(), directory, filename));
    return file;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const getBlogPosts = (): matter.GrayMatterFile<string>[] | null => {
  return getFolderMarkups("contents/blog");
};

export const getBlogPost = (slug: string): matter.GrayMatterFile<string> | null => {
  return getMarkup("contents/blog", `${slug}.md`);
};