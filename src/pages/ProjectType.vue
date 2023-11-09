<script>
import ProjectList from '../components/project/ProjectList.vue'
import PaginationUi from '../components/ui/PaginationUi.vue';
import axios from 'axios'
export default {
  data(){
    return{
      type : {
      label : '',
      },
      projects : [],
      pagination : 
      {
        links : [],
      }
    }
  },

  components: {
    ProjectList,
    PaginationUi
  },

  methods : {
    fetchProjects(endpoint = 'http://127.0.0.1:8000/api/' + 'project-by-type/' + this.$route.params.type_id){
        axios.get(endpoint).then((response)=>{
        this.projects = response.data.data;
        this.pagination.links = response.data.links
      }).catch((error)=>{
        console.error('Errore nella chiamata API', error);     
        this.$router.push({name : 'not-found'})
      })
    },

    fetchTypes(endpoint = 'http://127.0.0.1:8000/api/types/'+ this.$route.params.type_id){
      axios.get(endpoint).then((response)=>{
      console.log(response);
      this.type = response.data;
    }).catch((error)=>{
      console.error('Errore nella chiamata API', error);
      this.$router.push({name : 'not-found'})
    })
  }},

  created(){
  this.fetchProjects();
  this.fetchTypes()
  }
};
</script>

<template>
  <div class="container my-3">
    <div class="d-flex align-items-center justify-content-between">
      <h2 class="text-center">Progetti <strong>{{ type.label }}</strong></h2>
      <router-link         
        :to="{
        name: 'portfolio',
        }" 
        class="btn btn-dark ">
        <font-awesome-icon :icon="['fas', 'list']" />
        <strong class="ms-1">Ritorna alla lista</strong>
      </router-link>
    </div>
    <PaginationUi :pagination="pagination" @change-page="fetchProjects"/>
    <ProjectList :projects="projects"/>
    <PaginationUi :pagination="pagination" @change-page="fetchProjects"/>
  </div>
</template>

<style lang="scss" scoped></style>