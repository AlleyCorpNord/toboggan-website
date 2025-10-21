import { t, type Dictionary } from "intlayer";

const blogDataInterop = {
  key: "blog-data-interoperability",
  content: {
    slug: "data-interoperability",
    title: t({
      en: "Practical data interoperability: connecting the last mile",
      fr: "Interopérabilité des données : connecter le dernier kilomètre",
      es: "Interoperabilidad de datos práctica: conectando el último tramo",
    }),
    description: t({
      en: "A blueprint for integrating messy real-world clinical data across vendors.",
      fr: "Un plan pour intégrer des données cliniques hétérogènes entre fournisseurs.",
      es: "Una guía para integrar datos clínicos reales y desordenados entre proveedores.",
    }),
    date: "2025-08-22",
    author: {
      name: t({ en: "Team Toboggan", fr: "Équipe Toboggan", es: "Equipo Toboggan" }),
      avatarUrl: "/globe.svg",
    },
    tags: t({
      en: ["interoperability", "FHIR", "integration"],
      fr: ["interopérabilité", "FHIR", "intégration"],
      es: ["interoperabilidad", "FHIR", "integración"],
    }),
    coverImage: "/file.svg",
    readingMinutes: 8,
    body: t({
      en: `Standards like FHIR provide the scaffolding, but the final mile of data integration is always specific to each organization’s systems and workflows. Interfaces are brittle, vocabularies differ, and even the meaning of fields drifts over time.\n\nThe path forward is to treat interoperability as a product, not a project: version your mappings, observe real-world payloads, and build error handling and replay into the core. Collect a public ledger of transform decisions — why a code maps to a concept — so when a vendor changes a feed, your team can reason about the change.\n\nStart small. Synchronize a single clinical concept end-to-end, such as allergies or problems. Verify in the UI, not only the payloads. Once trustworthy, replicate the approach to adjacent concepts.`,
      fr: `Les standards comme FHIR offrent l'ossature, mais le dernier kilomètre de l'intégration des données est toujours spécifique aux systèmes et aux flux de chaque organisation. Les interfaces sont fragiles, les vocabulaires diffèrent, et la signification des champs dérive avec le temps.\n\nIl faut traiter l'interopérabilité comme un produit et non un projet : versionner les mappings, observer les charges utiles réelles, et intégrer la gestion d'erreurs et la relecture dans le cœur. Conservez un registre des décisions de transformation — pourquoi un code correspond à un concept — afin que lorsqu'un fournisseur modifie un flux, votre équipe puisse raisonner sur le changement.\n\nCommencez petit. Synchronisez un seul concept clinique de bout en bout, comme les allergies ou les problèmes. Vérifiez dans l'interface, pas uniquement les charges utiles. Une fois fiable, répliquez l'approche aux concepts adjacents.`,
      es: `Los estándares como FHIR ofrecen el andamiaje, pero el último tramo de la integración de datos siempre es específico a los sistemas y flujos de cada organización. Las interfaces son frágiles, los vocabularios difieren y el significado de los campos cambia con el tiempo.\n\nTrate la interoperabilidad como un producto, no un proyecto: versione sus mapeos, observe cargas útiles reales e incorpore manejo de errores y reintentos en el núcleo. Mantenga un registro público de decisiones de transformación —por qué un código corresponde a un concepto— para que, cuando un proveedor cambie un feed, su equipo pueda razonar sobre el cambio.\n\nEmpiece pequeño. Sincronice un solo concepto clínico de punta a punta, como alergias o problemas. Verifique en la interfaz, no solo en las cargas. Una vez confiable, replique el enfoque a conceptos adyacentes.`,
    }),
  },
} satisfies Dictionary;

export default blogDataInterop;


