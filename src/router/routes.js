export default [
	{
		path: '/auth/register',
		name: 'Register',
		component: () => import("@/views/auth/Register"),
	},
	//首页路由配置
	{
		path: "/",
		name: "Home",
		//alias 选项用来指定别名，它可以是一个字符串或者数组。
		//我们指定别名为 '/topics' 后，那么来自该路径的访问实际上就是对首页的访问。
		alias: "/topics",
		component:() => import("@/views/Home")
	},
	// 其他未配置的路由都跳转到首页
	{
		path: '*',
		// 重定向
		redirect: '/'
	},
	{
		path: '/auth/login',
		name: 'Login',
		component: () => import('@/views/auth/Login')
	},
	// 编辑资料路由
	 // EditUsers
	 //因为只支持单用户，所以我们指定 path 中用户的 ID 为 1。
	{
		path: '/users/1/edit',
		name: 'EditUsers',
		component: () => import('@/views/users/Edit.vue'),
		//父级添加 children 选项以指定子路由的配置；
		children: [
			{
				//注：如果当前路由含有默认子路由，则不需要为当前路由指定 name，要导航到当前路由，
				//可以使用默认子路由的 name，如 router.push({ name: 'EditProfile' })。
				//子路由的 path 为空值 ''，表示该页面作为默认子路由，在导航到父级路由（/users/1/edit）时，就开始加载；
				path: '',
				name: 'EditProfile',
				component: () => import('@/views/users/Profile.vue'),
				//使用 meta 选项配置路由的元信息，其值可以是任意类型的数据，我们可以从路由对象中访问该值，如 to.meta.auth；
				 // auth 为 true，标识当前路由需要登录才能访问
				meta: { auth: true }
			},
			{
				path: "/users/1/edit_avatar",
				name: "EditAvatar",
				component:() => import("@/views/users/Avatar.vue"),
				meta: { auth: true }
			},
			{
				path: "/users/1/edit_password",
				name: "EditPassword",
				component:() => import("@/views/users/Password.vue"),
				meta: { auth: true }
			},
		]
	},
	{
		path: "/articles/create",
		name: "Create",
		component:() => import("@/views/articles/Create"),
		meta: { auth: true }
	},
	// Content
// 	{
// 		//路径中 :articleId 以冒号开头，代表的是该项参数是动态的，它能匹配任何值，比如 1、2、3 或者任何非数字字符。
// 		path: "/articles/:articleId/content",
// 		name: "Content",
// 		component:() => import("@/views/articles/Content.vue"),
// 		meta: { auth: true }
// 	},
	{
		path: "/articles/:articleId/edit",
		name: "Edit",
		component:() => import("@/views/articles/Create"),
		meta: { auth: true }
	},
	// Search
	//我们需要将 /search 这类路由配置放到 /:user 的前面，以使其具有更高的优先级，因为 /:user 是动态的，
	//它能够匹配到 /search 从而忽略其后面的配置。
	{
		path: "/search",
		name: "Search",
		component: () => import("@/views/Search"),
	},
	{
		path: "/:user",
		//name: "Column",
		component:() => import("@/views/articles/Column"),
		children: [
			{
				path: "",
				name: "Column",
				component: () => import('@/views/articles/List.vue'),
			},
			{
				path: "/articles/:articleId/content",
				name: "Content",
				component:() => import("@/views/articles/Content.vue"),
			}
		]
	},
]