<template>
  <div class="privacy">
    <HeaderComponent />
    <div class="page-content">
      <EventComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
import EventComponent from '@/components/EventComponent.vue';

export default {
  name: 'DorfkoenigView',
  components: {
    HeaderComponent,
    EventComponent,
  },
  head: {
    title: 'Dorfkönig | SG Hubertus Pfraundorf e.V.',
  },
};
</script>
