---
title: "Pourquoi la synthèse par IA n’est pas résolue : leçons tirées de la gestion de dossiers juridiques"
excerpt: Dites simplement à ChatGPT de le résumer.
coverImage: /media/pexels-eugeniofr-30005297.jpg
date: 2025-10-22T15:18:00.000-04:00
---
Cette phrase résonne dans d’innombrables réunions de stratégie IA, reflétant une dangereuse simplification. Bien que les LLM modernes affichent des fenêtres de contexte impressionnantes, nos récents projets avec des organisations de justice ont montré pourquoi la synthèse de documents reste l’une des mises en œuvre d’IA les plus difficiles — et pourquoi la réussite exige plus qu’une technologie puissante.

Nous avons travaillé avec deux organisations gérant des dossiers juridiques complexes : [Recidiviz](<>), qui aide les agents de probation à comprendre les besoins des clients, et [Mobile Pathways](<>), qui assiste les avocats en immigration dans la préparation des dossiers. Toutes deux faisaient face au même défi : extraire les informations clés de centaines de notes de dossier couvrant des années d’historique.

#### Le problème d’alignement des parties prenantes

Avant d’aborder les défis techniques, Mobile Pathways nous a appris que définir ce qu’est une « bonne synthèse » est souvent la partie la plus difficile. Les exigences initiales demandaient des résumés détaillés sous forme de paragraphes, mais une fois présentés à un plus large panel d’experts métier, ceux-ci les ont jugés trop verbeux et difficiles à lire.

**Le vrai défi** : Les parties prenantes savent rarement ce qu’elles veulent avant de le voir. Quand l’une privilégie une couverture exhaustive, une autre réclame un rendu concis et exploitable. Ce désalignement n’est pas un problème technique — c’est un problème organisationnel qu’aucune ingénierie de prompts ne peut résoudre.

**Notre solution** : Collecte des besoins en plusieurs itérations avec toutes les parties prenantes réunies. Nous avons traité la définition du résumé comme un processus de conception itératif, et non comme une spécification ponctuelle. Cette phase d’alignement a pris plus de temps que la mise en œuvre technique, mais elle a été déterminante pour l’adoption.

#### Le paradoxe de la fenêtre de contexte

Paradoxalement, des fenêtres de contexte plus grandes ont souvent dégradé nos synthèses, plutôt que de les améliorer. En traitant des dossiers comportant plus de 700 notes s’étalant sur des années d’historique juridique pour Recidiviz, nous avons rencontré deux problèmes critiques :

**Perdu au milieu** : Bien que toutes les notes tiennent dans la fenêtre de contexte, les LLM ignoraient systématiquement des informations essentielles enfouies au milieu de longues entrées. Demandez à un LLM « Ce dossier de 50 000 jetons mentionnait-il des problèmes de logement ? » et il pourra répondre avec assurance « non » alors que l’information se trouvait clairement autour du 25 000e jeton.

**Chaos non déterministe** : Même avec une température nulle, le traitement de millions de jetons introduisait suffisamment de variance pour que des entrées identiques produisent des résumés très différents. Cela rendait l’évaluation systématique très difficile et pouvait éroder la confiance des utilisateurs.

La solution n’était pas d’augmenter la fenêtre de contexte — mais de filtrer plus intelligemment.

#### La grande expérience de filtrage

Nous avons testé systématiquement différentes approches pour identifier l’information pertinente avant la synthèse pour Recidiviz :

###### Scénario 0 : Échec de la force brute

Envoyer toutes les notes directement au LLM produisait des résumés incohérents et incomplets. Le mécanisme d’attention ne parvenait pas à prioriser efficacement l’information pertinente à travers des centaines de notes.

###### Scénario 1 : Classification BERT zero-shot

La classification BERT a montré des progrès, mais manquait des nuances contextuelles juridiques. Plus important encore, les coûts de fine-tuning rendaient cette approche non viable commercialement par rapport aux alternatives génératives.

###### Scénario 2 : Filtrage basé sur des embeddings

