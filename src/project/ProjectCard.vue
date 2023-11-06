<script>
export default {
  data() {
    return {
    };
  },
  props: {
    project: Object, 
  },
};
</script>

<template>
  
        <div class="row g-3">
            <div class="col-4 col-lg-3 col-md-6 col-sm-12 ">
                <img class="img-fluid" :src="'http://127.0.0.1:8000/storage/' + project.image" alt="project img">
            </div>
            <div class="col-8 col-lg-9 col-md-6 col-sm-12 d-flex align-items-center">
                <div class="row g-3 ">
                    <div class="col-1">
                        <strong>Id: </strong> {{ project.id }}
                    </div>
                    <div class="col-3">
                        <strong>Titolo: </strong> {{ project.title }}
                    </div>
                    <div class="col-4">
                        <strong>Tipo: </strong>
                        {{ project.type ? project.type.label : 'Nessun type' }}
                    </div>
                    <div class="col-4">
                        <strong>Tecnologia: </strong>
                        <div v-for=" technology in project.technologies">
                            {{ technology.label }} 
                        </div>
                    </div>
                    <div class="col-12">
                        <strong>Descrizione: </strong> {{ project.description }}
                    </div>
                    <div class="col-12">
                        <strong>Link: </strong> {{ project.link }}
                    </div>
                </div>
            </div>

        </div>
</template>

<style lang="scss">
 
</style>