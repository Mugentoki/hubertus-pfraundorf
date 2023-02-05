import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// import components
import BaseImage from './components/base/Image.vue';

import '@/assets/scss/main.scss';

createApp(App)
  .use(store)
  .use(router)
  .component('BaseImage', BaseImage)
  .mount('#app');
