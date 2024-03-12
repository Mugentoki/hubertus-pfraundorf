const { defineConfig } = require('@vue/cli-service');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

module.exports = defineConfig({
  transpileDependencies: true,
});

// You can write the paths as an array of strings or an array of objects
const paths = [
  {
    path: '/',
    lastmod: '2024-03-12',
    priority: 1.0,
    changefreq: 'yearly',
  },
  {
    path: '/vorstandschaft',
    lastmod: '2024-03-12',
    priority: 0.9,
    changefreq: 'yearly',
  },
  {
    path: '/downloads',
    lastmod: '2024-03-12',
    priority: 0.9,
    changefreq: 'yearly',
  },
  {
    path: '/datenschutzerklaerung',
    lastmod: '2024-03-12',
    priority: 0.1,
    changefreq: 'yearly',
  },
  {
    path: '/impressum',
    lastmod: '2024-03-12',
    priority: 0.1,
    changefreq: 'yearly',
  },
];

module.exports = {
  productionSourceMap: true,
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'https://www.hubertus-pfraundorf.de', paths }),
    ],
  },
  pwa: {
    workboxOptions: {
      exclude: ['.htaccess'],
    },
  },
};
