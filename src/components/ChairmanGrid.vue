<template>
  <div class="component-chairman">
    <div v-for="(chairman, chairmanIndex) in chairmans"
      :key="chairmanIndex"
      class="single-chairman">
      <div class="chairman-content">
        <p class="chariman-name h3">{{ chairman.name }}</p>
        <p class="chairman-position" v-for="(position, positionIndex) in chairman.positions"
          :key="positionIndex">
          {{ position }}
        </p>
      </div>
      <BaseImage :src="chairman.image" alt="chairman.name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChairmanComponent',
  components: {
  },
  data() {
    return {
      chairmans: [
        {
          name: 'Thomas Berger',
          image: 'chairman/map-fallback.png',
          positions: ['1. Schützenmeister'],
        },
        {
          name: 'Alexander Berger',
          image: 'chairman/map-fallback.png',
          positions: ['2. Schützenmeister', 'Sportleiter'],
        },
        {
          name: 'Rebecca Lehnig',
          image: 'chairman/map-fallback.png',
          positions: ['1. Kassierin'],
        },
        {
          name: 'Michael Harbuz',
          image: 'chairman/map-fallback.png',
          positions: ['2. Kassier'],
        },
        {
          name: 'Angelika Berger',
          image: 'chairman/map-fallback.png',
          positions: ['Schriftführerin'],
        },
        {
          name: 'Georg Neuner',
          image: 'chairman/map-fallback.png',
          positions: ['Fähnrich'],
        },
        {
          name: 'Sebastian Festner',
          image: 'chairman/map-fallback.png',
          positions: ['Fahnenbegleiter', 'Jugendwart'],
        },
        {
          name: 'Andreas Berger',
          image: 'chairman/map-fallback.png',
          positions: ['Fahnenbegleiter'],
        },
        {
          name: 'Sebastian Estermann sen.',
          image: 'chairman/map-fallback.png',
          positions: ['Zeugwart'],
        },
        {
          name: 'Alber Berger jun.',
          image: 'chairman/map-fallback.png',
          positions: ['Beisitzer'],
        },
        {
          name: 'Sebastian Estermann jun.',
          image: 'chairman/map-fallback.png',
          positions: ['Beisitzer'],
        },
        {
          name: 'Sabine Weingartner',
          image: 'chairman/map-fallback.png',
          positions: ['Beisitzerin'],
        },
      ],
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

  $chairman-gap: 100px;

  .component-chairman {
    margin-top: 75px;
    padding: 0 $padding-sides;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: $chairman-gap;

    @media all and (min-width: $tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    .single-chairman {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 15px;
    }

    .chairman-position {
      &:not(:last-child) {
        &:after {
          content: ',';
        }
      }
    }

    img {
      width: 100%;
      aspect-ratio: 3 / 2;
      object-fit: cover;
    }
  }
</style>
