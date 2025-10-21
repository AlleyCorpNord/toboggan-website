import { getBlogPost, getBlogPosts } from "@/libs/utils";

export const generateStaticParams = async () => {
  const blogPosts = getBlogPosts();
  return blogPosts?.map((post) => ({ slug: post.data.slug })) || [];
};

export const generateMetadata = async ({ params }: { params: { locale: string, slug: string } }) => {
  const blogPost = getBlogPost(params.slug);
  return {
    title: blogPost?.data.title,
    description: blogPost?.data.excerpt,
  };
};

export const BlogPostPage = ({ params }: { params: { locale: string, slug: string } }) => {
  const blogPost = getBlogPost(params.slug);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return <div>
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{blogPost?.data.title}</h1>
      <p className="text-gray-500">{blogPost?.data.excerpt}</p>
    </div>
    <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: blogPost?.content || "" }} />
  </div>
};

export default BlogPostPage;