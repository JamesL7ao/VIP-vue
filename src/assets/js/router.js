// 引入路由
import vueRouter from 'vue-router'

import dailyRecommendation from '../../components/index/dailyRecommendation.vue'
import more from '../../components/index/more.vue'
import login from '../../components/index/login.vue'
import register from '../../components/index/register.vue'
import classifivation from '../../components/index/classifivation.vue'
import brand from '../../components/index/brand.vue'
import search from '../../components/index/search.vue'
import shop from '../../components/index/shop.vue'
import shopping from '../../components/index/shopping.vue'

export default new vueRouter({
	routes:[
		{path:'/dailyRecommendation',component:dailyRecommendation},
		{path:'/more',component:more},
		{path:'/login',component:login},
		{path:'/register',component:register},
		{path:'/classifivation',component:classifivation},
		{path:'/brand',component:brand},
		{path:'/search',component:search},
		{path:'/shop',component:shop},
		{path:'/shopping',component:shopping,name:'shopping'},
		{path:'/*',component:dailyRecommendation}
	]
})