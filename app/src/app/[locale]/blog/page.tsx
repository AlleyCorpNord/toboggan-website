import { getBlogPosts } from "@/libs/utils";
import Link from "next/link";

export const BlogIndexPage = ({ params }: { params: { locale: string } }) => {
  const { locale } = params;
  const blogPosts = getBlogPosts();
  return <div>
    <h1 className="text-2xl font-bold">Blog</h1>
    <ul className="list-none">
      {blogPosts?.map((post) => (
        <li key={post.data.slug}>
          <Link href={`/${locale}/blog/${post.data.slug}`}>{post.data.title}</Link>
        </li>
      ))}
    </ul>
  </div>;
};

export default BlogIndexPage;