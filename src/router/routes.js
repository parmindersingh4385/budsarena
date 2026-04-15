const routes = [
  {
    path: '/',
    // component: () => import('pages/HomePage.vue')
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  },
  {
    path: '/compare/:slug',
    name: 'comparison',
    component: () => import('pages/compare/ComparePage.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  /*  { path: '/products/:category', component: () => import('pages/ProductList.vue') },
  { path: '/products/:category/:slug', component: () => import('pages/ProductDetail.vue') }, */
]

export default routes

/* const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
 */
