<template>
  <div class="home">
    <HeaderComponent :showScrollDown="true"/>
    <div class="page-content">
      <EventComponent anchor="termine"/>
      <!-- <HubertusComponent anchor="verein"/> -->
      <DorfkoenigComponent anchor="bierfest"/>
      <LocationComponent anchor="standort"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
import EventComponent from '@/components/EventComponent.vue';
import LocationComponent from '@/components/LocationComponent.vue';
import DorfkoenigComponent from '@/components/DorfkoenigComponent.vue';
// import HubertusComponent from '@/components/HubertusComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    EventComponent,
    LocationComponent,
    DorfkoenigComponent,
    // HubertusComponent,
  },
};
</script>
