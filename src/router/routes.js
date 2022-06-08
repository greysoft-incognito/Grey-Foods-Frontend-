
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/app', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/index',
    component: () => import('layouts/UserDashboard.vue'),
    children: [
      { path: '/index', component: () => import('pages/Index.vue') },
     
    ]
  },
  {
    path: '/welcome',
    component: () => import('layouts/UserDashboard.vue'),
    children: [
      { path: '/welcome', component: () => import('pages/Welcome.vue') },
     
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
