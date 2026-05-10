const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  },
  {
    path: '/explore',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ExplorePage.vue') }],
  },
  {
    path: '/compare',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ComparePage.vue') }],
  },
  {
    path: '/recent',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/RecentPage.vue') }],
  },
  {
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ProfilePage.vue') }],
  },
  /* {
    path: '/compare/:slug',
    name: 'comparison',
    component: () => import('pages/compare/ComparePage.vue'),
  }, */
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  /*  { path: '/products/:category', component: () => import('pages/ProductList.vue') },
  { path: '/products/:category/:slug', component: () => import('pages/ProductDetail.vue') }, */
]

export default routes
