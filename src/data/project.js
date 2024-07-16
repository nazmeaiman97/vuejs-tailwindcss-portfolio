// Projects data.
// Note: Here we are getting data from a JavaScript file, but in a different project I'll be fetching these projects from some sort of APIs.

const projects = [
  {
    id: "1",
    singleProjectHeader: {
      singleProjectTitle: "Encore Med System",
      singleProjectDate: "December 01, 2020",
      singleProjectTag: "Backend / Frontend",
    },
    projectImages: [
      {
        id: 1,
        title: "Encore Med System UI",
        img: require("@/assets/images/encoremedlogo.png"),
      },
      {
        id: 2,
        title: "Encore Med System UI",
        img: require("@/assets/images/web-project-2.jpg"),
      },
      {
        id: 3,
        title: "Encore Med System UI",
        img: require("@/assets/images/encoremedmobile.png"),
      },
    ],
    projectInfo: {
      clientHeading: "About Company",
      companyInfos: [
        {
          id: 1,
          title: "Encore Med",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "Health Care System",
        },
        {
          id: 3,
          title: "Website",
          details: "https://encoremed.io/",
          href: "https://encoremed.io/",
        },
      ],
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Backbone.js",
            "jQuery",
            "SQL",
            "Cordova",
            "SVN",
          ],
        },
      ],
      projectDetailsHeading: "Role/Task",
      projectDetails: [
        {
          id: 1,
          details:
            "Encore Med is a healthcare IT company, specialized in Patient Appointment and Queue System.",
        },
        {
          id: 2,
          details:
            "I was assigned as a junior software engineer from 2020 to 2021. Some of my tasks included providing an API, assisting the support team, debugging code, and maintaining the system.",
        },
      ],
    },
  },
  {
    id: "2",
    singleProjectHeader: {
      singleProjectTitle: "Go Tadika",
      singleProjectDate: "2021",
      singleProjectTag: "Full Stack",
    },
    projectImages: [
      {
        id: 1,
        title: "Go Tadika UI",
        img: require("@/assets/images/gotadikascreenshot.png"),
      },
      {
        id: 2,
        title: "Go Tadika UI",
        img: require("@/assets/images/gotadikagoogleplay.png"),
      },
      {
        id: 3,
        title: "Go Tadika UI",
        img: require("@/assets/images/gotadikamobile.png"),
      },
    ],
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Go Tadika",
        },
        {
          id: 2,
          title: "Services",
          details: "Kindergarten Management System",
        },
        {
          id: 3,
          title: "Website",
          details: "https://gotadika.com/",
          href: "https://gotadika.com/",
        },
      ],
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "PHP",
            "Laravel",
            "JavaScript",
            "Vue.js",
            "React Native",
            "Vuetify",
            "Quasar",
            "Capacitor",
            "Git",
          ],
        },
      ],
      projectDetailsHeading: "Role/Task",
      projectDetails: [
        {
          id: 1,
          details:
            "Go Tadika is a comprehensive system designed to manage all aspects of kindergarten daily activities digitally.",
        },
        {
          id: 2,
          details:
            "I initiated this project independently. I used Laravel for backend development, particularly to provide RESTful APIs, along with Vue.js for frontend development. The project is ongoing, and I have employed various JavaScript technologies/libraries for frontend development. For example, Vue CLI with Vuetify is used to build the admin dashboard, Quasar with Capacitor is used for building billing apps, and React Native is used for developing mobile apps for parents.",
        },
      ],
    },
  },
  {
    id: "3",
    singleProjectHeader: {
      singleProjectTitle: "Jeju Data Hub",
      singleProjectDate: "February 01, 2022",
      singleProjectTag: "Frontend",
    },
    projectImages: [
      {
        id: 1,
        title: "Best Track UI",
        img: require("@/assets/images/jejudatahub.png"),
      },
      {
        id: 2,
        title: "Best Track UI",
        img: require("@/assets/images/jejudatahub1.png"),
      },
      {
        id: 3,
        title: "Best Track UI",
        img: require("@/assets/images/jejudatahub2.png"),
      },
      
    ],
    projectInfo: {
      clientHeading: "Ideker Sdn. Bhd.",
      companyInfos: [
        {
          id: 1,
          title: "Ideker Sdn. Bhd",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "IT Services",
          details: "IT Services",
        },
        {
          id: 3,
          title: "Website",
          details: "https://flexink.com/en/home/home-en/",
          href: "https://flexink.com/en/home/home-en/",
        },
      ],
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Vue.js",
          ],
          
        },
      ],
      projectDetailsHeading: "Role/Task",
      projectDetails: [
        {
          id: 1,
          details:
            "Jeju Data Hub is a service that provides Jeju Data from private companies and public institutions. As a service business ordered by Jeju Special Self-Government Provincial and Kakao, we are in charge of overall data collection and analysis, development and visualization along with site construction.",
        },
        {
          id: 2,
          details:
            "I worked as a front-end software engineer from 2022 to 2023. I developed the system from function from and maintained the system.",
        },
        {
          id: 3,
          details:
            "For this project, my primary focus was on developing a sophisticated system that seamlessly integrates with REST APIs, utilizing axios for efficient data fetching and management. My role predominantly revolved around enhancing the chart building capabilities, where I contributed significantly by developing a custom chart library based on Apex charts. This library not only streamlined the process of creating visually appealing and interactive charts but also simplified the integration of complex data visualization features into our application.One of the key challenges I tackled was ensuring efficient data synchronization and management within the Vue.js framework. Vue.js provided a robust platform for building reactive user interfaces, allowing me to implement real-time data updates and synchronized interactions seamlessly across different components of our application. This involved leveraging Vue's reactivity system to propagate changes efficiently and maintain consistency in our data flow. .",
        },
      ],
    },
  },
  {
    id: "4",
    singleProjectHeader: {
      singleProjectTitle: "Best Track",
      singleProjectDate: "December 02, 2022",
      singleProjectTag: "Backend / Frontend",
    },
    projectImages: [
      {
        id: 1,
        title: "Best Track UI",
        img: require("@/assets/images/best-track.png"),
      },
      {
        id: 2,
        title: "Best Track UI",
        img: require("@/assets/images/best-track-1.png"),
      },
      {
        id: 3,
        title: "Best Track UI",
        img: require("@/assets/images/best-track-2.png"),
      },
      
    ],
    projectInfo: {
      clientHeading: "Examedia Software Sdn. Bhd.",
      companyInfos: [
        {
          id: 1,
          title: "Examedia Software",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "IT Services",
          details: "IT Services",
        },
        {
          id: 3,
          title: "Website",
          details: "https://examedia.com/",
          href: "https://examedia.com/",
        },
      ],
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Laravel",
            "SQL",
            "React Native",
            "Vue.js",
          ],
          links: [
            "https://play.google.com/store/apps/details?id=com.nazmeaimanyunus.besttrack&hl=en",
            "https://apps.apple.com/my/app/best-track/id1672176037"
          ],
          
        },
      ],
      projectDetailsHeading: "Role/Task",
      projectDetails: [
        {
          id: 1,
          details:
            "Best Track is an application that allows users to remotely control various aspects of their vehicle using the app, which requires an internet connection. Users can view their device coordinates, lock and unlock their vehicle's doors, cut off the engine, and restore the engine to its default state. Additionally, the app provides an alarm feature that sends notifications to the user when certain events occur, such as when the car engine is turned on or off, when the vehicle exceeds a speed limit, or when the car trunk is open.",
        },
        {
          id: 2,
          details:
            "I worked as a full-stack software engineer from 2023 to 2024. I developed the system from scratch using Laravel for the backend, Vue.js for building the dashboard, and React Native for building the mobile app.",
        },
        {
          id: 3,
          details:
            "For this project, I developed a sophisticated system integrating GPS tracking functionalities and Simcard management. The backend was developed using Laravel, incorporating Python scripts for data processing. The frontend was developed using React Native, providing a dynamic user interface and utilizing Google Maps API for real-time data visualization.",
        },
      ],
    },
  },
];

export default projects;
