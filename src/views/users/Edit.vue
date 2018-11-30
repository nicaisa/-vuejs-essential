<template>
	<div class="users-show">
		<div class="col-md-3 main-col">
			<div class="box">
				<div class="padding-md">
					<div class="list-group text-center">
						<!-- 因为只支持单用户，所以我们指定 path 中用户的 ID 为 1。 -->
						<router-link v-for="link in links" :keys="link.name" :to="`/users/1/${link.name}`" class="list-group-item">
							 <i :class="`text-md fa fa-${link.icon}`"></i>
							 {{ link.title }}
						</router-link>
					</div>
				</div>
			</div>
		</div>
		
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'UsersEdit',
		data() {
			return {
				 links: [
					{
						name: 'edit',
						title: '个人信息',
						icon: 'list-alt',
					},
					{
						name: 'edit_avatar',
						title: '修改头像',
						icon: 'picture-o',
					},
					{
						name: 'edit_password',
						title: '修改密码',
						icon: 'lock',
					},
					
				 ]
			};
		}
	}
</script>

<style>

</style>
