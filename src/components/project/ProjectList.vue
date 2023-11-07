<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import PaginationApp from '../ui/PaginationApp.vue';
export default {
    components: {
    ProjectCard,
    PaginationApp
  },
  data() {
    return {
      projects: [], 
      pagination :{
        links:[],
      },
    };
  },

  methods:{
    fetchProjects(apiUri = null){

      if(!apiUri){
        apiUri = 'http://127.0.0.1:8000/api/projects';
      }

      axios
      .get(apiUri)
      .then((response) => {
        this.projects = response.data.data;
        this.pagination.links = response.data.links; 
      })
      .catch((error) => {
        console.error('Errore nella chiamata API', error);
      });
    }
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container my-3">
    <h1 class="my-3">Elenco Progetti : </h1>
    <PaginationApp :pagination="pagination" @change-page="fetchProjects"/>
    <ProjectCard class="my-3" v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<style lang="scss">
 
</style>