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
  <div class="bg-home">
    <h1 class="py-4 text-center color-text">Il mio percorso a Boolean <font-awesome-icon :icon="['fas', 'computer']" /></h1>
    <div class="container my-3 d-flex justify-content-center">
      <AppSlider/>
    </div>
    <div class="row py-2 color-text justify-content-center">
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
        <div class="social-links">
          <a href="#">
            <font-awesome-icon :icon="['fab', 'instagram']" /> samuele_benato_ 
          </a>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'linkedin']" /> samuele.benato
          </a>
          <a href="https://github.com/Samuele-Benato"> 
            <font-awesome-icon :icon="['fab', 'github']" /> Samuele-Benato         
          </a>
        </div>
      </div>
    </div>
  </div>   
</template>

<style lang="scss" >
.bg-home{
  background-image: url('../../public/IMG/bg-card.jpg');
  height: 100%;
}
.color-text{
  background-color: rgba($color: #222222, $alpha: 0.9);
  color:#EAEAEA ;
}
.social-links{
  display: flex;
  flex-direction: column;
    a{
      color: #EAEAEA;
      text-decoration: none;
    }
}
</style>