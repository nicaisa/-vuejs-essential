<template>
	<!-- 分页组件 -->
	<ul v-if="totalPage > 1" class="pagination">
		<li :class="{ disabled: internalCurrentPage === 1}">
			<a href="javascript:;" @click="changePage(internalCurrentPage - 1)">&#60;&#60;</a>
		</li>
		<li v-for="n in totalPage" :class="{ active: internalCurrentPage === n }">
		  <a href="javascript:;" @click="changePage(n)">{{ n }}</a>
		</li>
		<li :class="{ disabled: internalCurrentPage === totalPage }">
			<a href="javascript:;" @click="changePage(internalCurrentPage + 1)">&#62;&#62;</a>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'Pagination',
		props: {
			// 当前页
			currentPage: {
				type: Number,
				default: 1
			},
			// 数据总数
			total: {
				type: Number,
				//通过配置 required: true，我们指定当前 prop 为必须传入的数据：
				required: true
			},
			// 每页条数
			pageSize: {
				type: Number,
				default: 5,
				//通过配置 validator，我们可以自定义验证函数来验证 prop，其参数是 prop 的值
				// 每页条数应该大于 0
				validator: value => value > 0
			},
			// 当前页改变后的回调
			onPageChange: {
				type: Function, 
				default: () => {}
			}
		},
		data() {
			return {
				// 组件内的当前页
				internalCurrentPage: 1
			};
		},
		computed: {
			// 总页数
			totalPage() {
				return Math.ceil(this.total / this.pageSize)
			}
		},
		watch: {
			currentPage: {
				//immediate值为 true，将立即以表达式 currentPage 的当前值触发回调 handler;
				immediate: true,
				//回调，参数别名 page 作为表达式的当前值，回调可以有第二个参数，作为表达式的旧值;
				handler(page) {
					// 更新组件内的当前页，为父组件上currentPage 的当前值
					this.internalCurrentPage = page;
				}
			}
		},
		methods: {
			changePage(page) {
				if (page === this.internalCurrentPage || page < 1 || page > this.totalPage) {
					return;
				}
				 // 点击的不是当前页时，触发 onPageChange 回调
				 this.onPageChange(page);
			}
		}
	}
</script>

<style scoped>

</style>
