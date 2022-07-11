<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import projects from "../data/project";

export default {
  name: "Projects",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data: () => {
    return {
      projects,
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  computed: {
    filterProject() {
      let project = this.projects.filter((p) => {
        return p.id == this.$route.params.id;
      });
      return project;
    },
  },

  methods: {},
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader
      :singleProjectHeader="filterProject[0].singleProjectHeader"
    />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="filterProject[0].projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="filterProject[0].projectInfo" />
  </div>
</template>

<style scoped></style>
