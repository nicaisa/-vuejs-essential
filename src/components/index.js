import Vue from 'vue'
//消息组件
import Message from './Message'
import Modal from './Modal'
//分页组件
import Pagination from './Pagination'
//轮播组件（引入 Slider.vue 的默认值）
import Slider from './Slider'

//注册全局组件需要使用 Vue.component.第一个参数 'Message' 是组件名称，第二个参数 Message 是一个对象或者函数，我们这里是一个对象。
//Vue.component('Message', Message)

const components = {
  Message,
  Modal,
  Pagination,
  Slider,
};

for (const [key, value] of Object.entries(components)) {
	Vue.component(key, value);
}