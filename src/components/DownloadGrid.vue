<template>
  <div class="component-download">
    <div v-for="(category, categoryIndex) in downloadCategories"
      :key="categoryIndex"
      class="download-category">
      <p class="h3">{{ category.title }}</p>
      <div v-for="(download, downloadIndex) in category.downloads"
        :key="downloadIndex"
        class="download-container">
        <a v-if="isFileAvailable(download.available)"
        :href="download.link"
        :title="download.title"
        :class="download.icon"
        download >
        {{ download.title }}
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadComponent',
  components: {
  },
  data() {
    return {
      downloadCategories: [
        {
          title: 'Dorfkönig 2023',
          downloads: [
            {
              title: 'Mannschaft',
              icon: 'pdf',
              link: '/files/dorfkoenig-2023/dummy.pdf',
              available: 1676057018,
            },
            {
              title: 'Einzelwertung',
              icon: 'pdf',
              link: '/files/dorfkoenig-2023/dummy.pdf',
              available: 1676057018,
            },
          ],
        },
        {
          title: 'Dorfkönig 2020',
          downloads: [
            {
              title: 'Mannschaft',
              icon: 'pdf',
              link: '/files/dorfkoenig-2023/dummy.pdf',
              available: 1677618330,
            },
            {
              title: 'Einzelwertung',
              icon: 'pdf',
              link: '/files/dorfkoenig-2023/dummy.pdf',
              available: 1677618330,
            },
          ],
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
  methods: {
    isFileAvailable(downloadTimestamp) {
      const currentTimestamp = Math.floor(Date.now() / 1000);

      return downloadTimestamp <= currentTimestamp;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '~@/assets/scss/abstract/_variables.scss';

  $chairman-gap: 100px;

  .component-download {
    margin-top: 75px;
    padding: 0 $padding-sides;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: $chairman-gap;
    text-align: center;

    @media all and (min-width: $tablet) {
      grid-template-columns: repeat(3, 1fr);
      text-align: left;
    }

    .download-category {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    p {
      margin-bottom: 15px;
    }

    a {
      display: flex;
      align-items: flex-end;
      margin: 0 0 2px;
      justify-content: center;

      @media all and (min-width: $tablet) {
        justify-content: flex-start;
      }

      &.pdf {
        &:after {
          content: '';
          background-image: url('~@/assets/icons/pdf.svg');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          width: 30px;
          height: 30px;
          display: inline-block;
          margin-left: 10px;
        }
      }
    }
  }
</style>
