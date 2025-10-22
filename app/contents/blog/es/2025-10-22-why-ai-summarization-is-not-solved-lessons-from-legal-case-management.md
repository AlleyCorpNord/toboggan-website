---
title: "Por qué el resumen automático con IA no está resuelto: lecciones de la gestión de casos legales"
excerpt: Simplemente dile a ChatGPT que lo resuma.
coverImage: /media/pexels-eugeniofr-30005297.jpg
date: 2025-10-22T15:18:00.000-04:00
---
Esta frase resuena en incontables reuniones de estrategia de IA, reflejando una peligrosa simplificación. Aunque los LLM modernos presumen de impresionantes ventanas de contexto, nuestros proyectos recientes con organizaciones de justicia revelaron por qué el resumen de documentos sigue siendo una de las implementaciones de IA más desafiantes, y por qué el éxito requiere más que tecnología potente.

Trabajamos con dos organizaciones que gestionan casos legales complejos: [Recidiviz](<>), ayudando a agentes de libertad condicional a entender las necesidades de sus clientes, y [Mobile Pathways](<>), asistiendo a abogados de inmigración en la preparación de casos. Ambas se enfrentaban al mismo reto: extraer ideas clave de cientos de notas de casos que abarcan años de historial.

#### El problema de alineación con las partes interesadas

Antes de abordar los retos técnicos, Mobile Pathways nos enseñó que definir “buen resumen” suele ser la parte más difícil. Los requisitos iniciales esperaban resúmenes detallados en párrafos, pero cuando se mostraron a un conjunto más amplio de expertos en la materia, los consideraron demasiado prolijos y difíciles de leer.

**El verdadero desafío**: Las partes interesadas rara vez saben lo que quieren hasta que lo ven. Cuando un stakeholder prioriza la cobertura exhaustiva, otro solicita un resultado conciso y accionable. Este desalineamiento no es un problema técnico, es organizativo, y ninguna ingeniería de prompts puede resolverlo.

**Nuestra solución**: Recopilación de requisitos en múltiples iteraciones con todas las partes interesadas presentes. Tratamos la definición del resumen como un proceso de diseño iterativo, no como una especificación de una sola vez. Esta fase de alineación tomó más tiempo que la implementación técnica, pero fue crítica para la adopción.

#### La paradoja de la ventana de contexto

De forma contraintuitiva, las ventanas de contexto más grandes a menudo empeoraron nuestros resúmenes, no los mejoraron. Al procesar casos con más de 700 notas que abarcaban años de historial legal para Recidiviz, nos encontramos con dos problemas críticos:

**Perdido en el medio**: A pesar de que todas las notas cabían en la ventana de contexto, los LLM omitían sistemáticamente información crítica enterrada en medio de entradas largas. Pregunta a un LLM: “¿Este caso de 50,000 tokens mencionó problemas de vivienda?” y podría responder con confianza “no” mientras la información aparece claramente en el token 25,000.

**Caos no determinista**: Incluso con temperatura cero, procesar millones de tokens introdujo suficiente variabilidad como para que entradas idénticas produjeran resúmenes muy diferentes. Esto dificultaba la evaluación sistemática y podía erosionar la confianza de los usuarios.

La solución no eran ventanas de contexto más grandes, sino un filtrado más inteligente.

#### El gran experimento de filtrado

Probamos de forma sistemática distintos enfoques para identificar información relevante antes del resumen para Recidiviz:

###### Escenario 0: Fallo por fuerza bruta

Enviar todas las notas directamente al LLM produjo resúmenes inconsistentes e incompletos. El mecanismo de atención no podía priorizar eficazmente la información relevante a lo largo de cientos de notas.

###### Escenario 1: Clasificación zero-shot con BERT

La clasificación con BERT mostró mejoras pero pasó por alto contextos legales matizados. Más importante aún, los costes de ajuste fino hicieron que este enfoque fuera comercialmente inviable frente a alternativas generativas.

