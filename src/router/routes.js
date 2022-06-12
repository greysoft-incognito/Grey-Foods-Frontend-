
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
  {
    path: '/vendor',
    component: () => import('layouts/Userplain.vue'),
    children: [
      { path: '/vendor', component: () => import('pages/Vendor.vue') },
     
    ]
  },
  {
    path: '/orderdetails',
    component: () => import('layouts/Userplain.vue'),
    children: [
      { path: '/orderdetails', component: () => import('pages/OrderDetails.vue') },
     
    ]
  },
  {
    path: '/pay',
    component: () => import('layouts/Userplain.vue'),
    children: [
      { path: '/pay', component: () => import('pages/Pay.vue') },
     
    ]
  },
  {
    path: '/Editaccount',
    component: () => import('layouts/Userplain.vue'),
    children: [
      { path: '/editaccount', component: () => import('pages/Editaccount.vue') },
     
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
