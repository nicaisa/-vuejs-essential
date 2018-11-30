import Vue from "vue"
import Vuex from "vuex"
import ls from '../utils/localStorage'
import router from '../router'

Vue.use(Vuex)

//共享的状态
const state = {
	// 用户信息，初始值从本地 localStorage 获取
	user: ls.getItem("user"),
	// 添加 auth 来保存当前用户的登录状态
	auth: ls.getItem('auth')
}

//更改状态的方法
const mutations = {
	//UPDATE_USER 是事件类型名
	//参数 state 是当前仓库的 state，user 是用户传入的参数
	UPDATE_USER(state,user) {
		// 改变 user 的值
		state.user = user ;
		 // 将改变后的值存入 localStorage
		ls.setItem("user",user);
	},
	// 添加 UPDATE_AUTH 来更改当前用户的登录状态
	UPDATE_AUTH(state, auth) {
		state.auth = auth
		ls.setItem('auth', auth)
	}
}

const actions = {
	//{commit}是context.commit（提交一个事件类型）简写
	login({commit}, user) {
		// 登录时有传用户信息，就更新下用户信息
		if (user) commit('UPDATE_USER', user)
		// 更新当前用户的登录状态为已登录
		commit('UPDATE_AUTH', true)
		// 跳转到首页
		router.push("/")
	},
	logout({ commit }) {
		commit('UPDATE_AUTH', false)
		router.push({ name: 'Home', params: { logout: true } })
	}
}

const store = new Vuex.Store({
	state,
	mutations,
	actions,
})

export default store