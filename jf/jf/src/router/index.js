import Vue from 'vue'
import Router from 'vue-router'
//  import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
export const index = {
  path: '/',
  name: 'index',
  component: () => import('@/pages/index.vue'),
  children:[
		{
			path: '',
			title: 'home',
			name: 'home',
			component: () => import('@/pages/index/home.vue')
    }
    // {
		// 	path: 'slog',
		// 	title: 'slog',
		// 	name: 'slog',
		// 	component: () => import('@/pages/index/home.vue')
		// }
	]
}

export default new Router({
  routes: [
    index
  ]
})
