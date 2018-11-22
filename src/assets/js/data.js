import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// 创建数据仓库
export default new Vuex.Store({
	// 数据
  state: {
    // 是否在主页，是否显示头部信息
    home:true,
    // 现对应的索引
    selected:0,

    total:0,

    allM:[]
  },
  // 方法
  mutations: {
  	// 操作数据方法
    nohome(state,n){
      state.home=n;
    },
    imgUrl(state,n){
      state.allM.push(n);
    }
  }
})