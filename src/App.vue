<template>
 <!-- <div id="app">
    <img src="./assets/logo.png">
    <h1>Welcome to VuejsCaff.com</h1>
  </div> -->
	<!-- <div class="container">
    <div class="jumbotron">
      <div class="container">
        <h1>Welcome from Bootstrap</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><a class="btn btn-primary btn-lg" href="http://www.bootcss.com/" role="button" target="_blank">Learn more <span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span></a></p>
      </div>
    </div>
		<div class="jumbotron">
			<div class="container">
				<h1>Welcome from Font Awesome</h1>
        <p>Get vector icons and social logos on your website with Font Awesome, the web’s most popular icon set and toolkit.</p>
        <p>
          <i class="fa fa-camera"></i>
          <i class="fa fa-camera fa-2x"></i>
          <i class="fa fa-camera fa-3x"></i>
          <i class="fa fa-camera fa-4x"></i>
          <i class="fa fa-camera fa-5x"></i>
          <i class="fa fa-spinner fa-spin"></i>
        </p>
			</div>
		</div>
  </div> -->
	<div id="wrap">
    <!-- <TheHeader/> -->
		<the-header></the-header>
		<div id="main-container" class="container main-container">
		<!-- 	<router-view></router-view> -->
			<router-view/>
		</div>
		<TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'
// 引入 TheFooter.vue 的默认值
import TheFooter from '@/components/layouts/TheFooter'
export default {
  name: 'App',
	components: {
		TheHeader,
		 // 注册 TheFooter
    TheFooter
	}
}
</script>

<style lang="scss">
$container-large-desktop: 1200px;
$btn-primary-bg: #00b5ad;
$btn-primary-border: #00b5ad;
$label-primary-bg: #00b5ad;
$pagination-active-bg: #00b5ad;
$pagination-active-border: #00b5ad;
$pagination-color: #00b5ad;
$input-border-focus: #00b5ad;
$link-color: #12c4c5;
$link-hover-color: #22ddde;
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
$fa-font-path: "~font-awesome/fonts/";

@import "~bootstrap-sass/assets/stylesheets/_bootstrap";
@import "~font-awesome/scss/font-awesome";
@import "./styles/main";
@import "./styles/extra";
</style>
