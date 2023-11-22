const EN: any = {
  navItems: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "History",
      path: "/history",
    },
    // {
    //   label: "Contact",
    //   path: "/contact",
    // },
  ],
  type: "EN",
  sideBar: {
    avatar: {
      roles: ["Web Development", "UI/UX Designing", "SEO"],
    },
    infos: [
      {
        label: "Residence",
        content: "Canada",
      },
      {
        label: "City",
        content: "Ottawa",
      },
      {
        label: "Age",
        content: 24,
      },
      {
        label: "phone",
        content: "(873) 354-4399",
        link: "tel:+18733544399",
      },
      {
        label: "LinkedIn",
        content: "amin-dhouib",
        link: "https://www.linkedin.com/in/amin-dhouib/",
      },
      {
        label: "GitHub",
        content: "AminDhouib",
        link: "https://github.com/AminDhouib",
      },
    ],
    languages: [
      {
        label: "English",
        percentage: 100,
      },
      {
        label: "French",
        percentage: 90,
      },
      {
        label: "Arabic",
        percentage: 80,
      },
    ],
    skillsTypes: [
      {
        label: "Program. language",
        list: [
          "C Sharp",
          "C++",
          "C",
          "Golang",
          "HTML5",
          "CSS3",
          "Java",
          "JavaScript",
          "TypeScript",
          "PHP",
          "NoSQL",
          "Python",
          "SQL",
          "Rust",
        ],
      },
      {
        label: "TECHNOLOGY/FRAMEWORK",
        list: [
          "Android",
          "Angular",
          "Ant Design",
          "API",
          "AWS",
          "Azure",
          "Bootstrap",
          "CGP",
          "DevOps",
          "Django",
          "Laravel",
          "Docker",
          "Eclipse",
          "Excel",
          "Firebase",
          "Flask",
          "Flutter",
          "Git",
          "GraphQL",
          "Jest / Mocha",
          "Jira",
          "jQuery",
          "JUnit",
          "Linux",
          "Maven",
          "MongoDB",
          "MySQL",
          "NestJS",
          "NextJS",
          "Node.js",
          "Photoshop",
          "Pipelines/CD/CI",
          "PostgresSQL",
          "Prisma",
          "PyTest",
          "React Native",
          "ReactJS",
          "RedwoodJS",
          "Selenium",
          "SOAP",
          "Visual Studio Code",
          "VueJS",
          "XML / JSON",
        ],
      },
      {
        label: "INTEREST/HOBBY",
        list: [
          "Artificial Intelligence",
          "Cryptocurrencies (Web3)",
          "Retro Video Games",
          "Soccer & Volleyball",
          "Social Gatherings",
          "Video & Music Editing",
          "Working Out",
          "YouTube Content Creator",
        ],
      },
    ],
  },
  home: {
    bannerTitle: "Discover my Amazing Art Space !",
    button: "Explore now",
    services: {
      title: "Services I offered in the past",
      cards: [
        {
          label: "Web Development",
          description:
            "During my career, I have worked on many projects in this field using various programming languages.",
        },
        {
          label: "SEO Specialist",
          description:
            "While working on #TCB's website#, I had the opportunity to boost the SEO to the top in order to make the website appear in the first search results in Tunisia.",
          link: "https://tcb.tn",
        },
        {
          label: "UI/UX Design",
          description:
            "As a web developer, I have always been paying attention to the complexity of the UI I'm using and how to make it as ergonomic and user friendly as possible.",
        },
        {
          label: "Media Content Creator",
          description:
            "Along my academic journey, I worked a lot with brands' logos, brochures and videos to promote the corporate image.",
        },
      ],
    },
  },
  history: {
    title: "My Journey",
    cards: [
      {
        title: "Math Anex (Contract)",
        role: "Full Stack Developer (React + Django)",
        date: "Mar. 2023 to Sept. 2023",
        tasks: [
          "Collaborated with team to analyze requirements, design use cases, user stories & next steps to get to our goals with the help of Figma and Asana.",
          "Managed webapp hosting using AWS services (S3, RDS) and NGINX.",
          "Create and maintain Django REST APIs for data communication between frontend and backend.",
          "Managed PostgreSQL database migrations using Django's ORM.",
          "Implemented responsive and user-friendly UI components using React.JS.",
          "Developed scripts to perform cronjobs and automate sending emails using the Sendgrid API.",
        ],
      },
      {
        title: "Left Hook (Contract)",
        role: "B2B MERN Integration Developer for SaaS",
        date: "Mar. 2022 to Nov. 2022",
        tasks: [
          "Analyzed requirements for B2B enterprises to come up with user stories and scenarios.",
          "Designed integrations between Slack and another third-party SaaS using Express.JS, Node.JS, React.JS, MongoDB.",
          "Worked with webhooks, 3rd party REST APIs, and OAuth.",
          "Created custom Zapier integration for Freshbooks' API.",
        ],
      },
      {
        title: "RentCheck (Contract)",
        role: "API / Cloud Software + DevOps Engineer",
        date: "Dec. 2023 to Feb. 2023",
        tasks: [
          "Designed and created many public REST API endpoints for their system with the help of Typescript.",
          "Interfaced with customers to implement their feedback.",
          "Designed B2B integrations with Zapier and Latchel.",
          "Created AWS Lambda functions with the help of Terraform to support the REST API endpoints.",
          "Managed NoSQL Firebase (GCP) database and used Algolia to access the data.",
          "Built and designed the base of the UI tests with the help of Playwright.",
          "Worked with Bitbucket Pipelines to automate publishing and running tests.",
        ],
      },
      {
        title: "Sirch (Contract)",
        role: "Scrum Master Software + DevOps Engineer",
        date: "Dec. 2021 to Nov. 2022",
        tasks: [
          "Lead a group of developers to create an advanced search engine with the help of NestJS (JavaScript).",
          "Managed the Git repo and maintained code by constantly performing code reviews.",
          "Conducted weekly meeting with the stakeholders to adjust needed changes in the application.",
          "Implemented key features with the help of HyperBeam.",
          "Managed CI/CD pipelines to automate publishing and running tests.",
        ],
      },
      {
        title: "Bell Canada (Contract)",
        role: "Lead Software Developer",
        date: "May 2021 to Jan. 2022",
        tasks: [
          "Lead a group of 5 developers (code reviews & setting up meetings) to create a Docker-contained React/Javascript frontend application with a Python backend that allows users to perform OSINT practices by scrapping publicly available data from multiple social media platforms, analyzing it and displaying the analyzed data in a graph.",
          "Interfaced with the stakeholders to adjust changes and implement features in the application.",
          "Designed REST API endpoints to interconnect the backend and the frontend with the help of Flask",
        ],
      },
      {
        title: "Lumentum Operations LLC (Intern)",
        role: "R&D Software Engineer",
        date: "May 2021 to Sept. 2021",
        tasks: [
          "Created a C# CLI program that programmatically allows users to share and manage files in the cloud.",
          "Designed key features in Visual Basic on embedded platforms for high performance optical modules.",
          "Performed in-lab optical wave test experiments with various high-tech equipment.",
        ],
      },
      {
        title: "Crypto4A Technologies Inc",
        role: "Cyber-Security Software Developer",
        date: "Jan. 2020 to Dec. 2020",
        tasks: [
          "Created services using Java / Python / Bash to manage the data of different Cryptographic keys (MC-Eliece, RSA, ECC,AES, and HSS) from Crypto4A's HSM (Hardware Security Module) and Yubico's Yubikey.",
          "Created test cases for Crypto4A’s low-level C / C++ program that handles the HSMs hardware logic to achieve 80%+ code coverage.",
          "Developed Javascript Web Apps that interfaced with Crypto4A's Java services using REST API.",
          "Migrated Crypto4A's entire Java / Maven project from JDK8 to JDK11.",
          "Created custom terminal Linux commands that interfaced with the Java services.",
          "Supervised newly recruited students by performing professional code reviews and scheduling weekly meetings to assist them in their tasks.",
        ],
      },
      {
        title: "Department of National Defense (Intern)",
        role: "Software Developer",
        date: "May 2019 to Sept. 2019",
        tasks: [
          "Laid the foundations for a Java application to create and run automated tests for many SOAP Services.",
          "Written design documentation that included UML class diagrams and sequence diagrams.",
          "Worked with JUnit to create test cases, Oracle MySQL Database for managing DB data, and Hibernate to interface with the DB.",
        ],
      },
      {
        title: "Infosys (Intern)",
        role: "· Software Quality Assurance Developer",
        date: "July 2018 to Sept. 2018",
        tasks: [
          "Trained in the roles of Software Developer in Test (Selenium, SOAPUI, Agile software development methodology, CI/CD) while working with 100+ other developers as part of the Infosys Validation Solution.",
          "Performed functional testing using Java and Selenium to validate 20+ modules, such as login, adding, and editing payee information on Infosys's Essence Bank application.",
          "Produced a data-driven testing solution for automating tasks such as employee details generation (salary, asset date), validation, and modification of user input received from employee info data, which reduced labor time by over 50%.",
        ],
      },
    ],
  },
};

