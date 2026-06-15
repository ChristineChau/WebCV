const translations = {
  fr: {
    nav: {
      experience: 'Expérience',
      projets: 'Projets',
      logiciels: 'Logiciels',
      formation: 'Formation',
      certifications: 'Certifications',
      recommandations: 'Recommandations',
      contact: 'Contact',
    },
    hero: {
      titre: 'Ingénieure géotechnique',
      description: "Diplômée d'un Master en géotechnique et forte de 4 ans d'expérience en bureau d'études, j'ai contribué à des projets variés en tant que chargée d'études, du dimensionnement de fondations à la stabilité de pentes, en passant par la conception d'ouvrages de soutènement. Rigoureuse et engagée, je cherche aujourd'hui à élargir mon champ d'action en combinant expertise technique et gestion de projet, pour piloter des projets d'ingénierie ambitieux.",
    },
    experience: {
      titre: 'Expérience professionnelle',
      postes: [
        {
          id: 'exp1',
          titre: 'Ingénieure géotechnique',
          entreprise: 'WSP France',
          date: '09/2021 – 07/2025',
          description: "Réalisation de missions géotechniques des phases G1 à G5 : étude documentaire, dimensionnement, stabilité, supervision et suivi de chantier, réponse d'appel d'offre, esquisse de gestion financière.",
        },
        {
          id: 'exp2',
          titre: "Stagiaire – Pôle Ouvrage d'Art Génie Civil",
          entreprise: 'WSP France',
          date: '03/2021 – 08/2021',
          description: "Étude géotechnique pour le projet de l'élargissement de l'A57 à Toulon. Rédaction de note d'hypothèse géotechnique, de note de dimensionnement de fondation de bassin et de note d'hypothèses générales de murs de soutènement.",
        },
        {
          id: 'exp3',
          titre: 'Stagiaire – Laboratoire IFSTTAR',
          entreprise: 'IFSTTAR',
          date: '05/2020 – 07/2020',
          description: "Traitement de données et analyse des impacts des propriétés physiques d'un sol sur les propriétés mécaniques d'un mélange sol-ciment (soil-mixing), dans le cadre du renforcement de la digue de la Loire.",
        },
        {
          id: 'exp4',
          titre: 'Stagiaire',
          entreprise: 'Verdi Ingénierie',
          date: '07/2018',
          description: "Réalisation d'une étude historique, documentaire et d'une évaluation de la qualité des milieux. Exploitation de banque de données (géorisques, sigessn, infoterre, météofrance etc.). Documentation sur certains concepts et méthodes.",
        },
      ],
    },
    projets: {
      titre: 'Mes projets',
      sousTitre: "Découvrez les projets auxquels j'ai participé en cliquant sur une catégorie.",
      categories: {
        batiment: 'Bâtiment',
        maritime: 'Maritime & fluvial',
        minier: 'Minier',
        infrastructure: 'Infrastructure',
        divers: 'Divers',
      },
      data: {
        batiment: [
          { date: '2021 – en cours', titre: 'Collège Vélizy', client: 'Eiffage – Mairie des Yvelines', description: "Mission G2 AVP et PRO : démolition et reconstruction d'une enceinte de collège sur pieux. Dimensionnement des fondations (micropieux, semelles superficielles et radier), dimensionnement des talus. Mission G4 suivi des documents et du chantier." },
          { date: '2024', titre: 'Bâtiment tertiaire', client: 'Hempel', description: "Diagnostic géotechnique d'un bâtiment présentant des fissures en collaboration avec le pôle structure." },
          { date: '2024', titre: 'Station de pompage', client: 'EDF', description: "Étude de fondation en traction afin de contrer une poussée hydraulique sur un bâtiment enterré. Micropieux en traction et clous." },
          { date: '2024', titre: 'Data Center', client: 'Client confidentiel', description: "Élaboration d'un rapport de type G1 en anglais pour un client du Royaume-Uni." },
          { date: '2023', titre: 'Data Center', client: 'LCP', description: "Réalisation d'un rapport de type G2 PRO avec dimensionnement de pieux, semelles, mur de soutènement, paroi berlinoise, plateforme, talus provisoire." },
          { date: '2022', titre: 'Tunnel', client: 'OCDE', description: "Maître d'œuvre de travaux d'étanchéité de tunnel." },
          { date: '2022', titre: 'Bâtiment', client: 'CNAM', description: "Suivi des documents et du chantier en phase G4 de la construction d'un bâtiment en R+6 avec sous-sol." },
        ],
        maritime: [
          { date: '2024', titre: 'La passerelle de la Halte', client: 'Vienne Condrieu', description: "G2 PRO sur les pieux d'une passerelle et de duc d'albe." },
          { date: '2022', titre: 'Extension du port', client: 'Port de Dunkerque', description: "Étude de dimensionnement des palplanches, de digue, des ducs d'albe." },
        ],
        minier: [
          { date: '2022', titre: 'Projet Parcs à Résidus', client: 'Rio Tinto', description: "Équivalent mission géotechnique type G5 (diagnostic s'appuyant sur l'historique des sites et des visites techniques). Suivi et supervision de forages sur site." },
        ],
        infrastructure: [
          { date: '2024', titre: 'Ligne ferroviaire à grande vitesse', client: 'GPSO', description: "Suivi des investigations pour la création d'une nouvelle ligne à grande vitesse. Gestion des plannings, des accès, points d'eau, respect des prescriptions écologiques, audits chantier, relevé des lithologies." },
          { date: '2021', titre: "Élargissement de l'autoroute A57", client: 'NGE', description: "Rédaction de note d'hypothèse géotechnique, de note de dimensionnement de fondation de bassin et de note de murs de soutènement." },
        ],
        divers: [
          { date: '2021 – en cours', titre: 'Ouvrage divers', client: 'Disney', description: "Élaboration d'étude G2 AVP et PRO de fondations de façades, dallage, ouvrages divers. Suivi et supervision de chantier G4. Suivi financier." },
          { date: '2024', titre: 'Fouille de dépollution', client: 'STEEN', description: "Rapport de mission G5 pour préconisation de terrassement pour une fouille afin d'excaver les terres polluées." },
          { date: '2023', titre: 'Auvent', client: 'Port de Calais', description: "G4 suivi chantier et suivi du document de chantier géotechnique pour la réalisation de pieux." },
          { date: '2023', titre: 'Renforcement de musoir', client: 'Naval Group – Lorient', description: "VISA et suivi de chantier pour des injections d'un musoir présentant des pathologies de fissures." },
          { date: '2023', titre: 'Bâtiment', client: 'ADP – Eiffage', description: "G3 pour construction de l'extension d'un bâtiment (dimensionnement de semelles filantes et radier)." },
          { date: '2021', titre: 'Collège Paillerons', client: 'Mairie du 20ème arrondissement de Paris', description: "Maître d'œuvre pour la consolidation d'un mur de soutènement sur un talus." },
          { date: '2021', titre: 'Blindage de fouille de dépollution', client: 'Peugeot Citroën', description: "Étude de blindage de fouille." },
          { date: '2021', titre: 'Coudekerque', client: 'Golder', description: "Étude G1 pour un site de dépollution, étude de blindage de fouille." },
        ],
      },
    },
    logiciels: {
      titre: 'Logiciels',
      liste: [
        { nom: 'Kréa', description: "Modélisation avancée des interactions sol-structure pour concevoir et dimensionner des écrans de soutènement complexes (berlinoise, micro-berlinoise, tirantée, butonnée)." },
        { nom: 'Talren', description: "Analyse de la stabilité des talus et calcul à la rupture pour sécuriser les pentes naturelles et artificielles." },
        { nom: 'Geomur', description: "Vérification de la stabilité externe des murs de soutènement, de la résistance au glissement jusqu'au renversement." },
        { nom: 'Foxta', description: "Dimensionnement complet des fondations superficielles et profondes : portance, tassement et comportement sous charges." },
      ],
    },
    formation: {
      titre: 'Formation',
      diplomes: [
        { date: '2021', titre: 'Master 2 Géotechnique – Géophysique', etablissement: 'Sorbonne Université – Faculté des Sciences' },
        { date: '2020', titre: 'Master 1 – À compléter', etablissement: 'À compléter' },
        { date: '2019', titre: 'Licence en Géosciences', etablissement: 'Université Sorbonne – Faculté des Sciences et Ingénierie (UPMC, Paris VI), spécialité géotechnique (avec le CNAM)' },
      ],
    },
    certifications: {
      titre: 'Certifications',
      liste: [
        { titre: 'Sauvetage Secourisme du Travail', organisme: 'Apave', date: '03/2023', description: "Formation aux gestes de premiers secours en milieu professionnel." },
        { titre: 'AIPR Encadrant et/ou Concepteur', organisme: 'Apave', date: '04/2023', description: "Autorisation d'Intervention à Proximité des Réseaux, obligatoire pour intervenir près des réseaux souterrains sur chantier." },
        { titre: "Techniques d'excavation et de soutènement en site urbain", organisme: 'Ponts Formation Conseil', date: '06/2022', description: "Formation spécialisée sur les méthodes de fouille et de soutènement en environnement urbain contraint." },
        { titre: 'Conception des fondations', organisme: 'Ponts Formation Conseil', date: '10/2023', description: "Formation avancée sur le dimensionnement et la conception des fondations superficielles et profondes." },
      ],
    },
    recommandations: {
      titre: 'Recommandations',
      personnes: [
        { initiales: 'NK', nom: 'Nicole Khoueiry', poste: 'Cheffe de projet en géotechnique', linkedin: null, linkedinLabel: 'LinkedIn — à ajouter', pdf: 'khoueiry' },
        { initiales: 'PG', nom: 'Pierre Garnier', poste: 'Ancien responsable opérationnel du département géotechnique de WSP France, Chargé d\'affaires à l\'export chez Menard', linkedin: 'https://www.linkedin.com/in/pierre-garnier-2930b82b/', linkedinLabel: 'Voir le profil LinkedIn', pdf: 'garnier' },
      ],
    },
    contact: {
      titre: 'Ouverte à de nouvelles opportunités',
      description: "Enthousiaste à l'idée de rejoindre une équipe dynamique et de contribuer à des projets ambitieux. N'hésitez pas à me contacter !",
      email: 'Email',
      linkedin: 'LinkedIn',
    },
  },
  en: {
    nav: {
      experience: 'Experience',
      projets: 'Projects',
      logiciels: 'Software',
      formation: 'Education',
      certifications: 'Certifications',
      recommandations: 'References',
      contact: 'Contact',
    },
    hero: {
      titre: 'Geotechnical Engineer',
      description: "Holding a Master's degree in Geotechnics and with 4 years of experience in a consulting firm, I have contributed to a wide range of projects as a project engineer, from foundation design to slope stability analysis and retaining structure design. Detail-oriented and driven, I am now looking to broaden my scope by combining technical expertise with project management to lead ambitious engineering projects.",
    },
    experience: {
      titre: 'Professional Experience',
      postes: [
        {
          id: 'exp1',
          titre: 'Geotechnical Engineer',
          entreprise: 'WSP France',
          date: '09/2021 – 07/2025',
          description: "Carrying out geotechnical missions from phases G1 to G5: desk study, dimensioning, stability analysis, supervision and site monitoring, tender response, financial management outline.",
        },
        {
          id: 'exp2',
          titre: 'Intern – Civil Engineering Department',
          entreprise: 'WSP France',
          date: '03/2021 – 08/2021',
          description: "Geotechnical study for the widening project of the A57 motorway in Toulon. Drafting of geotechnical hypothesis notes, basin foundation dimensioning notes and retaining wall hypothesis notes.",
        },
        {
          id: 'exp3',
          titre: 'Intern – IFSTTAR Laboratory',
          entreprise: 'IFSTTAR',
          date: '05/2020 – 07/2020',
          description: "Data processing and analysis of the impact of soil physical properties on the mechanical properties of a soil-cement mixture (soil-mixing), as part of the reinforcement of the Loire river levee.",
        },
        {
          id: 'exp4',
          titre: 'Intern',
          entreprise: 'Verdi Ingénierie',
          date: '07/2018',
          description: "Historical and documentary study and assessment of environmental quality. Use of databases (géorisques, sigessn, infoterre, météofrance, etc.). Documentation of certain concepts and methods.",
        },
      ],
    },
    projets: {
      titre: 'My Projects',
      sousTitre: 'Explore the projects I have contributed to by selecting a category.',
      categories: {
        batiment: 'Building',
        maritime: 'Maritime & inland waterway',
        minier: 'Mining',
        infrastructure: 'Infrastructure',
        divers: 'Miscellaneous',
      },
      data: {
        batiment: [
          { date: '2021 – ongoing', titre: 'Collège Vélizy', client: 'Eiffage – Mairie des Yvelines', description: "G2 AVP and PRO mission: demolition and reconstruction of a school complex on piles. Foundation design (micropiles, shallow foundations and raft), slope design. G4 document and site monitoring mission." },
          { date: '2024', titre: 'Office building', client: 'Hempel', description: "Geotechnical diagnosis of a building showing cracks, in collaboration with the structural engineering department." },
          { date: '2024', titre: 'Pumping station', client: 'EDF', description: "Foundation study under tension to counteract hydraulic uplift on a buried structure. Tension micropiles and soil nails." },
          { date: '2024', titre: 'Data Centre', client: 'Confidential client', description: "Preparation of a G1 report in English for a client based in the United Kingdom." },
          { date: '2023', titre: 'Data Centre', client: 'LCP', description: "G2 PRO report including pile design, shallow foundation design, retaining wall, Berlin wall, platform and temporary slope design." },
          { date: '2022', titre: 'Tunnel', client: 'OECD', description: "Project manager for waterproofing works on a tunnel." },
          { date: '2022', titre: 'Building', client: 'CNAM', description: "Document and site monitoring during the G4 phase of the construction of a R+6 building with basement." },
        ],
        maritime: [
          { date: '2024', titre: 'La passerelle de la Halte', client: 'Vienne Condrieu', description: "G2 PRO study on the piles of a footbridge and dolphin piles." },
          { date: '2022', titre: 'Port extension', client: 'Port de Dunkerque', description: "Dimensioning study of sheet piles, dyke and dolphin piles." },
        ],
        minier: [
          { date: '2022', titre: 'Tailings Storage Facility Project', client: 'Rio Tinto', description: "Equivalent of a G5 geotechnical mission (diagnosis based on site history and technical visits). Monitoring and supervision of on-site boreholes." },
        ],
        infrastructure: [
          { date: '2024', titre: 'High-speed railway line', client: 'GPSO', description: "Investigation monitoring for the creation of a new high-speed railway line. Schedule management, access, water points, compliance with ecological requirements, site audits, lithology recording." },
          { date: '2021', titre: 'A57 motorway widening', client: 'NGE', description: "Drafting of geotechnical hypothesis notes, basin foundation dimensioning notes and retaining wall notes." },
        ],
        divers: [
          { date: '2021 – ongoing', titre: 'Miscellaneous structures', client: 'Disney', description: "G2 AVP and PRO studies for façade foundations, floor slabs and miscellaneous structures. G4 site supervision and monitoring. Financial monitoring." },
          { date: '2024', titre: 'Decontamination excavation', client: 'STEEN', description: "G5 mission report with earthwork recommendations for excavation of polluted soil." },
          { date: '2023', titre: 'Canopy', client: 'Port de Calais', description: "G4 site monitoring and geotechnical document monitoring for pile construction." },
          { date: '2023', titre: 'Dolphin reinforcement', client: 'Naval Group – Lorient', description: "VISA and site monitoring for grouting of a dolphin showing crack pathologies." },
          { date: '2023', titre: 'Building', client: 'ADP – Eiffage', description: "G3 for construction of a building extension (strip footing and raft dimensioning)." },
          { date: '2021', titre: 'Collège Paillerons', client: 'Mairie du 20ème arrondissement de Paris', description: "Project manager for the consolidation of a retaining wall on a slope." },
          { date: '2021', titre: 'Decontamination excavation shoring', client: 'Peugeot Citroën', description: "Excavation shoring study." },
          { date: '2021', titre: 'Coudekerque', client: 'Golder', description: "G1 study for a decontamination site, excavation shoring study." },
        ],
      },
    },
    logiciels: {
      titre: 'Software',
      liste: [
        { nom: 'Kréa', description: "Advanced modelling of soil-structure interactions for the design and dimensioning of complex retaining screens (Berlin wall, micro-Berlin wall, anchored, strutted)." },
        { nom: 'Talren', description: "Slope stability analysis and failure calculation to secure natural and artificial slopes." },
        { nom: 'Geomur', description: "Verification of the external stability of retaining walls, from sliding resistance to overturning." },
        { nom: 'Foxta', description: "Complete design of shallow and deep foundations: bearing capacity, settlement and behaviour under loads." },
      ],
    },
    formation: {
      titre: 'Education',
      diplomes: [
        { date: '2021', titre: "Master's degree in Geotechnics – Geophysics", etablissement: 'Sorbonne University – Faculty of Sciences' },
        { date: '2020', titre: "Master's degree year 1 – To be completed", etablissement: 'To be completed' },
        { date: '2019', titre: "Bachelor's degree in Geosciences", etablissement: 'Sorbonne University – Faculty of Sciences and Engineering (UPMC, Paris VI), specialisation in Geotechnics (with CNAM)' },
      ],
    },
    certifications: {
      titre: 'Certifications',
      liste: [
        { titre: 'Workplace First Aid', organisme: 'Apave', date: '03/2023', description: "Training in first aid gestures in a professional environment." },
        { titre: 'AIPR Supervisor and/or Designer', organisme: 'Apave', date: '04/2023', description: "Authorisation to work near underground networks, mandatory for working near underground utilities on construction sites." },
        { titre: 'Excavation and retaining techniques in urban environments', organisme: 'Ponts Formation Conseil', date: '06/2022', description: "Specialised training on excavation and retaining methods in constrained urban environments." },
        { titre: 'Foundation Design', organisme: 'Ponts Formation Conseil', date: '10/2023', description: "Advanced training on the dimensioning and design of shallow and deep foundations." },
      ],
    },
    recommandations: {
      titre: 'References',
      personnes: [
        { initiales: 'NK', nom: 'Nicole Khoueiry', poste: 'Geotechnical Project Manager', linkedin: null, linkedinLabel: 'LinkedIn – to be added', pdf: 'khoueiry' },
        { initiales: 'PG', nom: 'Pierre Garnier', poste: 'Former Head of Geotechnical Operations at WSP France, Export Business Manager at Menard', linkedin: 'https://www.linkedin.com/in/pierre-garnier-2930b82b/', linkedinLabel: 'View LinkedIn profile', pdf: 'garnier' },
      ],
    },
    contact: {
      titre: 'Open to new opportunities',
      description: "Enthusiastic about joining a dynamic team and contributing to ambitious projects. Feel free to get in touch!",
      email: 'Email',
      linkedin: 'LinkedIn',
    },
  },
}

export default translations
