import { createRouter, createWebHistory } from 'vue-router'
// array of routes defining the url path and which vue component 
// to load when that path is used.
const routes = [
  {
    // HomeView
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    // AboutView
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    // ChessTimerView
    path: '/chesstimer',
    name: 'chesstimer',
    component: function () {
      return import('../views/ChessTimerView.vue')
    }
  },
  {
    // StopWatchView
    path: '/stopwatch',
    name: 'stopwatch',
    component: function () {
      return import('../views/StopWatchView.vue')
    }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
