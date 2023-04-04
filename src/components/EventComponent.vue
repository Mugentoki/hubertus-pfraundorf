<template>
  <div class="component-events" :id="anchor">
    <h2>Anstehende Termine</h2>
    <div class="event-cards">
      <ContentCard v-for="(event, index) in getCurrentThreeEvents" :key="index">
        <p class="event-title h3">{{ event.title }}</p>
        <p class="event-date">{{ dateConverted(event.date) }}</p>
        <p class="event-details">{{ event.details }}</p>
      </ContentCard>
    </div>
    <div class="event-action">
      <button @click="togglePopup()">Alle Termine</button>
    </div>
    <div class="events-popup" :class="isPopupOpen ? 'open' : ''">
      <div class="popup-content">
        <div class="popup-close"><button @click="togglePopup()">x</button></div>
        <p class="popup-title">Alle Termine</p>
        <ContentCard v-for="(event, index) in getCurrentEvents()" :key="index">
        <p class="event-title h3">{{ event.title }}</p>
        <p class="event-date">{{ dateConverted(event.date) }}</p>
        <p class="event-details">{{ event.details }}</p>
      </ContentCard>
      </div>
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/base/ContentCard.vue';

export default {
  name: 'HeaderComponent',
  components: {
    ContentCard,
  },
  data() {
    return {
      isPopupOpen: false,
      events: [
        {
          title: 'Endschießen',
          date: '03 31 2023',
          details: 'Letzter Schießabend mit Wertung für das Endschießen sowie der Wanderpokale.',
        },
        {
          title: 'Preisverteilung beim Alten Wirt',
          date: '04 06 2023',
          details: 'Am 6. April, Gründonnerstag, findet ab 18:30 Uhr die Preisverteilung der Saison 2022/23 statt.',
        },
        {
          title: '15.04. bis 20.04.2023 – 12. Raublinger Dorfkönigschießen',
          date: '04 20 2023',
          details: 'Ab Samstag 15. April startet das 12. Raublinger Dorfkönigschießen, täglich bis inklusive Donnerstag 20. April. Genauere Details sind in den Flyern weiter unten zu finden.',
        },
        {
          title: '29.04.2023 – Preisverteilung Dorfkönigschießen',
          date: '04 29 2023',
          details: 'Am Samstag den 29. April findet um 18:00 Uhr die Siegerehrung des Dorfkönigschießens statt, in der Fahrzeughalle der Freuwilligen Feuerwehr Pfraundorf.',
        },
        {
          title: '08.07.2023 – Bierfest',
          date: '07 08 2023',
          details: 'Dieses Jahr findet wieder unser Bierfest auf dem Parkplatz der St. Nikolaus Kirche statt.',
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
  computed: {
    getCurrentThreeEvents() {
      return this.getCurrentEvents().slice(0, 3);
    },
  },
  methods: {
    getCurrentEvents() {
      const currentTime = Date.now();
      const upcomingEvents = this.events.filter((event) => {
        const eventDate = Date.parse(event.date);
        console.log(eventDate);
        return eventDate >= currentTime;
      });

      return upcomingEvents;
    },
    dateConverted(dateString) {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      return date.toLocaleDateString('de-DE', options);
    },
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '~@/assets/scss/abstract/_variables.scss';
  @import '~@/assets/scss/abstract/_mixins.scss';

  .component-events {
    padding: $padding-topbottom $padding-sides;
    position: relative;
  }

  .event-cards {
    margin: 25px 0 35px;

    .content-card {
      margin-bottom: 35px;
    }
  }

  .event-title {
    font-weight: 700;
    letter-spacing: 0;
  }

  .event-date {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  .event-action {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      @include fuzzy-background;
      display: block;
      background-color: $color-green;
      color: $color-white;
      padding: 5px 20px;
      font-size: 2.2rem;
      text-decoration: none;
      transition: $base-transition;
      border: none;

      &:hover {
        background-color: $color-green-light;
      }
    }
  }

  .events-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .2);
    backdrop-filter: blur(3px);
    z-index: -10;
    opacity: 0;
    transition: $base-transition;

    &.open {
      z-index: 10;
      opacity: 1;
    }

    .popup-close {
      position: relative;

      button {
        position: absolute;
        top: -50px;
        right: 5px;
        font-size: 4rem;
        border: none;
        background: transparent;
      }
    }

    .popup-title {
      font-size: 3.2rem;
    }

    .popup-content {
      width: 95%;
      max-height: 80%;
      overflow-y: auto;
      background-color: $color-white;
      padding: 50px 15px;
      display: flex;
      flex-direction: column;
      gap: 25px;

      @media all and (min-width: $tablet) {
        width: 80%;
        max-height: 70%;
        padding: 50px;
      }

      .content-card {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 15px 20px;

        @media all and (min-width: $tablet) {
          flex-direction: row;
        }

        .event-title {
          flex-grow: 1;
        }

        .event-date {
          display: inline-block;
        }
      }
    }
  }
</style>
