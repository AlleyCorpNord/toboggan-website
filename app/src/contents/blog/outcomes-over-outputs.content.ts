import { t, type Dictionary } from "intlayer";

const blogOutcomesOverOutputs = {
  key: "blog-outcomes-over-outputs",
  content: {
    slug: "outcomes-over-outputs",
    title: t({
      en: "Outcomes over outputs in healthcare software",
      fr: "Des résultats plutôt que des livrables dans les logiciels de santé",
      es: "Resultados por encima de entregables en software de salud",
    }),
    description: t({
      en: "A framework for measuring what actually improves care.",
      fr: "Un cadre pour mesurer ce qui améliore vraiment les soins.",
      es: "Un marco para medir lo que realmente mejora la atención.",
    }),
    date: "2025-06-18",
    author: {
      name: t({ en: "Team Toboggan", fr: "Équipe Toboggan", es: "Equipo Toboggan" }),
      avatarUrl: "/globe.svg",
    },
    tags: t({
      en: ["outcomes", "measurement", "product"],
      fr: ["résultats", "mesure", "produit"],
      es: ["resultados", "medición", "producto"],
    }),
    coverImage: "/vercel.svg",
    readingMinutes: 6,
    body: t({
      en: `Shipping features is easy to count but rarely tells the story of patient impact. We advocate for outcome-led roadmaps: define a measurable change in the world — fewer phone tags, faster transitions of care, reduced no-shows — and let that drive planning.\n\nTeams report better alignment when they review a small set of outcome metrics every week alongside deployment activity. When an outcome moves, trace the user journeys that changed. If it doesn’t, look for friction you missed or assumptions that didn’t hold.\n\nThis is not about rejecting velocity; it’s about connecting velocity to value that clinicians and patients can feel.`,
      fr: `Compter les fonctionnalités livrées est simple mais dit peu de l'impact patient. Nous plaidons pour des feuilles de route guidées par les résultats : définir un changement mesurable dans le réel — moins d'appels perdus, des transitions de soins plus rapides, une baisse des absences — et laisser cela guider la planification.\n\nLes équipes sont mieux alignées lorsqu'elles examinent chaque semaine quelques indicateurs de résultat en parallèle de l'activité de déploiement. Quand un résultat bouge, retracez les parcours utilisateurs modifiés. Sinon, cherchez la friction oubliée ou les hypothèses non vérifiées.\n\nIl ne s'agit pas de rejeter la vélocité ; il s'agit de la relier à une valeur tangible pour les cliniciens et les patients.`,
      es: `Contar funcionalidades entregadas es fácil pero rara vez cuenta la historia del impacto en pacientes. Defendemos hojas de ruta guiadas por resultados: definir un cambio medible en el mundo —menos llamadas perdidas, transiciones de cuidado más rápidas, reducción de inasistencias— y dejar que eso dirija la planificación.\n\nLos equipos se alinean mejor cuando revisan un conjunto pequeño de métricas de resultados cada semana junto con la actividad de despliegue. Cuando un resultado cambia, rastree los recorridos que cambiaron. Si no, busque fricción omitida o supuestos que no se cumplieron.\n\nNo se trata de rechazar la velocidad; se trata de conectarla con valor que clínicos y pacientes puedan sentir.`,
    }),
  },
} satisfies Dictionary;

export default blogOutcomesOverOutputs;


