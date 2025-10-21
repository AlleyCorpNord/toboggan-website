import { t, type Dictionary } from "intlayer";

const blogRealtimeCollab = {
  key: "blog-real-time-collaboration",
  content: {
    slug: "real-time-collaboration",
    title: t({
      en: "Real-time collaboration for care teams",
      fr: "Collaboration en temps réel pour les équipes de soins",
      es: "Colaboración en tiempo real para equipos de atención",
    }),
    description: t({
      en: "What it takes to make distributed work feel co-located in clinical settings.",
      fr: "Ce qu'il faut pour que le travail distribué paraisse co-localisé en clinique.",
      es: "Qué se necesita para que el trabajo distribuido se sienta co-localizado en clínica.",
    }),
    date: "2025-05-03",
    author: {
      name: t({ en: "Team Toboggan", fr: "Équipe Toboggan", es: "Equipo Toboggan" }),
      avatarUrl: "/globe.svg",
    },
    tags: t({
      en: ["collaboration", "realtime", "operations"],
      fr: ["collaboration", "temps-réel", "opérations"],
      es: ["colaboración", "tiempo-real", "operaciones"],
    }),
    coverImage: "/globe.svg",
    readingMinutes: 10,
    body: t({
      en: `True collaboration is more than presence indicators. It is the confidence that when you adjust a plan of care, everyone sees the same reality within seconds — not minutes or hours.\n\nThe hardest part in healthcare is not the WebSocket. It's concurrency control, conflict resolution, and traceable audit that satisfies both clinicians and compliance.\n\nA pragmatic design: optimistic updates with semantic merges. Treat tasks, notes, and orders as first-class entities with stable IDs, then apply merges at the entity level. When a conflict is irreconcilable, surface a clear diff that invites a human decision rather than failing silently.`,
      fr: `La véritable collaboration dépasse les simples indicateurs de présence. C'est la certitude que lorsqu'on ajuste un plan de soins, tout le monde voit la même réalité en quelques secondes — pas en minutes ou en heures.\n\nLe plus difficile dans la santé n'est pas le WebSocket. C'est le contrôle de concurrence, la résolution des conflits, et un audit traçable qui satisfont à la fois les cliniciens et la conformité.\n\nUne approche pragmatique : mises à jour optimistes avec fusions sémantiques. Traitez tâches, notes et ordonnances comme des entités de premier plan avec des identifiants stables, puis appliquez les fusions au niveau de l'entité. En cas de conflit insoluble, affichez une comparaison claire pour une décision humaine.`,
      es: `La verdadera colaboración va más allá de los indicadores de presencia. Es la confianza de que cuando ajustas un plan de atención, todos ven la misma realidad en segundos —no en minutos u horas—.\n\nLo más difícil en salud no es el WebSocket. Es el control de concurrencia, la resolución de conflictos y una auditoría trazable que satisfaga a clínicos y cumplimiento.\n\nUn diseño pragmático: actualizaciones optimistas con fusiones semánticas. Trate tareas, notas y órdenes como entidades de primera clase con IDs estables y aplique fusiones a nivel de entidad. Cuando un conflicto no tenga resolución, muestre un diff claro que invite a una decisión humana en lugar de fallar en silencio.`,
    }),
  },
} satisfies Dictionary;

export default blogRealtimeCollab;


