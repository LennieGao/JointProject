<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> 测试用 可删除-->
    <router-view/>
		<Banner>测试用 可删除</Banner>   
  </div>
</template>

<script>
	import ApiConfig from 'common/api/apiconfig.js'
	import Banner  from  'components/common/banner/banner'//测试用 可删除
export default {
  name: 'App',
	components:{Banner}   //测试用 可删除
}
</script>

<style  lang='less' scoped>
	@import '~common/style/index.less';
#app {
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;          测试用 可删除*/    
}
</style>


 
 
 