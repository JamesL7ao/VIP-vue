import Vue from 'vue'
import App from './App.vue'

// 引入路由
import vueRouter from 'vue-router'
//引入配置好的路由
import router from './assets/js/router.js'
// 把路由挂载到实例上
Vue.use(vueRouter)

//引入清样式的文件
import './assets/css/cssreset.css'

//引入mint-ui的css文件
import '../node_modules/mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);

// 引入字体图标
import './assets/js/iconfont.js'

// 引入vuex文件
import Vuex from 'vuex';
Vue.use(Vuex);
import store from './assets/js/data.js'

new Vue({
  el: '#app',
  render: h => h(App),

  router:router,

  // store绑定到示例对象
	store:store
})
