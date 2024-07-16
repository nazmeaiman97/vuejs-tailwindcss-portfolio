// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 1,
    title: "Encore Med",
    category: "Web/Mobile Application",
    img: require("@/assets/images/encoremedmobile.png"),
  },
  {
    id: 2,
    title: "Go Tadika",
    category: "Web/Mobile Application",
    img: require("@/assets/images/gotadikamobile.png"),
  },
  {
    id: 3,
    title: "Jeju Data Hub",
    category: "Web Application",
    img: require("@/assets/images/jejudatahub.png"),
  },
  {
    id: 4,
    title: "Best Track",
    category: "Web Application / SPA",
    img: require("@/assets/images/best-track.png"),
  },
  {
    id: 4,
    title: "Adoption Pets System",
    category: "Web Application",
    img: require("@/assets/images/petsystem.png"),
  },
];

export default projects;
