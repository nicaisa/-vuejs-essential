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
	// 制定滚动行为
	//注：scrollBehavior 只在支持 history.pushState 的浏览器中可用，history.pushState 用来在浏览历史中添加一条新的记录。
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			// 有锚点时，滚动到锚点
			return {selector: to.hash }
		} else if (savedPosition) {
			// 有保存位置时，滚动到保存位置
			return savedPosition ;
		} else {
			// 默认滚动到页面顶部
			return {x: 0, y: 0} ;
		}
	},
	routes
});


//全局前置守卫
router.beforeEach((to,from,next) => {
	// 获取仓库里的登录信息
	const app = router.app ;
	const store = app.$options.store ;
	const auth = store.state.auth ;
	//获取目标页面路由参数里的articleId
	const articleId = to.params.articleId ;
	// 当前用户
	const user = store.state.user && store.state.user.name ;
	// 路由参数中的用户
	const paramUser = to.params.user ;
	
	app.$message.hide();
	
	if ((auth && to.path.indexOf("/auth/") !== -1)
		||(!auth && to.meta.auth)
		||(articleId && !store.getters.getArticleById(articleId)) 
		||(paramUser && paramUser !== user && !store.getters.getArticlesByUid(null, paramUser).length) 
		) {
		// 如果当前用户已登录，且目标路由包含 /auth/ ，就跳转到首页
		//(!auth && to.meta.auth) 的判断，当用户没登录且目标页面要求登录时，跳转到首页。
		// 有 articleId 且不能找到与其对应的文章时，跳转到首页
		// 路由参数中的用户不为当前用户，且找不到与其对应的文章时，跳转到首页
		next("/");
	} else {
		next();
	}
});

// 注册全局后置钩子
router.afterEach((to, from) => {
	const app = router.app ;
	const store = app.$options.store ;
	// 获取目标页面路由参数里的 showMsg
	const showMsg = to.params.showMsg ;
	
	if (showMsg) {
		// showMsg 是一个字符时，使用它作为消息内容
		if (typeof showMsg === "string") {
			// 显示消息提示
			app.$message.show(showMsg);
		} else {
			// 显示操作成功
			app.$message.show("操作成功");
		}
	}
});

export default router