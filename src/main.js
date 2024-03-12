import { createApp } from 'vue';
import { VueHeadMixin, createHead } from '@unhead/vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// global components
import GlobalMenu from './components/globals/GlobalMenu.vue';
import GlobalFooter from './components/globals/GlobalFooter.vue';

// import components
import BaseImage from './components/base/Image.vue';
import BaseButton from './components/base/Button.vue';
import BaseTextblock from './components/base/Textblock.vue';
import ImageWithText from './components/base/ImageWithText.vue';

import '@/assets/scss/main.scss';

const head = createHead();

createApp(App)
  .use(store)
  .use(router)
  .mixin(VueHeadMixin)
  .use(head)
  .component('GlobalMenu', GlobalMenu)
  .component('GlobalFooter', GlobalFooter)
  .component('BaseImage', BaseImage)
  .component('BaseButton', BaseButton)
  .component('BaseTextblock', BaseTextblock)
  .component('ImageWithText', ImageWithText)
  .mount('#app');
