<script>
import ProjectCard from './ProjectCard.vue';
export default {
    components: {
    ProjectCard,
  },
};
</script>

<template>
    <h1 class="my-3">Elenco Progetti : </h1>
    <ProjectCard class="my-3" v-for="project in projects" :key="project.id" :project="project" />
</template>

<style lang="scss">
 
</style>