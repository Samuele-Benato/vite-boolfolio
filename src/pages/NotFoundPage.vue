<script>
export default {
  data() {
    return {
      title: "Progetto non trovato"
    }
  }
};
</script>

<template>
    <div class="container">
        <h1 class="my-3">{{ title }}</h1>
        <router-link                    
            :to="{
            name: 'portfolio',
            }" 
            class="btn btn-dark ">
            Ritorna alla lista
        </router-link>
    </div>            
</template>

<style lang="scss" scoped></style>