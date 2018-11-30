import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
//import store from '../store'
//const auth = store.state.auth

Vue.use(Router)

//mode: "history"路由模式，默认值 'hash' 使用井号（ # ）作路由
//linkExactActiveClass 的值是一个类名，用来添加到与当前路由对应的 <router-link> 上，以显示当前精确激活的 <router-link>，其默认值是 'router-link-exact-active'，我们这里改为 'active' 以利用 Bootstrap 的激活样式。
const router = new Router({
	mode: "history",
	linkExactActiveClass: 'active',
	routes
});

//全局前置守卫
router.beforeEach((to,from,next) => {
	// 获取仓库里的登录信息
	const auth = router.app.$options.store.state.auth;
	
	if (auth && to.path.indexOf("/auth/") !== -1) {
		// 如果当前用户已登录，且目标路由包含 /auth/ ，就跳转到首页
		next("/");
	} else {
		next();
	}
})

export default router