<template>
  <div class="component-location" :id="anchor">
    <h2>Standort</h2>
    <div class="standort-address">
      <h3>Adresse</h3>
      <p>Hoppenbichlstraße3<br>83064 Pfraundorf</p>
      <p>Eingang befindet sich rechts vom Haus der Vereine<br>
        Parkmöglichkeiten gibt es direkt vor dem Gebäude oder am Kirchenparkplatz</p>
    </div>
    <div class="open-map">
      <!-- Todo: add openstreetmap to cookie banner -->
      <iframe
        title="SG Hubertus Pfraundorf e.V"
        height="450"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=12.115444242954254%2C47.802911663819685%2C12.118984758853912%2C47.80450785161765&amp;layer=mapnik&amp;marker=47.80370976384961%2C12.117214500904083"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationComponent',
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

  .component-location {
    margin-top: 75px;
    padding: 0 $padding-sides;
  }

  .standort-address {
    h3 {
      margin-bottom: 25px;
    }

    p {
      margin-bottom: 10px;
    }
  }

  .open-map {
    margin: 35px 0 75px;

    iframe {
      border: 1px solid rgba(0,0,0,.2);
      width: 100%;
    }
  }
</style>
