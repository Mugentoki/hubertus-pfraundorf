<template>
  <div class="main-container">
    <!--<nav>
      <router-link to="/">Home</router-link> |
    </nav>-->
    <router-view/>
    <GlobalFooter/>
  </div>
</template>

<style lang="scss">
  @import '~@/assets/scss/abstract/_variables.scss';

  .page-content {
    max-width: $max-page-width;
    margin: 0 auto;
  }
</style>
