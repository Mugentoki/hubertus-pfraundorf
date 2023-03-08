<template>
  <img
    :src="require(`@/assets/images/${src}`)"
    :alt="alt"
    :title="alt"
    :loading="loading"
    :decoding="decoding"
    :class="classes"
    :width="width"
    :height="height"
  />
</template>

<script>
export default {
  name: 'BaseImage',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    loading: {
      type: String,
      default: 'lazy',
    },
    decoding: {
      type: String,
      default: 'async',
    },
    classes: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      defaut: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '~@/assets/scss/abstract/_variables.scss';
</style>
