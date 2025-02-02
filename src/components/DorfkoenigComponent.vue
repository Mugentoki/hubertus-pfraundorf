<template>
  <div class="component-dorfkoenig" :id="anchor">
    <h2 style="visibility: hidden;;">14. Raublinger Dorfkönigschießen</h2>
    <div class="image-grid">
      <BaseImage src="dorfkoenig/flyer-1.webp" alt="14. Raublinger Dorfkönigschießen" />
      <BaseImage src="dorfkoenig/flyer-2.webp" alt="Schießprogramm" />
      <BaseImage src="dorfkoenig/flyer-3.webp" alt="Wertungen" />
      <BaseImage src="dorfkoenig/flyer-4.webp" alt="Schießzeiten" />
    </div>
    <!--<div class="dk-ergebnisse">
      <router-link to="/downloads">Ergebnisse</router-link>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'DorfkoenigComponent',
  components: {
  },
  data() {
    return {
    };
  },
  props: {
    anchor: {
      type: String,
      default: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '~@/assets/scss/abstract/_variables.scss';
  @import '~@/assets/scss/abstract/_mixins.scss';

  .component-dorfkoenig {
    padding: $padding-topbottom $padding-sides;
  }

  .image-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;

      @media all and (min-width: $tablet) {
        width: calc((100% - 16px) / 2);
      }
    }
  }

  .dk-ergebnisse {
    a {
      @include fuzzy-background;
      display: block;
      background-color: $color-green;
      color: $color-white;
      padding: 5px 20px;
      font-size: 2.2rem;
      text-decoration: none;
      transition: $base-transition;
      width: fit-content;
      margin: 25px auto 0;

      &:hover {
        background-color: $color-green-light;
      }
    }
  }
</style>
