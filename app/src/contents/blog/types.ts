export type BlogPostDictionary = {
  key: string;
  content: {
    slug: string;
    title: string;
    description: string;
    date: string; // ISO date string
    author: { name: string; avatarUrl?: string };
    tags: string[];
    coverImage?: string;
    readingMinutes?: number;
    body: string; // markdown or plain text
  };
};


