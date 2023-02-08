<template>
  <div class="home">
    <HeaderComponent />
    <div class="page-content">
      <EventComponent />
      <HubertusComponent />
      <LocationComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
import EventComponent from '@/components/EventComponent.vue';
import LocationComponent from '@/components/LocationComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    EventComponent,
    LocationComponent,
  },
};
</script>
