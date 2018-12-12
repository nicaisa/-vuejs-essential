<template>
	<div v-show="show" :class="`alert alert-${type} alert-dismissible`">
		<button @click="close" type="button" class="close"><span>×</span></button>
		{{ msg }}
	</div>
</template>

<script>
	export default {
		name: "Message",
		data() {
			return {
				//msg: '', // 消息
				//msgType: '', // 消息类型
				//msgShow: false // 是否显示消息，默认不显示
			};
		},
		props: {
			//是否显示消息框
			show: {
			  type: Boolean,
			  default: false
			},
			//消息框的类型
			type: {
				type: String,
				default: "success"
			},
			//消息
			msg: {
				type: String,
				default: ""
			}
		},
		watch: {
			show(value) {
			  if (value) {
				this.$nextTick(() => {
				  this.$el.scrollIntoView(true)
				})
			  }
			}
		},
		methods: {
			close() {
				// $emit用于触发当前实例上的事件
				// 可以触发一个事件来更新 show
                this.$emit("update:show",false);
			},
			/* showMsg(msg, type = "warning") {
				this.msg = msg;
				this.msgType = type;
				this.msgShow = false;
				
				this.$nextTick(() => {
					this.msgShow = true;
				})
			} */
		},
	}
</script>

<style scoped> 

</style>
