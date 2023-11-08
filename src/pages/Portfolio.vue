<script>
import ProjectList from "../components/project/ProjectList.vue";
import PaginationUi from '../components/ui/PaginationUi.vue';
import axios from 'axios';

export default {
  data() {
    return {
      projects: [], 
      pagination :{
        links:[],
      },
    };
  },

  components: {
    ProjectList,
    PaginationUi
  },
  
  methods:{
    fetchProjects(apiUri = 'http://127.0.0.1:8000/api/projects'){

      axios
      .get(apiUri)
      .then((response) => {
        console.log(response);
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
    <ProjectList/>
    <PaginationUi :pagination="pagination" @change-page="fetchProjects"/>
  </div>
</template>

<style lang="scss" scoped></style>