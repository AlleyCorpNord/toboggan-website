import type { Metadata } from "next";
import Link from "next/link";
import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import { type LocalPromiseParams } from "next-intlayer";
import { getBlogList } from "@/contents/blog";

export const dynamic = "error"; // fully static

export const generateMetadata = async ({ params }: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;
  console.log(locale);
  return {
    title: "Blog",
    description: "Latest posts",
  };
};

const BlogIndexPage: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  const posts = getBlogList(locale);

  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <section className="mx-auto max-w-3xl px-4 py-12">
          <h1 className="text-3xl font-semibold tracking-tight mb-6">Blog</h1>
          {posts.length === 0 ? (
            <p className="text-neutral-600">No posts yet.</p>
          ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug} className="rounded-lg border border-neutral-200/40 p-5 hover:shadow-sm transition-shadow">
                <Link href={`/${locale}/blog/${post.slug}`} className="block">
                  <div className="flex items-start gap-4">
                    {post.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.coverImage} alt="" className="h-16 w-16 rounded object-cover bg-neutral-100" />
                    ) : null}
                    <div className="flex-1">
                      <h2 className="text-xl font-medium mb-1">{post.title}</h2>
                      <p className="text-sm text-neutral-600 mb-2">{post.description}</p>
                      <div className="text-xs text-neutral-500 flex items-center gap-2">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        {post.readingMinutes ? <span>• {post.readingMinutes} min</span> : null}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          )}
        </section>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default BlogIndexPage;


