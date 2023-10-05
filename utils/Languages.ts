export type section = {
  [key: string]: string | section | string[] | section[] | number;
};
const EN: section = {
  navItems: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "History",
      path: "/history",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ],
  type: "EN",
  sideBar: {
    avatar: {
      roles: ["Web Development", "UI/UX Designing", "SEO"],
    },
    infos: [
      {
        label: "Residence",
        content: "Tunisia",
      },
      {
        label: "City",
        content: "Ariana",
      },
      {
        label: "Age",
        content: 22,
      },
    ],
    languages: [
      {
        label: "French",
        percentage: 100,
      },
      {
        label: "Arabic",
        percentage: 90,
      },
      {
        label: "English",
        percentage: 80,
      },
    ],
    hardSkillsLabel: "hard skills",
    hardSkills: [
      {
        label: "React",
        level: "Advanced",
      },
      {
        label: "Java",
        level: "Advanced",
      },
      {
        label: "HTML",
        level: "Advanced",
      },
      {
        label: "CSS",
        level: "Advanced",
      },
      {
        label: "Javascript",
        level: "Advanced",
      },
      {
        label: "PHP",
        level: "Advanced",
      },
      {
        label: "SQL",
        level: "Advanced",
      },
      {
        label: "Sass",
        level: "Advanced",
      },
      {
        label: "C++",
        level: "Intermediate",
      },
      {
        label: "Symfony",
        level: "Intermediate",
      },
      {
        label: "Python",
        level: "Intermediate",
      },

      {
        label: "GitHub",
        level: "Intermediate",
      },
      {
        label: "Angular",
        level: "Basic",
      },
    ],
    otherSkillsLabel: "other skills",
    otherSkills: [
      {
        label: "Project Management",
        level: "Advanced",
      },
      {
        label: "Scrum",
        level: "Intermediate",
      },
      {
        label: "Photoshop",
        level: "Intermediate",
      },
      {
        label: "Premiere Pro",
        level: "Intermediate",
      },
      {
        label: "Illustrator",
        level: "Basic",
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

const FR: section = {};

export const Languages = {
  EN,
  FR,
};
