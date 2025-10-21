import { t, type Dictionary } from "intlayer";

const blogHelloWorld = {
  key: "blog-hello-world",
  content: {
    slug: "hello-world",
    title: t({
      en: "Hello World with Intlayer",
      fr: "Bonjour le monde avec Intlayer",
      es: "Hola Mundo con Intlayer",
    }),
    description: t({
      en: "A starter post demonstrating Intlayer-based content and i18n.",
      fr: "Un article de démarrage démontrant le contenu et l'i18n avec Intlayer.",
      es: "Una publicación inicial que demuestra contenido e i18n con Intlayer.",
    }),
    date: "2025-10-20",
    author: {
      name: t({ en: "Team Toboggan", fr: "Équipe Toboggan", es: "Equipo Toboggan" }),
      avatarUrl: "/vercel.svg",
    },
    tags: t({
      en: ["intlayer", "nextjs", "i18n"],
      fr: ["intlayer", "nextjs", "i18n"],
      es: ["intlayer", "nextjs", "i18n"],
    }),
    body: t({
      en: `Welcome to our blog! This post is powered by Intlayer.\n\nWe store content per component (or page) and translate it using Intlayer's dictionaries.`,
      fr: `Bienvenue sur notre blog ! Cet article est propulsé par Intlayer.\n\nNous stockons le contenu par composant (ou page) et le traduisons à l'aide des dictionnaires Intlayer.`,
      es: `¡Bienvenidos a nuestro blog! Esta publicación funciona con Intlayer.\n\nAlmacenamos contenido por componente (o página) y lo traducimos usando los diccionarios de Intlayer.`,
    }),
    coverImage: "/globe.svg",
    readingMinutes: 3,
  },
} satisfies Dictionary;

export default blogHelloWorld;


