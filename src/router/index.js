import { createRouter, createWebHashHistory } from 'vue-router'
import menus from '@/assets/menus.json'

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/components/container/ExhibitionContainer'),
  },
]

for (const menu of menus) {
  routes.push({
    path: menu.path,
    name: menu.name,
    component: () => import('@/components/offering/' + menu.component),
    meta: {
      noCache: menu.cache ? menu.cache === 'disable' : false,
      flag: menu.flag,
      picture: menu.picture,
    },
  })
}
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
