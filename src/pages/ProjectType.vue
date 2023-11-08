<script>
import ProjectTypeList from '../components/project/ProjectTypeList.vue'

export default {
  data(){
    return{
      type : {
      label : '',
      },
    }
  },
  components: {
    ProjectTypeList,
  },
created(){
  axios.get( 'http://127.0.0.1:8000/api/projects' + 'types/' + this.$route.params.type_id
  ).then((response)=>{
    this.type = response.data;
  })
  .catch((error)=>{
    console.error('Errore nella chiamata API', error);
    this.$router.push({name : 'not-found'})
  })
}
};
</script>

<template>
  <div class="container my-3">
    <h2>Progetti {{ type.label }}</h2>
    <ProjectTypeList :type_id="type.id" v-if="type.id"/>
  </div>
</template>

<style lang="scss" scoped></style>