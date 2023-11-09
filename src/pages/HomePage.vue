<script>
import AppSlider from '../components/AppSlider.vue';

export default {
  data() {
    return {
    }
  },

  components: {
    AppSlider
  },
};
</script>

<template>
    <h1 class="py-4 text-center bg-black text-white">Il mio percorso a Boolean <font-awesome-icon :icon="['fas', 'computer']" /></h1>
    <div class="container my-3 d-flex justify-content-center">
      <AppSlider/>
    </div>
    <div class="row py-2 bg-black text-white justify-content-center">

      <div class="col-4 ms-auto">
        <h5 >
          Contatti:
        </h5>
        <p>
          <font-awesome-icon :icon="['fas', 'envelope']" /> : samuele.benato@gmail.com <br>
          <font-awesome-icon :icon="['fas', 'phone']" /> : +39 370 135 5044
        </p>
      </div>
      <div class="col-4 ms-auto">
        <h5>
          Social :
        </h5>
        <p>
          <font-awesome-icon :icon="['fab', 'instagram']" /> samuele_benato_ <br>
          <font-awesome-icon :icon="['fab', 'linkedin']" /> samuele.benato
        </p>
      </div>
    </div>
</template>

<style lang="scss" scoped></style>