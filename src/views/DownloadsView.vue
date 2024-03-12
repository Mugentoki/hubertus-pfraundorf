<template>
  <div class="privacy">
    <div class="page-content">
      <h1>Downloads</h1>
      <DownloadComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DownloadComponent from '@/components/DownloadGrid.vue';

export default {
  name: 'DownloadsView',
  components: {
    DownloadComponent,
  },
  head: {
    title: 'Ergebnisse | SG Hubertus Pfraundorf e.V.',
  },
};
</script>

<style scoped>
  .page-content {
    padding: 100px 0;
  }
</style>
