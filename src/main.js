// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入vue的源码
import App from './App'
//引入一个单文件组件
import './common/style/reset.css'
//vue中 没有 css   jpg  mp3
import Axios from './axios'
import router  from  './router' //引入路由配置
Vue.prototype.$axios=Axios  // 在vue原型上挂载axios对象
Vue.config.productionTip = false

//图片懒加载
// import LazyLoad from 'vue-lazyload'
// 
// Vue.use(LazyLoad, {
//   error: require('@/assets/logo.png'),  //错误的时候显示图片
//   loading: require('@/assets/logo.png'),  // 正在加载中的图片
//   attempt: 1  // 每次加载几张
// })
// 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,// 路由的注册
  template: '<App/>' //用这个<App></App>组件 替换#app这个元素
})
