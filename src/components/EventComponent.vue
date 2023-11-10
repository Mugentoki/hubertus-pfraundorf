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
          title: '19.11.2023 – Volkstrauertag',
          date: '11 19 2023',
          details: 'Aufstellung der Fahnenabordnungen um 8:30 Uhr beim Alten Wirt, der Gottesdienst in der St. Nikolaus Kirche beginnt um 8:45 Uhr mit anschließender Totenehrung am Kriegerdenkmal. Alle Vereinsmitglieder sind herzlich eingeladen beim Umzug und Gottesdienst teil zu nehmen.',
        },
        {
          title: '08.12.2023 – Nikolausschießen mit Brotzeit',
          date: '12 08 2023',
          details: 'Dieses Jahr wird wieder eine Nikolausscheibe mit einem Schuss auf ein unbekanntes Ziel ausgeschossen, anschließend gibt es Brotzeit im Schützenhaus. Fürs Essen wird wieder eine Liste ausgelegt, damit wir eine ungefähre Anzahl wissen. Bitte tragt euch ein oder gebt uns anderweitig bescheid.',
        },
        {
          title: '05.01.2024 – Christbaumversteigerung in Happing',
          date: '01 05 2024',
          details: 'Die Happinger Schützen veranstalten wieder ihre jährliche Christbaumversteigerung beim Happinger Hof, es ist jeder herzlich eingeladen mit zu kommen.',
        },
        {
          title: '09.02.2024 – Faschingsschießen mit Kesselfleisch',
          date: '02 09 2024',
          details: 'Ausgeschossen wird wieder eine Faschingsscheibe. Nach dem Schießen gibt es Leberwürst, Blutwürst und Kesselfleisch im Schützenhaus. Der Kessel wird in gemütlicher Runde (voraussichtlich) ab 15 Uhr angeheizt, Vereinsmitglieder sind zum dazugesellen herzlich eingeladen. Es wird wieder eine Liste aufgelegt, bitte tragt euch ein was und wie viel ihr essen wollt.',
        },
        {
          title: '24. - 29.02.2024 – Dorfkönigschießen',
          date: '02 29 2024',
          details: 'Wir laden wieder alle Einwohner, Vereine und Firmen von Raubling, sowie deren Mitglieder und Angestellte, herzlich zum 13. Raublinger Dorfkönigschießen ein. Vorkenntnisse und eigene Ausrüstung sind nicht nötig, es ist jeder willkommen!',
        },
        {
          title: '09.03.2024 – Preisverteilung Dorfkönigschießen',
          date: '03 09 2024',
          details: 'Die Preisverteilung findet ab 19 Uhr in der Fahrzeughalle der Freiwilligen Feuerwehr Pfraundorf statt.',
        },
        {
          title: '15.03.2024 – Königschießen',
          date: '03 15 2024',
          details: 'Ausschießen des Schützenkönigs',
        },
        {
          title: '22.03.2024 – Endschießen',
          date: '03 22 2024',
          details: 'Ausschießen der Wanderpokale und den Fleischpreisen',
        },
        {
          title: '05.04.2024 – Endfeier',
          date: '04 05 2024',
          details: 'Die Preisverteilung für die Saison 23/24, Königschießen und Endschießen findet in geselliger Runde ab 18:30 Uhr beim Alten Wirt statt.',
        },
        {
          title: '16.06.2024 – Vereinsjahrtag',
          date: '06 16 2024',
          details: 'Umzug und Gottesdienst für die Vereine, alle Vereinsmitglieder sind herzlich willkommen teilzunehmen.',
        },
        {
          title: '13.07.2024 – Bierfest',
          date: '07 13 2024',
          details: 'Auf dem Kirchenparkplatz halten wir ab 18 Uhr wieder unser Bierfest ab',
        },
        {
          title: '11.10.2024 – Jahreshauptversammlung',
          date: '04 05 2024',
          details: 'Ab 19:30 Uhr findet die Jahreshauptversammlung statt, wie gewohnt beim Alten Wirt in Pfraundorf.',
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
        let eventDate = Date.parse(event.date);
        eventDate += 86_400_000; // add + 24 hours so the event disappers after the actual day
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

  .event-details {
    display: block;
    width: 100%;
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
