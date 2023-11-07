<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import PaginationUi from '../ui/PaginationUi.vue';
export default {
    components: {
    ProjectCard,
    PaginationUi
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
    <h1 class="my-3">Elenco Progetti : </h1>
    <PaginationUi :pagination="pagination" @change-page="fetchProjects"/>
    <ProjectCard class="my-3" v-for="project in projects" :key="project.id" :project="project" />
</template>

<style lang="scss">
 
</style>