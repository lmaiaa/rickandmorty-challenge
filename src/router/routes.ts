import { RouteComponent, Router, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/ListCharacters.vue'),
        meta: {
          breadcrumb: [
            {
              title: 'Home',
              icon: 'home',
            },
          ],
        },
      },
      {
        path: '/character/:id',
        name: 'Character',
        component: () => import('pages/Character.vue'),
        props: true,
        meta: {
          breadcrumb: [
            {
              title: 'Home',
              icon: 'home',
              path: '/',
            },
            {
              title: 'Character',
              icon: 'person',
            },
          ],
        },
      },
      {
        path: 'episode/:id',
        component: () => import('pages/Episode.vue'),
        props: true,
        meta: {
          breadcrumb: [
            {
              title: 'Home',
              icon: 'home',
              path: '/',
            },
            {
              title: 'Episode',
              icon: 'person',
            },
          ],
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
