import { formatDate, getBlogPosts } from "@/libs/utils";
import Link from "next/link";
import Image from "next/image";

export const generateStaticParams = () => {
  return ['en', 'fr', 'es'].map((locale) => ({ locale }));
};

const BlogIndexPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const blogPosts = (getBlogPosts(locale) || []).sort((a, b) => {
    const da = new Date((a.data.date as string) || 0).getTime();
    const db = new Date((b.data.date as string) || 0).getTime();
    return db - da;
  });

  return <div className="mx-auto max-w-6xl px-4 py-10">
    <div className="mb-10">
      <h1 className="text-4xl font-bold tracking-tight">Latest articles</h1>
      <p className="text-gray-500 mt-2">Insights, stories, and news from our team.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts?.map((post) => {
        const title = post.data.title as string | undefined;
        const excerpt = post.data.excerpt as string | undefined;
        const coverImage = post.data.coverImage as string | undefined;
        const slug = post.data.slug as string;
        const dateStr = formatDate(post.data.date as string | undefined);

        return <article key={slug} className="group rounded-xl border border-black/5 dark:border-white/10 overflow-hidden bg-white/40 dark:bg-white/[0.03] shadow-sm hover:shadow-md transition-shadow">
          {coverImage ? (
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image src={coverImage} alt={title || "Cover image"} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ) : null}
          <div className="p-5">
            <h2 className="text-xl font-semibold leading-snug">
              <Link href={`/${locale}/blog/${slug}`} className="hover:underline">
                {title || slug}
              </Link>
            </h2>
            {dateStr ? <div className="mt-1 text-xs text-gray-500">{dateStr}</div> : null}
            {excerpt ? <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3">{excerpt}</p> : null}
            <div className="mt-4">
              <Link href={`/${locale}/blog/${slug}`} className="text-blue-600 hover:text-blue-700 font-medium">Read article →</Link>
            </div>
          </div>
        </article>;
      })}
    </div>
  </div>;
};

export default BlogIndexPage;