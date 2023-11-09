<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      
    }
  },

  props: {
    pagination: Object,
  },

  emits: ['change-page'],
  
};
</script>

<template>
    <nav aria-label="..." class="py-3 ">
        <ul class="pagination justify-content-center">
            <li 
            class="page-item " 
            :class="{
                disabled: !link.url,
            }" 
            v-for="link in pagination.links"
            @click="$emit('change-page' ,link.url)">
                <a class="page-link " :class="link.active ? 'active' : ''" v-html="link.label"></a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>