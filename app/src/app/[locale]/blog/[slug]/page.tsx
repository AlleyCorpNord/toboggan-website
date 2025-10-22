import { formatDate, getBlogPost, getBlogPosts } from "@/libs/utils";
import { marked } from "marked";
import Image from "next/image";

export const generateStaticParams = ({ params }: { params: { locale: string } }) => {
  const { locale } = params;
  const blogPosts = getBlogPosts(locale);
  return blogPosts?.map((post) => ({ locale: locale, slug: post.data.slug })) || [];
};

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string, slug: string }> }) => {
  const { locale, slug } = await params;
  const blogPost = getBlogPost(locale, slug);
  return {
    title: blogPost?.data.title,
    description: blogPost?.data.excerpt,
  };
};

const BlogPostPage = async ({ params }: { params: Promise<{ locale: string, slug: string }> }) => {
  const { locale, slug } = await params;
  const blogPost = getBlogPost(locale, slug);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  const title = blogPost.data.title as string | undefined;
  const excerpt = blogPost.data.excerpt as string | undefined;
  const coverImage = blogPost.data.coverImage as string | undefined;
  const dateStr = formatDate(blogPost.data.date as string | undefined);
  const html = await marked(blogPost.content || "");

  return <article className="mx-auto max-w-3xl px-4 py-8">
    {coverImage ? (
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 mb-8">
        <Image src={coverImage} alt={title || "Cover image"} fill className="object-cover" sizes="100vw" />
      </div>
    ) : null}
    <header className="mb-6">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <div className="mt-2 text-gray-500 text-sm">
        {dateStr}
      </div>
      {excerpt ? <p className="mt-3 text-gray-600">{excerpt}</p> : null}
    </header>
    <div className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-24 prose-img:rounded-lg prose-a:text-blue-600" dangerouslySetInnerHTML={{ __html: html }} />
  </article>
};

export default BlogPostPage;