<script>
import ProjectCard from './ProjectCard.vue';
export default {
    components: {
    ProjectCard,
  },

  props:{
      projects: Object,
    },
};
</script>

<template>
    <ProjectCard class="my-3" v-for="project in projects" :key="project.id" :project="project" />
</template>

<style lang="scss">
 
</style>