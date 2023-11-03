<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
    components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [], 
    };
  },
  created() {
    axios
      .get('http://127.0.0.1:8000/api/projects')
      .then((response) => {
        this.projects = response.data.data; 
      })
      .catch((error) => {
        console.error('Errore nella chiamata API', error);
      });
  },
};
</script>

<template>
    <div class="container my-3">
        <h1 class="my-3">Elenco Progetti : </h1>
        <ProjectCard class="my-3" v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<style lang="scss">
 
</style>