<template>
  <div class="component-download">
    <h2>Ergebnisse Jahreswertung</h2>
    <div v-for="(category, categoryIndex) in hubertusDownloadCategories"
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
    <h2>Raublinger Dorfkönig</h2>
    <div v-for="(category, categoryIndex) in dorkoenigDownloadCategories"
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
      hubertusDownloadCategories: [
        {
          title: 'Saison 2023 / 24',
          downloads: [
            {
              title: 'Damenklasse',
              icon: 'pdf',
              link: '/files/saison/202324/damenklasse-2023-24.pdf',
              available: 1710014400,
            },
            {
              title: 'Schützenklasse',
              icon: 'pdf',
              link: '/files/saison/202324/schuetzenklasse-2023-24.pdf',
              available: 1710014400,
            },
            {
              title: 'Aufgelegt Damen',
              icon: 'pdf',
              link: '/files/saison/202324/aufgelegt-damen-2023-24.pdf',
              available: 1710014400,
            },
            {
              title: 'Aufgelegt Männer',
              icon: 'pdf',
              link: '/files/saison/202324/aufgelegt-maenner-2023-24.pdf',
              available: 1710014400,
            },
            {
              title: 'Schützenkönig, Wanderpokal, Scheibe',
              icon: 'pdf',
              link: '/files/saison/202324/schuetzenkoenig-wanderpokal-scheibe-2023-24.pdf',
              available: 1710014400,
            },
            {
              title: 'Beste Teiler',
              icon: 'pdf',
              link: '/files/saison/202324/beste-teiler-2023-24.pdf',
              available: 1710014400,
            },
          ],
        },
      ],
      dorkoenigDownloadCategories: [
        {
          title: 'Dorfkönig 2024',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2024/13-dorfkoenig-2024.pdf',
              available: 1710014400,
            },
            {
              title: 'Mannschaft Ring',
              icon: 'pdf',
              link: '/files/2024/13-dorfkoenig-mannschaftswertung-2024.pdf',
              available: 1710014400,
            },
            {
              title: 'Mannschaft Meistbeteiligung',
              icon: 'pdf',
              link: '/files/2024/13-dorfkoenig-mannschaft-meistbeteiligung-2024.pdf',
              available: 1710014400,
            },
            {
              title: 'Einzelwertung',
              icon: 'pdf',
              link: '/files/2024/13-dorfkoenig-einzelwertung-2024.pdf',
              available: 1710014400,
            },
          ],
        },
        {
          title: 'Dorfkönig 2023',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2023/12-dorfkoenig-2023.pdf',
              available: 1682794800,
            },
            {
              title: 'Mannschaft Ring',
              icon: 'pdf',
              link: '/files/2023/12-dorfkoenig-mannschaft-ring-2023.pdf',
              available: 1682794800,
            },
            {
              title: 'Mannschaft Meistbeteiligung',
              icon: 'pdf',
              link: '/files/2023/12-dorfkoenig-mannschaft-meistbeteiligung-2023.pdf',
              available: 1682794800,
            },
            {
              title: 'Einzelwertung',
              icon: 'pdf',
              link: '/files/2023/12-dorfkoenig-einzelwertung-2023.pdf',
              available: 1682794800,
            },
          ],
        },
        {
          title: 'Dorfkönig 2020',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2020/dorfkoenig-2020.pdf',
              available: 1600000000,
            },
            {
              title: 'Mannschaft Ring',
              icon: 'pdf',
              link: '/files/2020/dorfkoenig-mannschaftswertung-2020.pdf',
              available: 1600000000,
            },
            {
              title: 'Mannschaft Meistbeteiligung',
              icon: 'pdf',
              link: '/files/2020/dorfkoenig-meistbeteiligung-2020.pdf',
              available: 1600000000,
            },
            {
              title: 'Einzelwertung',
              icon: 'pdf',
              link: '/files/2020/dorfkoenig-einzelwertung-2020.pdf',
              available: 1600000000,
            },
          ],
        },
        {
          title: 'Dorfkönig 2018',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2018/dorfkoenig-2018.pdf',
              available: 1600000000,
            },
          ],
        },
        {
          title: 'Dorfkönig 2017',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2017/dorfkoenig-2017.pdf',
              available: 1600000000,
            },
          ],
        },
        {
          title: 'Dorfkönig 2016',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2016/dorfkoenig-2016.pdf',
              available: 1600000000,
            },
          ],
        },
        {
          title: 'Dorfkönig 2015',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2015/dorfkoenig-2015.pdf',
              available: 1600000000,
            },
          ],
        },
        {
          title: 'Dorfkönig 2014',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2014/dorfkoenig-2014.pdf',
              available: 1600000000,
            },
          ],
        },
        {
          title: 'Dorfkönig 2013',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2013/dorfkoenig-2013.pdf',
              available: 1600000000,
            },
          ],
        },
        {
          title: 'Dorfkönig 2012',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2012/dorfkoenig-2012.pdf',
              available: 1600000000,
            },
          ],
        },
        {
          title: 'Dorfkönig 2011',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2011/dorfkoenig-2011.pdf',
              available: 1600000000,
            },
          ],
        },
        {
          title: 'Dorfkönig 2010',
          downloads: [
            {
              title: 'Dorfkönig',
              icon: 'pdf',
              link: '/files/2010/dorfkoenig-2010.pdf',
              available: 1600000000,
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

  $chairman-gap: 50px;

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

    h2 {
      text-align: left;

      @media all and (min-width: $tablet) {
        grid-column: span 3;
      }
    }

    .download-category {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    p {
      margin-bottom: 15px;
    }

    a {
      display: flex;
      align-items: flex-end;
      margin: 0 0 5px;
      justify-content: center;

      @media all and (min-width: $tablet) {
        justify-content: flex-start;
      }

      &.pdf {
        &:before {
          content: '';
          background-image: url('~@/assets/icons/pdf.svg');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          width: 20px;
          height: 20px;
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
  }
</style>
