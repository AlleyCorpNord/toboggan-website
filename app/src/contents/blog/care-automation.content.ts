import { t, type Dictionary } from "intlayer";

const blogCareAutomation = {
  key: "blog-care-automation",
  content: {
    slug: "care-automation",
    title: t({
      en: "Care automation that respects clinical judgment",
      fr: "Automatisation des soins qui respecte le jugement clinique",
      es: "Automatización del cuidado que respeta el juicio clínico",
    }),
    description: t({
      en: "How automation can reduce administrative burden without getting in the way of care.",
      fr: "Comment l'automatisation peut réduire la charge administrative sans entraver les soins.",
      es: "Cómo la automatización reduce la carga administrativa sin interferir con la atención.",
    }),
    date: "2025-09-15",
    author: {
      name: t({ en: "Team Toboggan", fr: "Équipe Toboggan", es: "Equipo Toboggan" }),
      avatarUrl: "/globe.svg",
    },
    tags: t({
      en: ["automation", "clinical", "workflow"],
      fr: ["automatisation", "clinique", "flux"],
      es: ["automatización", "clínico", "flujo"],
    }),
    coverImage: "/window.svg",
    readingMinutes: 7,
    body: t({
      en: `Automation in healthcare is not about replacing clinical judgment. It is about removing friction in the thousands of tiny moments that sit around care — prior auth requests, status checks, eligibility verifications, redundant documentation, and the countless nudges required to keep information flowing across disconnected systems.\n\nThe most successful implementations begin by mapping the work as it truly happens. That includes the unspoken shortcuts, the blended roles between clinicians and administrative staff, and the realities of the data that actually exists in the record. Automations should wrap around that truth rather than impose a theoretical ideal.\n\nWe recommend beginning with low-risk, high-friction tasks that eat into time: verifying coverage at intake, collecting missing forms, or routing follow-up tasks. By keeping humans in the loop and making the state of an automation visible, teams quickly build trust and confidence in the system.`,
      fr: `L'automatisation dans la santé ne remplace pas le jugement clinique. Elle supprime les frictions présentes dans des milliers de micro-moments autour des soins — demandes d'autorisation, vérifications de statut, éligibilité, documentation redondante, et les innombrables rappels nécessaires pour faire circuler l'information entre des systèmes déconnectés.\n\nLes meilleures mises en œuvre commencent par cartographier le travail tel qu'il se déroule réellement, y compris les raccourcis implicites, les rôles hybrides entre cliniciens et administratifs, et la réalité des données réellement présentes dans le dossier. Les automatisations doivent épouser cette réalité plutôt qu'imposer un idéal théorique.\n\nCommencez par des tâches à faible risque mais à forte friction : vérification de la couverture à l'admission, collecte de formulaires manquants, ou routage des suivis. En gardant l'humain dans la boucle et en rendant l'état des automatisations visible, les équipes gagnent rapidement en confiance.`,
      es: `La automatización en salud no reemplaza el juicio clínico. Quita fricción en miles de micro-momentos alrededor de la atención — solicitudes de autorización, verificaciones de estado, elegibilidad, documentación redundante, y los innumerables avisos necesarios para mover información entre sistemas desconectados.\n\nLas implementaciones exitosas comienzan mapeando el trabajo como realmente ocurre, incluidos atajos tácitos, roles compartidos entre clínicos y personal administrativo, y la realidad de los datos disponibles en el registro. Las automatizaciones deben adaptarse a esa verdad en lugar de imponer un ideal teórico.\n\nRecomendamos empezar con tareas de bajo riesgo y alta fricción: verificación de cobertura en admisión, recolección de formularios faltantes o enrutamiento de tareas de seguimiento. Con humanos en el ciclo y un estado visible, los equipos construyen confianza rápidamente.`,
    }),
  },
} satisfies Dictionary;

export default blogCareAutomation;


