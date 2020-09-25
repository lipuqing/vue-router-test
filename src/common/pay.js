import Vue from 'vue'
import pay from '@/components/pay_model/model.vue'

const payBox = Vue.extend(pay)


pay.install = function (data) {
  let instance = new payBox({
    data
  }).$mount()

  document.body.appendChild(instance.$el)

  Vue.nextTick((e) => {
    instance.show = true
    // show 和弹窗组件里的show对应，用于控制显隐
  })
}

export default pay