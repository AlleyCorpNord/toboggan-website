import {enu, md, t, type Dictionary } from 'intlayer';

const testBlogContent = {
  key: 'test-blog-3',
  content: {
    articles: enu({
        "1": {
            title: t({ en: "Article 1", es: "Artículo 1", fr: "Article 1" }),
            description: t({ en: "Description 1", es: "Descripción 1", fr: "Description 1" }),
            body: t({ en: md("Body 1"), es: md("Cuerpo 1"), fr: md("Body 1") }),
        },
    })
  },
} satisfies Dictionary;

export default testBlogContent;
