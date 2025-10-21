import { type NextPageIntlayer, IntlayerClientProvider, LocalPromiseParams } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import Link from "next/link";
import { TestComponent } from "@/components/TestComponent";
import { getIntlayer } from "intlayer";
import type { Metadata } from "next";


export const generateMetadata = async ({
    params,
  }: LocalPromiseParams): Promise<Metadata> => {
    const { locale } = await params;
  
    const metadata = getIntlayer("test-component", locale);


    return {
        title: metadata.title,
        description: metadata.description,
    }
}

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>

      <IntlayerClientProvider locale={locale}>
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
            <TestComponent />

            <Link href="/blog" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">
              Visit our blog
            </Link>
        </div>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default Page;