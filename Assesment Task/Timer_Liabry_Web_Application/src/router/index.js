import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',

    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/chesstimer',
    name: 'chesstimer',

    component: function () {
      return import('../views/ChessTimerView.vue')
    }
  },
  {
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
