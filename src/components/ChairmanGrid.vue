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
      <BaseImage :src="chairman.image" :alt="chairman.name" :loading="chairman.loading" />
    </div>
    <h2>Unsere Ehrenmitglieder</h2>
    <div v-for="(chairman, chairmanIndex) in honorary"
      :key="chairmanIndex"
      class="single-chairman">
      <div class="chairman-content">
        <p class="chariman-name h3">{{ chairman.name }}</p>
        <p class="chairman-position" v-for="(position, positionIndex) in chairman.positions"
          :key="positionIndex">
          {{ position }}
        </p>
      </div>
      <BaseImage :src="chairman.image" :alt="chairman.name" :loading="chairman.loading" />
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
          image: 'chairman/thomas-berger.webp',
          positions: ['1. Schützenmeister'],
          loading: 'eager',
        },
        {
          name: 'Alexander Berger',
          image: 'chairman/alexander-berger.webp',
          positions: ['2. Schützenmeister', 'Sportleiter'],
          loading: 'lazy',
        },
        {
          name: 'Rebecca Lehnig',
          image: 'chairman/rebecca-lehnig.webp',
          positions: ['1. Kassierin'],
          loading: 'lazy',
        },
        {
          name: 'Leana Ascher',
          image: 'chairman/ascher-leana.webp',
          positions: ['Schriftführerin'],
          loading: 'lazy',
        },
        {
          name: 'Steffi Festner',
          image: 'chairman/steffi-festner.webp',
          positions: ['2. Kassierin'],
          loading: 'lazy',
        },
        {
          name: 'Georg Neuner',
          image: 'chairman/georg-neuner.webp',
          positions: ['Fähnrich'],
          loading: 'lazy',
        },
        {
          name: 'Sebastian Festner',
          image: 'chairman/sebastian-festner.webp',
          positions: ['Fahnenbegleiter', 'Jugendwart'],
          loading: 'lazy',
        },
        {
          name: 'Andreas Berger',
          image: 'chairman/andreas-berger.webp',
          positions: ['Fahnenbegleiter'],
          loading: 'lazy',
        },
        {
          name: 'Sebastian Estermann sen.',
          image: 'chairman/sebastian-estermann-sen.webp',
          positions: ['Zeugwart'],
          loading: 'lazy',
        },
        {
          name: 'Albert Berger jun.',
          image: 'chairman/albert-berger-jun.webp',
          positions: ['Beisitzer'],
          loading: 'lazy',
        },
        {
          name: 'Sabine Weingartner',
          image: 'chairman/sabine-fischer.webp',
          positions: ['Beisitzerin'],
          loading: 'lazy',
        },
        {
          name: 'Franz Pichler',
          image: 'chairman/franz-pichler.webp',
          positions: ['Beisitzer'],
          loading: 'lazy',
        },
      ],
      honorary: [
        {
          name: 'Andreas Schröttinger',
          image: 'logo-background.png',
          positions: [''],
          loading: 'lazy',
        },
        {
          name: 'Norbert Retzer',
          image: 'chairman/norbert-retzer.webp',
          positions: [''],
          loading: 'lazy',
        },
        {
          name: 'Michael Harbuz',
          image: 'chairman/michael-harbuz.webp',
          positions: [''],
          loading: 'lazy',
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

    h2 {
      grid-column: span 2;
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
