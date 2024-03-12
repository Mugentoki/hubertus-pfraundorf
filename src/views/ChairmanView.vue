<template>
  <div class="privacy">
    <div class="page-content">
      <h1>Vorstandschaft</h1>
      <ChairmanComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ChairmanComponent from '@/components/ChairmanGrid.vue';

export default {
  name: 'ChairmanView',
  components: {
    ChairmanComponent,
  },
  head: {
    title: 'Vorstandschaft | SG Hubertus Pfraundorf e.V.',
  },
};
</script>

<style scoped>
  .page-content {
    padding: 100px 0;
  }
</style>
