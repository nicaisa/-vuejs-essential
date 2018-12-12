import Vue from 'vue'
import validator from './validator'
import dropdown from './dropdown'
import title from './title'

//Vue.directive('validator', validator)

const directives = {
  validator,
  dropdown,
  // 添加 title 以便在循环中进行注册
  title
}

for (const [key, value] of Object.entries(directives)) {
  Vue.directive(key, value)
}