import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

Vue.prototype.$jump = function (data) {
  //   根据自己的 路由模式 稍加修改   
  const sfg = app.$router
  // hash 模式
  sfg.beforeEach((to, from, next) => {
    if (to.path == "/" && to.query.type == 2) { // 满足某跳转 自定义跳转
      let url = window.location.origin + '/#' + '/pages/index/nologin'
      window.location.href = url
    } else
    if (to.path == "/") { //  模拟 登录没有满足条件
      console.log(to, from)
      let url = window.location.origin + '/#' + '/pages/index/log'
      window.location.href = url
    } else {
      next()
    }
  })
  // history 模式 
  // let url = window.location.origin  + '/pages/index/nologin'
}

Vue.prototype.$jump()