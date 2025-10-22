export const generateStaticParams = () => {
  return ['en', 'fr', 'es'].map((locale) => ({ locale }));
};

const LocaleLayout = async ({ children, params }: { children: React.ReactNode, params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  return <html lang={locale}>
    <body>{children}</body>
  </html>;
};

export default LocaleLayout;