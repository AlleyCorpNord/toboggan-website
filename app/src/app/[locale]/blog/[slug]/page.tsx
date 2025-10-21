import type { Metadata } from "next";
import { type NextPageIntlayer, IntlayerClientProvider, LocalPromiseParams } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/contents/blog";

export const dynamic = "error"; // fully static

export const generateStaticParams = async () => {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: LocalPromiseParams<{ slug: string }>): Promise<Metadata> => {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(locale, slug);
  return post
    ? {
        title: post.title,
        description: post.description,
      }
    : { title: "Not found" };
};

const BlogPostPage: NextPageIntlayer<{ slug: string }> = async ({ params }) => {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(locale, slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <p>Post not found.</p>
      </div>
    );
  }

  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <article className="mx-auto max-w-3xl px-4 py-12">
          <Link href={`/${locale}/blog`} className="text-sm text-neutral-600 hover:underline">← Back to blog</Link>
          <header className="mt-4 mb-6">
            <h1 className="text-3xl font-semibold tracking-tight mb-2">{post.title}</h1>
            <div className="text-sm text-neutral-500 flex items-center gap-2">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              {post.readingMinutes ? <span>• {post.readingMinutes} min</span> : null}
              <span>• {post.author.name}</span>
            </div>
          </header>

          {post.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.coverImage} alt="" className="w-full rounded-lg border border-neutral-200/40 mb-6 object-cover max-h-80" />
          ) : null}

          <div className="prose prose-neutral max-w-none">
            {post.body.split("\n\n").map((p, i) => (
              <p key={i} className="leading-7 mb-4">{p}</p>
            ))}
          </div>

          {post.tags?.length ? (
            <ul className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li key={tag} className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/40">#{tag}</li>
              ))}
            </ul>
          ) : null}
        </article>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default BlogPostPage;


