import { useIntlayer } from "next-intlayer/server";

export const TestComponent = () => {
  const content = useIntlayer("test-component");
  return <div className="max-w-[600px]">
    <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
    <p className="text-lg">{content.description}</p>
  </div>;
};