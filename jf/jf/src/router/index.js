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
		// 	path: 'template',
		// 	title: 'template',
		// 	name: 'template',
		// 	component: () => import('@/pages/index/template.vue')
		// }
	]
}
export const template = {
  path: 'template',
  name: 'template',
  component: () => import('@/pages/template.vue')
}

export default new Router({
  routes: [
    index,
    template
  ]
})
