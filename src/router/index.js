import { createRouter, createWebHistory } from 'vue-router';

// views
import HomeView from '../views/HomeView.vue';
import PrivacyView from '../views/PrivacyView.vue';
import ImprintView from '../views/ImprintView.vue';
import DorfkoenigView from '../views/DorfkoenigView.vue';
import ChairmanView from '../views/ChairmanView.vue';
import DownloadsView from '../views/DownloadsView.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/datenschutzerklaerung',
    name: 'privacy',
    component: PrivacyView,
  },
  {
    path: '/impressum',
    name: 'imprint',
    component: ImprintView,
  },
  {
    path: '/dorfkoenigschießen',
    name: 'dorfkoenig',
    component: DorfkoenigView,
  },
  {
    path: '/vorstandschaft',
    name: 'chairman',
    component: ChairmanView,
  },
  {
    path: '/downloads',
    name: 'downloads',
    component: DownloadsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
