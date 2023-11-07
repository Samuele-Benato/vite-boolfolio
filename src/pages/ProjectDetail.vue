<script>
import ProjectCard from "../components/project/ProjectCard.vue";
import axios from 'axios';

export default {
  data() {
    return {
      project : {},
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
      });
  },
};
</script>

<template>
    <div class="container my-3">
        <h2>Dettaglio Progetto</h2>
        <ProjectCard :project="project" :isDetail="true" v-if="project"/>
    </div>
</template>

<style lang="scss" scoped></style>