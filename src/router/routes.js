import {
  HOME,
  SETTING,
  AUTH,
  FORBIDDEN,
  NOT_FOUND,
  HOME_NAME,
  SETTING_NAME,
  AUTH_NAME,
  FORBIDDEN_NAME,
  NOT_FOUND_NAME
} from '../domain/const/router.type';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: HOME, name: HOME_NAME, component: () => import('pages/Index.vue') },
      { path: SETTING, name: SETTING_NAME, component: () => import('pages/Setting.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: AUTH, name: AUTH_NAME, component: () => import('pages/Authorization.vue') },
      { path: FORBIDDEN, name: FORBIDDEN_NAME, component: () => import('pages/Forbidden.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: NOT_FOUND,
    name: NOT_FOUND_NAME,
    component: () => import('pages/Error404.vue')
  })
}

export default routes;
