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
          title: '11.10.2024 – Jahreshauptversammlung',
          date: '10 11 2024',
          details: 'Ab 19:30 Uhr findet die Jahreshauptversammlung statt, wie gewohnt beim Alten Wirt in Pfraundorf.',
        },
        {
          title: '13.10.2024 ab 10 Uhr – Eröffnung der neuen elektronischen Schießstände mit Weißwurstfrühstück',
          date: '10 13 2024',
          details: 'Die Schützengilde "Hubertus" Pfraundorf e.V. lädt alle interessierten Raublinger Bürger am So. 13.10.2024 ab 10 Uhr zur Eröffnung der neuen elektronischen Schießstände im Schützenhaus Pfraundorf in der Hoppenbichlstraße 3 (rechts neben dem Haus der Vereine) ein. Es besteht die Möglichkeit den neuen Schießstand selber auszuprobieren, auch Kinder ab 7 Jahre dürfen sich gerne mit dem Lichtgewehr versuchen. Auch für das leibliche Wohl ist mit Würstel und Getränken gesorgt. Über zahlreiches Erscheinen freut sich die Vorstandschaft.',
        },
        {
          title: '18.10.2024 – Anfangsschießen',
          date: '10 18 2024',
          details: 'Schießbeginn der neuen Saison (2024/25)',
        },
        {
          title: '06.12.2024 – Nikolausschießen',
          date: '12 06 2024',
          details: 'Ausgeschossen wird eine Nikolausscheibe, mit anschließender Brotzeit im Schützenhaus. Nur für Vereinsmitglieder.',
        },
        {
          title: '28.02.2025 – Faschingsschießen',
          date: '02 25 2025',
          details: 'Ausgeschossen wird eine Faschingsscheibe, mit anschließendem Kesselfleisch-Essen im Schützenhaus. Nur für Vereinsmitglieder.',
        },
        {
          title: '15. - 20.03.2025 – Dorfkönigschießen',
          date: '03 20 2025',
          details: 'Wir laden wieder alle Raublinger Bürger, Vereine und Firmen herzlich zum Dorfkönigschießen ein.',
        },
        {
          title: '28.03.2025 – Königsschießen',
          date: '03 28 2025',
          details: 'Vorletzter Schießabend. Ausgeschossen wir die Königskette.',
        },
        {
          title: '29.03.2025 – Preisverteilung Dorfkönigschießen',
          date: '03 29 2025',
          details: 'Die Preisverteilung findet wieder in der Fahrzeughalle der Freiwilligen Feuerwehr Pfraundorf statt.',
        },
        {
          title: '04.04.2025 – Endschießen',
          date: '04 04 2025',
          details: 'Letzter Schießabend. Ausgeschossen werden Fleischpreise sowie der Wanderpokal. Nur für Vereinsmitglieder.',
        },
        {
          title: '11.04.2025 – Endfeier',
          date: '04 11 2025',
          details: 'Endfeier mit Preisverteilung des Schützenkönigs, Wanderpokal und Jahreswertung. Ab 18:30 Uhr beim Alten Wirt in Pfraundorf.',
        },
        {
          title: '15.06.2025 – Vereinsjahrtag',
          date: '06 15 2025',
          details: '',
        },
        {
          title: '12.07.2025 – Bierfest',
          date: '07 12 2025',
          details: 'Voraussichtlicher Termin für das Bierfest 2025.',
        },
        {
          title: '10.10.2025 – Jahreshauptversammlung',
          date: '10 10 2025',
          details: 'Die Jahrehauptversammlung findet ab 19:30 Uhr beim Alten statt.',
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
