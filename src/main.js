// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue.js的默认值
import Vue from 'vue'
//引入App.vue的默认值
import App from './App'
// 如果引入的是 index.js，可以使用下面的简写，等价于 import router from './router/index.js'
import router from './router'
import './directives'
import './components'
// 引入 store/index.js 的默认值
import store from './store'
import VueSweetalert2 from './plugins/vue-sweetalert2'
import Message from './plugins/message'
import './filters'
import { mockArticles } from './mock/data'
import ls from './utils/localStorage'

// 使用插件
Vue.use(VueSweetalert2)
Vue.use(Message)

//设置false以阻止Vue在启动时生成生产提示
Vue.config.productionTip = false

const AddMockData = (() => {
	// 是否加入测试数据
	const isAddMockData = true ;
	// 用户数据
	let userArticles = ls.getItem("articles") ;

	if (Array.isArray(userArticles)) {
		userArticles = userArticles.filter(article => Number.parseInt(article.uid) === 1) ;
	} else {
		userArticles = [] ;
	}
	
	if (isAddMockData) {
		 // 合并用户数据和测试数据，使用合并值作为所有文章
		 store.commit("UPDATE_ARTICLES", [...userArticles, ...mockArticles(30)]);
	} else {
		// 使用用户数据作为所有文章
		store.commit('UPDATE_ARTICLES', userArticles) ;
	}
})()


// eslint 配置，允许 new 一个实例后不赋值，我们没有使用 eslint，如果有，则下一行注释不可缺少
/* eslint-disable no-new */
// 创建一个新的 Vue 实例
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
  	console.log(this.$options.el);// => '#app'
  }
})
