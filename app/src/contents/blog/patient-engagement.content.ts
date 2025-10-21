import { t, type Dictionary } from "intlayer";

const blogPatientEngagement = {
  key: "blog-patient-engagement",
  content: {
    slug: "patient-engagement",
    title: t({
      en: "Patient engagement that respects time and context",
      fr: "Engagement patient qui respecte le temps et le contexte",
      es: "Participación del paciente que respeta tiempo y contexto",
    }),
    description: t({
      en: "How to communicate just enough, just in time, on the right channel.",
      fr: "Communiquer juste ce qu'il faut, au bon moment, sur le bon canal.",
      es: "Cómo comunicar lo justo, a tiempo y en el canal correcto.",
    }),
    date: "2025-04-12",
    author: {
      name: t({ en: "Team Toboggan", fr: "Équipe Toboggan", es: "Equipo Toboggan" }),
      avatarUrl: "/globe.svg",
    },
    tags: t({
      en: ["engagement", "communication", "experience"],
      fr: ["engagement", "communication", "expérience"],
      es: ["participación", "comunicación", "experiencia"],
    }),
    coverImage: "/window.svg",
    readingMinutes: 8,
    body: t({
      en: `Messages that ask for everything get ignored. Messages that ask for one clear action get done. The craft of engagement is to sequence small requests that move care forward — confirm your appointment, answer one safety question, upload a photo of your medication.\n\nPick the channel that creates the least friction for the task: SMS for confirmations, email for summaries, portal for detailed forms. Make progress visible and save partial work.\n\nThe best feedback loop is when patients feel their effort changed something real. Close the loop explicitly: “Thanks — your care team received your update and adjusted your plan.”`,
      fr: `Les messages qui demandent tout sont ignorés. Ceux qui demandent une action claire sont réalisés. L'art de l'engagement consiste à séquencer de petites requêtes qui font avancer les soins — confirmer un rendez-vous, répondre à une question de sécurité, téléverser une photo d'un médicament.\n\nChoisissez le canal le moins frictionnel : SMS pour confirmer, email pour résumer, portail pour les formulaires détaillés. Rendez visible la progression et sauvegardez les brouillons.\n\nLe meilleur retour, c'est lorsque le patient sent que son effort a changé quelque chose de réel. Bouclez la boucle explicitement : « Merci — votre équipe a reçu votre mise à jour et a ajusté votre plan. »`,
      es: `Los mensajes que piden todo se ignoran. Los que piden una acción clara se realizan. El oficio del compromiso es secuenciar pequeñas solicitudes que hacen avanzar la atención —confirmar cita, responder una pregunta de seguridad, subir una foto del medicamento—.\n\nElija el canal con menos fricción: SMS para confirmaciones, email para resúmenes, portal para formularios detallados. Haga visible el progreso y guarde borradores.\n\nEl mejor ciclo de retroalimentación es cuando el paciente siente que su esfuerzo cambió algo real. Cierre el ciclo explícitamente: “Gracias — su equipo recibió su actualización y ajustó su plan”.`,
    }),
  },
} satisfies Dictionary;

export default blogPatientEngagement;


