export const personal = {
  name: "Anna Marone",
  initials: "AM",
  title: { en: "junior Software Engineer", fr: "Ingénieur Logiciel junior" },
  tagline: {
    en: "Crafting elegant software that scales.",
    fr: "Des logiciels élégants qui passent à l'échelle.",
  },
  bio: {
    en: "I'm a passionate full-stack developer with a background in web and mobile application development. I enjoy designing and building innovative digital solutions, from user-friendly interfaces to functional back-end systems. Through my academic background, professional experiences, and practical projects, I've developed skills in web development, database management, API integration, and problem-solving. I'm always eager to learn, take on new challenges, and create technology that makes a meaningful impact.",
  
    fr: "Je suis une développeuse full-stack passionnée par la conception et le développement de solutions numériques innovantes. Grâce à ma formation en développement d'applications web et mobiles, à mes expériences professionnelles et à la réalisation de projets concrets, j'ai développé des compétences en développement front-end et back-end, gestion de bases de données et intégration d'API. Curieuse, rigoureuse et motivée par l'apprentissage continu, j'aime relever de nouveaux défis et concevoir des applications performantes, intuitives et adaptées aux besoins des utilisateurs.",
  },
  email: "annamarone72@gmail.com",
  github: "https://github.com/ANNAMARONE",
  linkedin: "https://www.linkedin.com/in/anna-marone-667b6b2bb/",
  twitter: "https://twitter.com/alexchen",
  whatsapp: "+221 78 461 58 47",
  location: "Dakar, Senegal",
  available: true,
  cvUrl: "#",
}

export const stats = [
  { value: 1, suffix: "+", label: { en: "Years Experience", fr: "Ans d'Expérience" } },
  { value: 15, suffix: "+", label: { en: "Projects Delivered", fr: "Projets Livrés" } },
  { value: 10, suffix: "+", label: { en: "Happy Clients", fr: "Clients Satisfaits" } },
  //{ value: 15, suffix: "k+", label: { en: "GitHub Stars", fr: "Étoiles GitHub" } },
]

export const values = [
  {
    icon: "💡",
    title: {
      en: "Innovation & Creativity",
      fr: "Innovation et Créativité"
    },
    desc: {
      en: "I enjoy turning ideas into innovative digital solutions that address real-world needs.",
      fr: "J'aime transformer les idées en solutions numériques innovantes qui répondent à des besoins concrets."
    }
  },
  {
    icon: "⚙️",
    title: {
      en: "Quality & Excellence",
      fr: "Qualité et Excellence"
    },
    desc: {
      en: "I strive to write clean, reliable, and maintainable code while building efficient applications.",
      fr: "Je m'efforce de produire un code propre, fiable et évolutif pour concevoir des applications performantes."
    }
  },
  {
    icon: "🤝",
    title: {
      en: "Teamwork & Collaboration",
      fr: "Esprit d'Équipe et Collaboration"
    },
    desc: {
      en: "I believe great projects are built through teamwork, communication, and sharing knowledge.",
      fr: "Je crois que les meilleurs projets se construisent grâce au travail d'équipe, à la communication et au partage des connaissances."
    }
  },
  {
    icon: "📚",
    title: {
      en: "Continuous Learning",
      fr: "Apprentissage Continu"
    },
    desc: {
      en: "I stay curious, embrace new technologies, and continuously develop my technical and professional skills.",
      fr: "Je reste curieuse, ouverte aux nouvelles technologies et déterminée à développer continuellement mes compétences techniques et professionnelles."
    }
  },
];

export const skillCategories = [
  {
    name: { en: "Frontend", fr: "Frontend" },
    color: "#22d3ee",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Angular"],
  },
  {
    name: { en: "Backend", fr: "Backend" },
    color: "#a855f7",
    skills: ["PHP", "Laravel","Spring boot","REST API"],
  },
  {
    name: { en: "Database", fr: "Base de Données" },
    color: "#f59e0b",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    name: { en: "DevOps", fr: "DevOps" },
    color: "#10b981",
    skills: ["Docker", "Git", "GitHub"],
  },
  {
    name: { en: "Analysis & Design", fr: "Analyse et Conception" },
    color: "#8b5cf6",
    skills: ["UML", "MERISE"],
  },
  {
    name: { en: "Other", fr: "Autre" },
    color: "#6366f1",
    skills: ["AI Integration", "SOLID", "Testing"],
  },
]


