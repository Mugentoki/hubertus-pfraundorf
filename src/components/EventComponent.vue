<template>
  <div class="component-events" :id="anchor">
    <h2>Anstehende Termine</h2>
    <div class="event-cards">
      <ContentCard v-for="(event, index) in events" :key="index">
        <p class="event-title h3">{{ event.title }}</p>
        <p class="event-date">{{ event.date }}</p>
        <p class="event-details">{{ event.details }}</p>
      </ContentCard>
    </div>
    <div class="event-action">
      <BaseButton>Weitere Termine</BaseButton>
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
      events: [
        {
          title: 'Jahreshauptversammlung',
          date: '14.10.2022',
          details: `Am Freitag den 14.10. findet um 19:30 Uhr
          beim Alten Wirt in Pfraundorf unsere Jahreshauptversammlung statt.`,
        },
        {
          title: 'Anfangsschießen',
          date: '21.10.2022',
          details: `Ab dem 21.10. beginnt die neue Saison mit dem Anfangsschießen.
          Wie gewohnt immer Freitags ab 17:00 bis 20:00 Uhr`,
        },
        {
          title: 'Anderes Schießen',
          date: '31.10.2022',
          details: `Am Freitag den 14.10. findet um 19:30 Uhr
          beim Alten Wirt in Pfraundorf unsere Jahreshauptversammlung statt.`,
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

  .component-events {
    padding: $padding-topbottom $padding-sides;
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
  }
</style>
