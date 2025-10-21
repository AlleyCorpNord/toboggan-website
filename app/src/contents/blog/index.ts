import { getIntlayer } from "intlayer";
import type { LocalesValues } from "@intlayer/config";
import { BLOG_POSTS } from "@/contents/blog/_registry";

export type BlogListItem = {
  slug: string;
  title: string;
  description: string;
  date: string;
  authorName: string;
  tags: string[];
  coverImage?: string;
  readingMinutes?: number;
};

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getBlogList(locale: LocalesValues): BlogListItem[] {
  const items: BlogListItem[] = [];
  for (const { key, slug } of BLOG_POSTS) {
    try {
      const d = getIntlayer(key, locale);
      if (!d) continue;
      items.push({
        slug: d.slug ?? slug,
        title: d.title,
        description: d.description,
        date: d.date,
        authorName: d.author?.name,
        tags: d.tags ?? [],
        coverImage: d.coverImage,
        readingMinutes: d.readingMinutes,
      });
    } catch {
      // skip missing/unbuilt dictionaries during dev
    }
  }
  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(locale: LocalesValues, slug: string) {
  try {
    const d = getIntlayer(`blog-${slug}`, locale);
    if (!d) return null;
    return {
      slug: d.slug ?? slug,
      title: d.title as string,
      description: d.description as string,
      date: d.date as string,
      author: d.author as { name: string; avatarUrl?: string },
      tags: (d.tags as string[]) ?? [],
      coverImage: d.coverImage as string | undefined,
      readingMinutes: d.readingMinutes as number | undefined,
      body: d.body as string,
    };
  } catch {
    return null;
  }
}


