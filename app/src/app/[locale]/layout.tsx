export const LocaleLayout = ({ children, params }: { children: React.ReactNode, params: { locale: string } }) => {
  const { locale } = params;
  return <html lang={locale}>
    <body>{children}</body>
  </html>;
};

export default LocaleLayout;