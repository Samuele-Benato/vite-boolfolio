<script>
export default {
  data() {
    return {
        
    };
  },
  props: {
    project: Object,
    isDetail: Boolean, 
  },
  methods:{
    getBadgeColorClass(index){
        if(index === 0){
            return "text-bg-success";
        }

        if(index === 1){
            return "text-bg-warning";
        }

        if(index === 2){
            return "text-bg-secondary";
        }

        return "text-bg-success";
    }
  }
};
</script>

<template>
    <div class=" d-flex align-items-center clearfix">
        <div class="card p-3">  
            <div class="row g-3 ">
                <div class="card-header">
                    <div class="col-md-6 col-12 d-inline-block">
                        <strong>Id: </strong> {{ project.id }}
                    </div>
                    <div class="col-md-6 col-12 d-inline-block">
                        <strong>Titolo: </strong> {{ project.title }}
                    </div>
                </div>
                <div class="card-body m-0">
                    <div class="row">
                        <router-link v-if="project.type_id" 
                        :to="{
                        name : 'project-by-type',
                        params: {type_id: project.type_id}
                        }" 
                        class="col-md-6 col-12 d-inline-block my-2 "
                        >
                        <span :class="getBadgeColorClass(project.type_id)" class="badge">
                            <strong>Tipo: </strong>
                            {{ project.type ? project.type.label : 'Nessun type' }}
                        </span>

                    </router-link >
                    <div class="col-md-6 col-12 d-inline-block my-2">
                        <strong>Tecnologia: </strong>
                        <div v-for=" technology in project.technologies">
                            {{ technology.label }} 
                        </div>
                    </div>
                    </div>
                    
                    <div class="my-2">
                        <strong>Descrizione: </strong> {{ project.description }}
                        <hr>
                    </div>
                    <div class="my-2">
                        <strong>Link: </strong> {{ project.link }}
                    </div>
                </div>  
                <div class="card-footer text-center m-0">
                    <router-link 
                        v-if="!isDetail"
                        :to="{
                        name: 'project-detail',
                        params:{
                            id:project.id,
                        },
                        }" 
                        class="btn btn-warning">
                        Vedi Dettaglio
                    </router-link>
                    <router-link 
                        v-else
                        :to="{
                        name: 'portfolio',
                        }" 
                        class="btn btn-dark ">
                        Ritorna alla lista
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
 
</style>