L’appariement par similarité vectorielle offrait une efficacité de calcul et un réglage facile, mais passait à côté de notes contenant des informations pertinentes exprimées différemment de nos requêtes de catégories.

###### Scénario 3 : Classification par LLM au niveau de la phrase

L’utilisation de Gemini 2.0 Flash pour classer des phrases individuelles était prometteuse, mais la fragmentation des notes faisait perdre un contexte crucial. L’analyse d’un format de sortie structuré introduisait également des erreurs.

###### Scénario 4 : Catégorisation au niveau de la note (Gagnant)

Notre approche finale utilisait un LLM plus petit (Gemini 2.0 Flash) pour catégoriser des notes complètes, puis envoyait les notes pertinentes à un modèle plus grand (Gemini 2.0 Pro) pour la synthèse. Cela préservait le contexte tout en réduisant le bruit — atteignant 90 % de précision de synthèse sur les catégories emploi, logement et réinsertion.

#### La connaissance métier comme du code

Les deux projets ont confirmé que la synthèse juridique n’est pas seulement un problème de traitement de texte — c’est un défi de représentation des connaissances :

**Expansion des acronymes** (Recidiviz) : Les documents juridiques regorgent d’abréviations spécialisées qui perturbent les LLM. Nous avons construit des dictionnaires de correspondance pour développer des termes comme « DOC » (département des services correctionnels) avant traitement.

**Restructuration du contexte** : Des synthèses juridiques efficaces ne sont pas seulement plus courtes — elles sont restructurées autour des besoins de décision. Les agents de probation avaient besoin de mises en évidence différentes de celles des avocats de la défense, eux-mêmes ayant des priorités distinctes de celles initialement spécifiées par le CTO.

**Définition itérative** : Les exigences de synthèse ont évolué grâce aux retours des parties prenantes. Ce qui paraissait exhaustif aux dirigeants semblait écrasant pour les praticiens, qui avaient besoin d’insights actionnables, pas d’une couverture exhaustive.

#### Disponibilité des experts et défis d’évaluation

Les deux projets ont mis en lumière la rareté du temps des experts du domaine pour l’évaluation. Chez Recidiviz, nous avons passé une semaine entière avec des experts à annoter seulement six dossiers. Mobile Pathways faisait face à des contraintes encore plus fortes — des avocats très occupés avaient très peu de disponibilité pour évaluer le système.

**L’innovation de Mobile Pathways** : Nous avons développé un système d’LLM en tant que juge, validé par l’avocat, pour implémenter ses critères d’évaluation. Cela a permis une évaluation continue de la qualité sans interrompre constamment le travail juridique.

**L’approche Recidiviz** : Nous avons construit un cadre d’évaluation en ligne complet combinant plusieurs métriques — détection des hallucinations, exactitude du résumé, scores de fidélité, alignement du prompt — en utilisant à la fois un LLM en tant que juge et des métriques NLP traditionnelles. Le tout se combine en un score de confiance pondéré corrélé fortement aux performances hors ligne, tout en permettant un suivi continu de la qualité en production.

Ces deux approches ont résolu le même problème fondamental : comment maintenir la qualité lorsque la vérité terrain est coûteuse et que le temps des experts est rare.

#### Pourquoi c’est important

Notre expérience sur deux projets montre que la synthèse par IA prête pour la production exige de traiter des défis sur plusieurs dimensions :

1. **Filtrage systématique**

   : Les fenêtres de contexte seules ne résolvent pas la surcharge d’information
2. **Intégration du domaine**

   : La connaissance spécialisée doit être encodée, pas seulement indiquée via un prompt
3. **Alignement des parties prenantes**

   : Les exigences émergent par l’itération, pas par la spécification
4. **Pénurie d’experts**

   : Les systèmes d’évaluation doivent fonctionner avec une disponibilité limitée des experts du domaine
5. **Observabilité en production**

   : Les environnements à forts enjeux exigent une supervision complète et une évaluation robuste.