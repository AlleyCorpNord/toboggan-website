import { redirect } from "next/navigation";

export const generateStaticParams = () => {
  return ['en', 'fr', 'es'].map((locale) => ({ locale }));
};


const LocalHomePage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  redirect(`/${locale}/blog`);
}

export default LocalHomePage;
