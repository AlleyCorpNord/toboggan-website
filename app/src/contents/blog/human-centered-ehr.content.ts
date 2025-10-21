import { t, type Dictionary } from "intlayer";

const blogHumanCenteredEHR = {
  key: "blog-human-centered-ehr",
  content: {
    slug: "human-centered-ehr",
    title: t({
      en: "Designing EHR experiences humans actually like",
      fr: "Concevoir des expériences DPI que les humains apprécient vraiment",
      es: "Diseñar experiencias de HCE que realmente gusten",
    }),
    description: t({
      en: "Turning EHR friction into flow through principled interaction design.",
      fr: "Transformer la friction du DPI en flux grâce au design d'interaction.",
      es: "Convertir la fricción del HCE en flujo con diseño de interacción.",
    }),
    date: "2025-07-10",
    author: {
      name: t({ en: "Team Toboggan", fr: "Équipe Toboggan", es: "Equipo Toboggan" }),
      avatarUrl: "/globe.svg",
    },
    tags: t({
      en: ["UX", "EHR", "design"],
      fr: ["UX", "DPI", "design"],
      es: ["UX", "HCE", "diseño"],
    }),
    coverImage: "/next.svg",
    readingMinutes: 9,
    body: t({
      en: `A human-centered EHR respects attention, reduces cognitive load, and makes the next right action obvious. While customization can help, the real transformation happens when interaction patterns match the user's mental model.\n\nInstead of stacking fields on fields, anchor the experience around a small set of verbs: review, confirm, route, sign. Let information fold and unfold in context rather than jumping between screens. Provide friendly defaults that work most of the time — and make it easy to override when they don't.\n\nThe outcome is not just faster documentation, but calmer attention. When clinicians feel the system helps them practice the way they believe is best, adoption follows without forcing.`,
      fr: `Un DPI centré sur l'humain respecte l'attention, réduit la charge cognitive et rend l'action suivante évidente. La personnalisation aide, mais la transformation réelle se produit lorsque les schémas d'interaction correspondent au modèle mental de l'utilisateur.\n\nPlutôt que d'empiler les champs, ancrez l'expérience autour d'un petit ensemble de verbes : revoir, confirmer, router, signer. Laissez l'information se déployer dans le contexte au lieu de sauter d'un écran à l'autre. Proposez des valeurs par défaut pertinentes — faciles à adapter lorsque nécessaire.\n\nLe résultat n'est pas seulement une documentation plus rapide, mais une attention apaisée. Quand les cliniciens sentent que le système les aide à pratiquer comme ils l'entendent, l'adoption suit naturellement.`,
      es: `Un HCE centrado en el humano respeta la atención, reduce la carga cognitiva y hace obvia la siguiente acción correcta. Aunque la personalización ayuda, la verdadera transformación ocurre cuando los patrones de interacción coinciden con el modelo mental del usuario.\n\nEn lugar de apilar campos, ancle la experiencia en un conjunto pequeño de verbos: revisar, confirmar, enrutar, firmar. Permita que la información se despliegue en contexto en lugar de saltar entre pantallas. Ofrezca valores por defecto amigables que funcionen la mayor parte del tiempo —y que sea fácil de ajustar cuando no—.\n\nEl resultado no es solo documentación más rápida, sino una atención más tranquila. Cuando los clínicos sienten que el sistema les ayuda a practicar como creen mejor, la adopción ocurre sin imponer.`,
    }),
  },
} satisfies Dictionary;

export default blogHumanCenteredEHR;


