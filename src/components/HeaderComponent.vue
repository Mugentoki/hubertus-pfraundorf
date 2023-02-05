<template>
  <div
    class="component-header"
    :style="backgroundStyles">
    <BaseImage src="logo-large.png" alt="Wappen Hubertus Pfraundorf" />
    <h1>SG "Hubertus" Pfraundorf e.V.</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    backgroundColor: {
      type: String,
      default: '#226700',
    },
  },
  computed: {
    backgroundStyles() {
      return `background-color:${this.backgroundColor};`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '~@/assets/scss/abstract/_variables.scss';

  h1,h2,h3,h4 {
    color: $color-white;
    filter: drop-shadow(4px 6px 6px #000000dd);
  }

  img {
    margin-bottom: 25px;
    width: 200px;
    filter: drop-shadow(0 10px 6px #00000066);
  }

  .component-header {
    width: 100%;
    height: 100vh;
    background-image: url('~@/assets/images/textures/noise.png');
    background-size: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
