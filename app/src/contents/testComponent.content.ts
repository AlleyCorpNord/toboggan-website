import { t, type Dictionary } from 'intlayer';

const testComponentContent = {
  key: 'test-component',
  content: {
    title: t({ en: "Transform clinical operations with workflows clinicians embrace. Local Editor Update 2", es: "Transforma las operaciones clínicas con flujos que los clínicos aceptan", fr: "Transformez les opérations cliniques avec des flux que les cliniciens acceptent" }),
    description: t({ 
      en: "Healthcare teams waste valuable time navigating disconnected systems, reducing hours available for patient care. Traditional EHRs and operational tools often create friction rather than flow, forcing clinicians to adapt their practice to technology instead of the reverse.", 
      es: "Los equipos de atención médica gastan valioso tiempo navegando por sistemas desconectados, reduciendo las horas disponibles para el cuidado de los pacientes. Las EHR tradicionales y las herramientas operacionales a menudo crean fricción en lugar de flujo, forzando a los clínicos a adaptar su práctica a la tecnología en lugar de lo contrario.", 
      fr: "Les équipes de soins de santé gaspillent du temps précieux en naviguant dans des systèmes déconnectés, réduisant les heures disponibles pour le soin des patients. Les EHR traditionnels et les outils opérationnels créent souvent de la friction plutôt que du flux, forçant les cliniciens à adapter leur pratique à la technologie plutôt que le contraire." 
    }),
  },
} satisfies Dictionary;

export default testComponentContent;
