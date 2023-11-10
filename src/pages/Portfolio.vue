<script>
import ProjectList from "../components/project/ProjectList.vue";
import PaginationUi from '../components/ui/PaginationUi.vue';
import axios from 'axios';
import NavbarUi from '../components/ui/NavbarUi.vue';
import { RouterView } from 'vue-router';

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
    PaginationUi,
    RouterView,
    NavbarUi,
  },
  
  methods:{
    fetchProjects(apiUri = 'http://127.0.0.1:8000/api/projects'){
      axios.get(apiUri).then((response) => {
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
  <div class="bg-portfolio">
    <NavbarUi/>
    <RouterView/>
    <div class="container my-3">
      <h1 class="my-3 text-center text-white">Elenco Progetti : </h1>
      <!-- <router-link 
        v-for="project in projects"
        v-show="project.type_id" 
        :to="{
        name : 'project-by-type',
        params: {type_id: project.type_id}
        }" 
        class="my-2 "
        >
        <span :class="getBadgeColorClass(project.type_id)" class="badge">
            <strong>Tipo: </strong>
            {{ project.type ? project.type.label : 'Nessun type' }}
        </span>
      </router-link > -->
      <PaginationUi :pagination="pagination" @change-page="fetchProjects"/>
      <ProjectList :projects="projects"/>
      <PaginationUi :pagination="pagination" @change-page="fetchProjects"/>
    </div>
  </div>   
</template>

<style lang="scss">
.bg-portfolio{
  background-image: url('../../public/IMG/bg-portfolio.jpg');
  height:100%;
}
</style>