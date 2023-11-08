<script>
import ProjectCard from "../components/project/ProjectCard.vue";
import axios from 'axios';

export default {
  data() {
    return {
      project : {},
      error : {
      any : false,
      message:'',
      }
    }
  },



 components: {
    ProjectCard,
 },

  created() {
    axios
      .get('http://127.0.0.1:8000/api/projects/' + this.$route.params.id)
      .then((response) => {
        this.project = response.data; 
      })
      .catch((error) => {
        console.error('Errore nella chiamata API', error);
        this.$router.push({name : 'not-found'})
        // this.error.any = true;
        // this.error.message = error.response.data.message;
      });
  },
};
</script>

<template>
    <div class="container my-3">
        <h2>Dettaglio Progetto</h2>
        <!-- <div class="alert alert-danger" v-if="error.any">
          {{ error.message }}
        </div> -->
        <div class="d-flex align-items-center">
          <img class="float-start me-2 mb-3 w-50" :src="'http://127.0.0.1:8000/storage/' + project.image" alt="project img">
          <ProjectCard :project="project" :isDetail="true" v-if="project"/>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>