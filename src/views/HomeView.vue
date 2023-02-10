<template>
  <div class="home">
    <HeaderComponent />
    <div class="page-content">
      <EventComponent />
      <DorfkoenigComponent />
      <LocationComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
import EventComponent from '@/components/EventComponent.vue';
import LocationComponent from '@/components/LocationComponent.vue';
import DorfkoenigComponent from '@/components/DorfkoenigComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    EventComponent,
    LocationComponent,
    DorfkoenigComponent,
  },
};
</script>
