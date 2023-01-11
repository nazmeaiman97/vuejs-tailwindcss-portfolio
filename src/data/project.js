// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

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
        title: "Kabul Project Management UI",
        img: require("@/assets/images/encoremedlogo.png"),
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/web-project-2.jpg"),
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
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
            "Jquery",
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
            "Encore Med is a healthcare IT company, specialised in Patient Appointment and Queue System. ",
        },
        {
          id: 2,
          details:
            "I was assigned as a junior sofware engineer back in 2020-2021. Some of the task are provide an API, help support team, debug code and maintain the sytem",
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
        title: "Kabul Project Management UI",
        img: require("@/assets/images/gotadikascreenshot.png"),
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/gotadikagoogleplay.png"),
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
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
            "Qausar",
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
            "Go Tadika is a complete system where it help to manage all of the kindergarten daily activity process and turn it to digital.",
        },
        {
          id: 2,
          details:
            "I started this project by my own. Using a laravel as a backend particularly to provide the Restful API, along with Vue js as a front-end. . As the project is still ongoing, there are many Javascript technologies/libraries stack that i use mostly for the front end part such as Vue CLI+Vuetify is use to build admin dashboard, Quasar+Capacitor is use to build billing Apps and react native is use to build the mobile apps for parents.",
        },
      ],
    },
  },
];

export default projects;