export const projects = [

  {
    id: "kaay-entreprendre",
    title: "Kaay Entreprendre",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=480&fit=crop&auto=format",
    description: {
      en: "A digital platform dedicated to supporting aspiring entrepreneurs in turning their ideas into successful businesses through expert guidance, tailored resources and personalized support.",
      fr: "Une plateforme numérique dédiée à l'accompagnement des entrepreneurs débutants dans la concrétisation de leurs idées. Elle propose des conseils, des ressources adaptées et un accompagnement personnalisé pour favoriser la réussite de leurs projets."
    },
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: {
      en: [
        "Entrepreneurial project presentation",
        "Information and resource sharing",
        "Entrepreneur guidance",
        "Service and support presentation",
        "Responsive user interface"
      ],
      fr: [
        "Présentation des projets entrepreneuriaux",
        "Partage d'informations et de ressources",
        "Accompagnement des entrepreneurs",
        "Présentation des services et dispositifs de soutien",
        "Interface utilisateur responsive"
      ]
    },
    challenges: {
      en: "Creating an accessible and user-friendly digital platform that clearly communicates entrepreneurial support services.",
      fr: "Concevoir une plateforme numérique accessible et intuitive permettant de présenter clairement les services d'accompagnement entrepreneurial."
    },
    lessons: {
      en: "Improved my skills in web development, user experience design and digital solution development.",
      fr: "Renforcement de mes compétences en développement web, conception d'expérience utilisateur et réalisation de solutions numériques."
    },
    demo: "#",
    github: "#",
  },
  

  {
    id: "kamdaay-crm",
    title: "Application Mobile CRM – Kam-Daay",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=480&fit=crop&auto=format",
    description: {
      en: "A mobile CRM application developed as part of the S@JEF program to help the Kam-Daay group manage its customer relationships, track commercial interactions and improve communication.",
      fr: "Une application mobile CRM développée dans le cadre du programme S@JEF pour accompagner le groupe Kam-Daay dans la gestion de sa relation client, le suivi des interactions commerciales et l'amélioration de sa communication.",
    },
    technologies: ["Développement Mobile", "Base de données", "API REST", "UML", "Gestion de projet"],
    features: {
      en: [
        "Customer portfolio management",
        "Customer information tracking",
        "Commercial interaction management",
        "Customer feedback collection",
        "Improved customer communication"
      ],
      fr: [
        "Gestion du portefeuille clients",
        "Suivi des informations clients",
        "Gestion des interactions commerciales",
        "Collecte des retours clients",
        "Amélioration de la communication client"
      ],
    },
    challenges: {
      en: "Understanding the group's needs and translating them into a practical digital solution.",
      fr: "Comprendre les besoins du groupe et les traduire en une solution numérique adaptée à ses activités."
    },
    lessons: {
      en: "Strengthened my skills in requirements analysis, application development, teamwork and project coordination.",
      fr: "Renforcement de mes compétences en analyse des besoins, développement d'applications, travail d'équipe et coordination de projet."
    },
    demo: "#",
    github: "#",
  },

  {
    id: "sofindi",
    title: "Solutions Web – SOFINDI",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=480&fit=crop&auto=format",
    description: {
      en: "Web development projects carried out during my internship at SOFINDI, involving frontend and backend development, database integration and user interface optimization.",
      fr: "Participation à la conception et au développement de solutions web durant mon stage chez SOFINDI, avec des interventions sur le frontend, le backend, l'intégration des bases de données et l'optimisation des interfaces utilisateur.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "UI/UX Design"],
    features: {
      en: [
        "Frontend interface development",
        "Backend application development",
        "Database modelling and integration",
        "Dynamic user interfaces",
        "UX/UI improvements"
      ],
      fr: [
        "Développement d'interfaces frontend",
        "Développement des fonctionnalités backend",
        "Modélisation et intégration de bases de données",
        "Création d'interfaces dynamiques",
        "Amélioration de l'expérience utilisateur"
      ],
    },
    challenges: {
      en: "Building functional and user-friendly web interfaces while ensuring proper database integration.",
      fr: "Développer des interfaces web fonctionnelles et conviviales tout en assurant une bonne intégration des bases de données."
    },
    lessons: {
      en: "Practical experience in full-stack development, problem-solving and collaborative work.",
      fr: "Une expérience pratique en développement Full Stack, résolution de problèmes et travail collaboratif."
    },
    demo: "#",
    github: "#",
  },

  {
    id: "digiframs",
    title: "Développement Web – DigiFrams Sénégal",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=480&fit=crop&auto=format",
    description: {
      en: "Web development experience focused on designing and building digital solutions, contributing to the development of web applications and improving digital services.",
      fr: "Expérience en développement web axée sur la conception et la réalisation de solutions numériques, avec une participation au développement d'applications web et à l'amélioration des services digitaux.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Web Development"],
    features: {
      en: [
        "Web application development",
        "Frontend integration",
        "Backend functionality",
        "Database management",
        "Digital solution development"
      ],
      fr: [
        "Développement d'applications web",
        "Intégration frontend",
        "Développement des fonctionnalités backend",
        "Gestion des bases de données",
        "Conception de solutions numériques"
      ],
    },
    challenges: {
      en: "Contributing to the development of practical digital solutions adapted to user needs.",
      fr: "Contribuer à la réalisation de solutions numériques pratiques adaptées aux besoins des utilisateurs."
    },
    lessons: {
      en: "Improved my technical skills and understanding of web application development.",
      fr: "Amélioration de mes compétences techniques et de ma compréhension du développement d'applications web."
    },
    demo: "#",
    github: "#",
  },
];



export const experiences = [
  {
    id: "digiframs",
    role: {
      en: "Web Developer",
      fr: "Développeuse Web"
    },
    company: "DigiFrams Sénégal",
    period: "Septembre 2024 – Présent",
    type: "work" as const,
    description: {
      en: "Contributing to web development projects and digital solutions, with involvement in application development and the implementation of web functionalities.",
      fr: "Participation à des projets de développement web et à la réalisation de solutions numériques, avec une contribution au développement d'applications et à la mise en place de fonctionnalités web."
    },
    technologies: ["Développement Web", "Frontend", "Backend", "Bases de données"],
  },

  {
    id: "sofindi",
    role: {
      en: "Web Development Intern",
      fr: "Stagiaire Développeuse Web"
    },
    company: "SOFINDI",
    period: "Juillet 2025 – Janvier 2026",
    type: "work" as const,
    description: {
      en: "Participated in the development of digital web solutions, working on frontend and backend functionalities, database modelling and integration, as well as user interface design and optimization.",
      fr: "Participation à la conception et au développement de solutions web numériques. Intervention sur les fonctionnalités frontend et backend, la modélisation et l'intégration des bases de données, ainsi que la conception et l'optimisation des interfaces utilisateur."
    },
    technologies: ["Frontend", "Backend", "SQL", "Modélisation de données", "UI/UX Design"],
  },

  {
    id: "kamdaay",
    role: {
      en: "Technical Lead & Full-Stack Developer",
      fr: "Responsable technique et Développeuse Full Stack"
    },
    company: "Programme S@JEF – OXFAM Sénégal & UN-CHK",
    period: "Avril 2025 – Mai 2026",
    type: "work" as const,
    description: {
      en: "Led the technical development of a mobile CRM application for the Kam-Daay group. Contributed to requirements analysis, solution design, customer management features and project coordination. Also served as group leader.",
      fr: "Pilotage technique du développement d'une application mobile CRM pour le groupe Kam-Daay. Participation à l'analyse des besoins, à la conception de la solution, au développement des fonctionnalités de gestion client et à la coordination du projet. Également responsable du groupe Kam-Daay."
    },
    technologies: ["Développement Mobile", "CRM", "Analyse des besoins", "Gestion de projet", "Travail collaboratif"],
  },

  {
    id: "un-chk",
    role: {
      en: "Bachelor's Degree in Software and Application Development",
      fr: "Licence en Développement d'Applications Web, Mobile et Gaming"
    },
    company: "Université Numérique Cheikh Hamidou KANE (UN-CHK)",
    period: "Licence obtenue – Mention Bien",
    type: "education" as const,
    description: {
      en: "Academic training in web and mobile application development, software engineering, database management, programming and application design.",
      fr: "Formation universitaire en développement d'applications web et mobiles, ingénierie logicielle, gestion des bases de données, programmation et conception d'applications."
    },
    technologies: ["Développement Web", "Développement Mobile", "JavaScript", "Bases de données", "UML", "MERISE"],
  },
];



export const education = [
  {
    degree: {
      en: "Master 2 in Software Engineering",
      fr: "Master 2 en Ingénierie Logicielle"
    },
    school: "Université Numérique Cheikh Hamidou KANE (UN-CHK)",
    period: "2026 – En cours",
    description: {
      en: "Advanced academic training in software engineering, application development, software architecture and information systems. Strengthening skills in software design and project management.",
      fr: "Formation approfondie en ingénierie logicielle, développement d'applications, architecture logicielle et systèmes d'information. Renforcement des compétences en conception logicielle et gestion de projets."
    },
  },
  {
    degree: {
      en: "Bachelor's Degree in Web, Mobile and Gaming Application Development",
      fr: "Licence en Développement d'Applications Web, Mobile et Gaming"
    },
    school: "Université Numérique Cheikh Hamidou KANE (UN-CHK)",
    period: "Licence obtenue",
    description: {
      en: "Specialization in web and mobile development. Academic foundations in programming, software engineering, database management, application design and development. Graduated with Honors (Mention Bien).",
      fr: "Spécialisation en développement web et mobile. Formation en programmation, ingénierie logicielle, gestion des bases de données, conception et développement d'applications. Diplôme obtenu avec la mention Bien."
    },
  },

{
  degree: {
    en: "Professional Training – Simplon",
    fr: "Formation professionnelle – Simplon"
  },
  school: "Simplon Sénégal",
  period: "À compléter",
  description: {
    en: "Professional training focused on strengthening practical skills, developing technical expertise and gaining hands-on experience through project-based learning.",
    fr: "Formation professionnelle axée sur le renforcement des compétences pratiques, le développement de l'expertise technique et l'acquisition d'une expérience concrète à travers des projets."
  },
},

{
  degree: {
    en: "Training in Entrepreneurship and Digital Skills",
    fr: "Formation en entrepreneuriat et compétences numériques"
  },
  school: "Programme S@JEF – OXFAM Sénégal / UN-CHK",
  period: "Avril 2025 – Mai 2026",
  description: {
    en: "Introduction to entrepreneurship, digital skills, and the use of technology to develop and support business initiatives.",
    fr: "Formation axée sur les bases de l’entrepreneuriat, le développement des compétences numériques et l’utilisation du digital pour concevoir et développer des initiatives entrepreneuriales."
  }
}

];



export const certifications = [
  {
    name: "Intelligence Artificielle pour tous",
    issuer: "Programme FORCE-N",
    date: "Novembre 2025",
    badge: "🤖",
    color: "#8b5cf6"
  },
  {
    name: "Introduction to Relational Databases in SQL",
    issuer: "DataCamp",
    date: "Décembre 2025",
    badge: "🗄️",
    color: "#0ea5e9"
  },
  {
    name: "Data Structures and Algorithms in Python",
    issuer: "DataCamp",
    date: "Janvier 2026",
    badge: "🐍",
    color: "#10b981"
  },
  {
    name: "Linux: I/O Redirection for DevOps",
    issuer: "Coursera Project Network",
    date: "Février 2025",
    badge: "🐧",
    color: "#64748b"
  },
  {
    name: "Entrepreneuriat et compétences numériques",
    issuer: "Programme S@JEF – OXFAM Sénégal / UN-CHK",
    date: "2025–2026",
    badge: "💡",
    color: "#f59e0b"
  },

  {
    name: "Certification en Développement Web",
    issuer: "Simplon Sénégal",
    date: "2023-2024",
    badge: "💻",
    color: "#ec4899"
  }
  
];



export const services = [
  {
    icon: "🌐",
    title: {
      en: "Full-Stack Web Development",
      fr: "Développement Web Full Stack"
    },
    desc: {
      en: "Design and development of modern, responsive web applications, covering both frontend interfaces and backend functionalities.",
      fr: "Conception et développement d'applications web modernes et responsives, du frontend aux fonctionnalités backend."
    },
    color: "#6366f1"
  },
  {
    icon: "📱",
    title: {
      en: "Web & Mobile Development",
      fr: "Développement Web et Mobile"
    },
    desc: {
      en: "Development of digital solutions adapted to different devices, with a focus on usability and user experience.",
      fr: "Développement de solutions numériques adaptées aux différents appareils, avec une attention particulière à l'ergonomie et à l'expérience utilisateur."
    },
    color: "#22d3ee"
  },
  {
    icon: "🎨",
    title: {
      en: "UI Integration & UX Design",
      fr: "Intégration UI et conception UX"
    },
    desc: {
      en: "Creation and integration of intuitive, accessible and responsive interfaces focused on user needs.",
      fr: "Création et intégration d'interfaces intuitives, accessibles et responsives, centrées sur les besoins des utilisateurs."
    },
    color: "#a855f7"
  },
  {
    icon: "🗄️",
    title: {
      en: "Database Design & Management",
      fr: "Conception et gestion de bases de données"
    },
    desc: {
      en: "Data modelling, database design, organization and integration to support reliable applications.",
      fr: "Modélisation des données, conception, organisation et intégration de bases de données pour des applications fiables."
    },
    color: "#f59e0b"
  },
  {
    icon: "🔌",
    title: {
      en: "API Development & Integration",
      fr: "Développement et intégration d'API"
    },
    desc: {
      en: "Design and integration of APIs to connect application components and facilitate data exchange.",
      fr: "Conception et intégration d'API pour connecter les composants d'une application et faciliter les échanges de données."
    },
    color: "#10b981"
  },
  {
    icon: "📊",
    title: {
      en: "Digital Project Design & Coordination",
      fr: "Conception et gestion de projets numériques"
    },
    desc: {
      en: "Needs analysis, technical solution design, project planning and coordination from concept to delivery.",
      fr: "Analyse des besoins, conception de solutions techniques, planification et coordination de projets, de l'idée à la réalisation."
    },
    color: "#f97316"
  }
];



export const testimonials = [
  {
    name: "Responsable de projet",
    role: "Programme S@JEF – OXFAM Sénégal / UN-CHK",
    avatar: "RP",
    text: {
      en: "Anna demonstrated commitment, teamwork and a strong interest in developing digital solutions through her contribution to the Kam-Daay CRM project.",
      fr: "Anna a démontré son engagement, son esprit d'équipe et son intérêt pour le développement de solutions numériques à travers sa contribution au projet CRM Kam-Daay."
    },
    stars: 5
  },
  {
    name: "Encadrant professionnel",
    role: "SOFINDI",
    avatar: "EP",
    text: {
      en: "Anna contributed to web development activities, including frontend and backend work, database integration and user interface improvements.",
      fr: "Anna a contribué aux activités de développement web, notamment au frontend, au backend, à l'intégration des bases de données et à l'amélioration des interfaces utilisateur."
    },
    stars: 5
  },
  {
    name: "Collaborateur",
    role: "Projet numérique",
    avatar: "CL",
    text: {
      en: "Working with Anna provided an opportunity to appreciate her adaptability, collaboration skills and willingness to learn.",
      fr: "La collaboration avec Anna a permis d'apprécier sa capacité d'adaptation, son esprit de collaboration et sa volonté d'apprendre."
    },
    stars: 5
  }
];



export const blogPosts = [
  {
    slug: "developpement-web-fullstack",
    title: "Full-Stack Web Development: From Frontend to Backend",
    excerpt: {
      en: "Discover the key stages of building a full-stack web application, from designing user interfaces to developing backend functionalities and managing data.",
      fr: "Découvrez les principales étapes de création d'une application web full stack, de la conception des interfaces utilisateur au développement du backend et à la gestion des données."
    },
    date: "2026-11-17",
    readTime: "6 min",
    tag: "Web Development",
    color: "#6366f1",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=340&fit=crop&auto=format"
  },
  {
    slug: "conception-bases-de-donnees",
    title: "Database Design: Building a Reliable Data Structure",
    excerpt: {
      en: "Explore the fundamentals of database design, data modelling, relational databases and SQL for building reliable applications.",
      fr: "Découvrez les fondamentaux de la conception des bases de données, de la modélisation des données, des bases relationnelles et du SQL pour développer des applications fiables."
    },
    date: "2026-11-17",
    readTime: "7 min",
    tag: "Database",
    color: "#a855f7",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=340&fit=crop&auto=format"
  },
  {
    slug: "transformation-numerique-entrepreneuriat",
    title: "Digital Technology and Entrepreneurship: Turning Ideas into Projects",
    excerpt: {
      en: "Learn how digital skills, technology and project planning can help transform an entrepreneurial idea into a practical solution.",
      fr: "Découvrez comment les compétences numériques, la technologie et la planification de projets peuvent aider à transformer une idée entrepreneuriale en solution concrète."
    },
    date: "2026-11-17",
    readTime: "5 min",
    tag: "Digital Entrepreneurship",
    color: "#10b981",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=340&fit=crop&auto=format"
  }
];

