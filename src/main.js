import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// global components
import GlobalFooter from './components/globals/GlobalFooter.vue';

// import components
import BaseImage from './components/base/Image.vue';
import BaseButton from './components/base/Button.vue';
import BaseTextblock from './components/base/Textblock.vue';

import '@/assets/scss/main.scss';

createApp(App)
  .use(store)
  .use(router)
  .component('GlobalFooter', GlobalFooter)
  .component('BaseImage', BaseImage)
  .component('BaseButton', BaseButton)
  .component('BaseTextblock', BaseTextblock)
  .mount('#app');