const FR: any = {
  navItems: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "History",
      path: "/history",
    },
    // {
    //   label: "Contact",
    //   path: "/contact",
    // },
  ],
  type: "EN",
  sideBar: {
    avatar: {
      roles: ["Web Development", "UI/UX Designing", "SEO"],
    },
    infos: [
      {
        label: "Residence",
        content: "Canada",
      },
      {
        label: "City",
        content: "Ottawa",
      },
      {
        label: "Age",
        content: 24,
      },
      {
        label: "phone",
        content: "(873) 354-4399",
        link: "tel:+18733544399",
      },
      {
        label: "LinkedIn",
        content: "amin-dhouib",
        link: "https://www.linkedin.com/in/amin-dhouib/",
      },
      {
        label: "GitHub",
        content: "AminDhouib",
        link: "https://github.com/AminDhouib",
      },
    ],
    languages: [
      {
        label: "Anglais",
        percentage: 100,
      },
      {
        label: "Français",
        percentage: 90,
      },
      {
        label: "Arabe",
        percentage: 80,
      },
    ],
    skillsTypes: [],
  },
  home: {
    bannerTitle: "Discover my Amazing Art Space !",
    button: "Explore now",
    services: {
      title: "Services I offered in the past",
      cards: [
        {
          label: "Web Development",
          description:
            "During my career, I have worked on many projects in this field using various programming languages.",
        },
        {
          label: "SEO Specialist",
          description:
            "While working on #TCB's website#, I had the opportunity to boost the SEO to the top in order to make the website appear in the first search results in Tunisia.",
          link: "https://tcb.tn",
        },
        {
          label: "UI/UX Design",
          description:
            "As a web developer, I have always been paying attention to the complexity of the UI I'm using and how to make it as ergonomic and user friendly as possible.",
        },
        {
          label: "Media Content Creator",
          description:
            "Along my academic journey, I worked a lot with brands' logos, brochures and videos to promote the corporate image.",
        },
      ],
    },
  },
  history: {
    title: "My Journey",
    cards: [
      {
        title: "Khaiereddine Becha",
        role: "student",
        date: "Sep 2015 - Jun 2019",
        thumb: "LKA.jpg",
        description:
          "Honestly I wasn't a big fan of my middle school but it was a necessary step in my life to learn the basic things and to have insight about science and physics . I got my baccalaureate degree in Science & physics.",
      },
      {
        title: "TCB's Website",
        role: "Web Developer & SEO Specialist",
        date: "Dec 2021 - Mar 2022",
        thumb: "tcbweb.png",
        description:
          "I had the opportunity to create the official website of TCB from scratch which I implemented using HTML, CSS, JS ( including bootstrap and owl-carousel library) for the Front-end and PHP and MySQL for the Back-end. The website is dynamic and responsive. Working solo on this project made me discover new libraries as the one listed above and reinforce my knowledge about CSS.",
      },
      {
        title: "ESPRIT",
        role: "student",
        date: "Sep 2019 - Now",
        thumb: "esprit.png",
        description:
          "This the most exciting step in my life because I started to learn more about programming when it's been my passion since I was a kid. Esprit is a great school that provides me with a lot of opportunities to learn and to grow. I'm currently studying IT engineering in web development.",
      },
    ],
  },
};

export const Languages = {
  EN,
  FR,
};