###### Escenario 2: Filtrado basado en embeddings

La coincidencia por similitud vectorial ofreció eficiencia computacional y fácil ajuste, pero omitía notas con información relevante expresada de forma distinta a nuestras consultas por categoría.

###### Escenario 3: Clasificación a nivel de frase con LLM

Usar Gemini 2.0 Flash para clasificar oraciones individuales mostró potencial, pero se perdía contexto crucial al fragmentar las notas. El análisis del resultado estructurado también introdujo errores.

###### Escenario 4: Categorización a nivel de nota (Ganador)

Nuestro enfoque final usó un LLM más pequeño (Gemini 2.0 Flash) para categorizar notas completas y luego envió las notas relevantes a un modelo más grande (Gemini 2.0 Pro) para el resumen. Esto preservó el contexto mientras reducía el ruido, logrando un 90% de precisión en el resumen en las categorías de empleo, vivienda y rehabilitación.

#### Conocimiento de dominio como código

Ambos proyectos reforzaron que el resumen legal no es solo un problema de procesamiento de texto, sino un reto de representación del conocimiento:

**Expansión de siglas** (Recidiviz): Los documentos legales están llenos de abreviaturas especializadas que confunden a los LLM. Construimos diccionarios de consulta para expandir términos como “DOC” (Department of Corrections) antes del procesamiento.

**Reestructuración del contexto**: Los resúmenes legales eficaces no solo son más cortos, están reestructurados en torno a las necesidades de toma de decisiones. Los agentes de libertad condicional necesitaban un énfasis en la información diferente al de los abogados defensores, quienes requerían un enfoque distinto del que el CTO especificó inicialmente.

**Definición iterativa**: Los requisitos del resumen evolucionaron mediante la retroalimentación de las partes interesadas. Lo que parecía exhaustivo para ejecutivos resultó abrumador para profesionales que necesitaban información accionable, no cobertura exhaustiva.

#### Disponibilidad de expertos y desafíos de evaluación

Ambos proyectos revelaron la escasez de tiempo de expertos del dominio para la evaluación. En Recidiviz, pasamos una semana completa con expertos anotando solo seis casos. Mobile Pathways enfrentó limitaciones aún mayores: las abogadas y los abogados ocupados tenían una disponibilidad mínima para evaluar el sistema.

**La innovación de Mobile Pathways**: Desarrollamos un sistema de LLM como juez validado por la abogada para implementar sus criterios de evaluación. Esto permitió una evaluación continua de la calidad sin interrumpir constantemente el trabajo legal.

**El enfoque de Recidiviz**: Construimos un marco integral de evaluación en línea que combina múltiples métricas —detección de alucinaciones, exactitud del resumen, puntuaciones de fidelidad, alineación del prompt— usando tanto LLM como juez como métricas tradicionales de PLN. Estas se combinan en una puntuación de confianza ponderada que correlaciona fuertemente con el rendimiento fuera de línea y permite el monitoreo continuo de la calidad en producción.

Ambos enfoques resolvieron el mismo problema fundamental: cómo mantener la calidad cuando la verdad de referencia es cara y el tiempo de los expertos es escaso.

#### Por qué importa

Nuestra experiencia en dos proyectos revela que un resumen con IA listo para producción requiere abordar desafíos en múltiples dimensiones:

1. Systematic Filtering

   : Las ventanas de contexto por sí solas no resuelven la sobrecarga de información
2. Domain Integration

   : El conocimiento especializado debe codificarse, no solo pedirse con prompts
3. Stakeholder Alignment

   : Los requisitos emergen mediante iteración, no por especificación
4. Expert Scarcity

   : Los sistemas de evaluación deben funcionar con disponibilidad limitada de expertos en el dominio
5. Production Observability

   : Los entornos de alto riesgo requieren un monitoreo integral y una evaluación robusta.