const { defineConfig } = require('@vue/cli-service');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

module.exports = defineConfig({
  transpileDependencies: true,
});

// You can write the paths as an array of strings or an array of objects
const paths = [
  {
    path: '/',
    lastmod: '2021-11-22',
    priority: 1.0,
    changefreq: 'yearly',
  },
  {
    path: '/about/',
    lastmod: '2021-11-22',
    priority: 0.9,
    changefreq: 'yearly',
  },
];

module.exports = {
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
