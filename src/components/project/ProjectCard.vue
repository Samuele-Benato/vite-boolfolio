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
  
        <div class="card p-3">
            <div class=" d-flex align-items-center clearfix">
                <img class="float-start me-2 mb-3 w-50" :src="'http://127.0.0.1:8000/storage/' + project.image" alt="project img">
                <div class="row g-3 ">
                    <div class="col-md-6 col-12">
                        <strong>Id: </strong> {{ project.id }}
                        <hr>
                    </div>
                    <div class="col-md-6 col-12">
                        <strong>Titolo: </strong> {{ project.title }}
                        <hr>
                    </div>
                    <div class="col-md-6 col-12">
                        <strong>Tipo: </strong>
                        {{ project.type ? project.type.label : 'Nessun type' }}
                    </div>
                    <div class="col-md-6 col-12">
                        <strong>Tecnologia: </strong>
                        <div v-for=" technology in project.technologies">
                            {{ technology.label }} 
                        </div>
                    </div>
                    <div class="col-12">
                        <strong>Descrizione: </strong> {{ project.description }}
                        <hr>
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