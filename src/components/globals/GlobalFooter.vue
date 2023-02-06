<template>
  <footer class="footer">
    <div class="footer-pre">
      <div class="footer-logo">
        <BaseImage src="logo-large.png" alt="Wappen Hubertus Pfraundorf" />
      </div>
      <div class="footer-nav-1">
        <p class="footer-title">Hubertus Pfraundorf</p>
        <nav class="footer-nav">
          <router-link to="/dorfkoenigschießen">Dorfkönigschießen</router-link>
          <router-link to="/vorstandschaft">Vorstandschaft</router-link>
          <router-link to="/downloads">Downloads</router-link>
        </nav>
      </div>
      <div class="footer-contact">
        <p class="footer-title">Kontakt</p>
        <span>1. Schützenmeister</span>
        <span>Thomas Berger</span>
        <span>Eschenweg 1a</span>
        <span>83064 Raubling</span>
        <br />
        <span>Telefon: 08035 6131</span>
        <span>Email: vorstand@hubertus-pfraundorf.de</span>
      </div>
      <div class="footer-nav-2">
        <p class="footer-title">Weiterführend</p>
        <nav class="footer-nav">
          <a href="#">Schützengau Rosenheim</a>
          <a href="#">Schützenbezirk Oberbayern</a>
          <a href="#">Bayerische Sportschützenbund</a>
          <a href="#">Deutscher Schützenbund</a>
        </nav>
      </div>
    </div>
    <div class="footer-separator"></div>
    <div class="footer-copyright">
      <div class="copyright">© 1952 - {{ getCurrentYear() }} SG "Hubertus" Pfraundorf e.V</div>
      <nav class="privacy-nav">
        <router-link to="/datenschutzerklaerung">Datenschutzerklärung</router-link>
        <router-link to="/impressum">Impressum</router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'GlobalFooter',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '~@/assets/scss/abstract/_variables.scss';
  @import '~@/assets/scss/abstract/_mixins.scss';

  footer {
    @include fuzzy-background;
    background-color: $color-green;
    color: $color-white;

    > div {
      max-width: $max-page-width;
      margin: 0 auto;
    }

    a {
      color: $color-white;
      text-decoration: none;

      &:hover,
      &:focus,
      &:active {
        color: $color-white;
        text-decoration: underline;
      }

      &:visited {
        color: $color-white;
        text-decoration: none;
      }
    }

    .footer-pre {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: $padding-topbottom $padding-sides;
    }

    .footer-logo {
      align-self: center;

      img {
        max-width: 110px;
        height: auto;
      }
    }

    .footer-title {
      font-size: 2.4rem;
      margin-bottom: 15px;
    }

    .footer-contact {
      span {
        display: block;
      }
    }

    .footer-nav {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .footer-separator {
      width: 100%;
      height: 2px;
      background-color: rgba(0,0,0,.2);
      max-width: initial;
      padding: 0;
    }

    .footer-copyright {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-between;
      font-size: 1.2rem;
      padding: $padding-sides;

      @media all and (min-width: $tablet) {
        flex-direction: row;
      }
    }

    .privacy-nav {
        display: flex;
        gap: 25px;
      }

      .copyright {
        @media all and (max-width: $mobile) {
          margin: 15px 0;
        }
      }
  }
</style>
