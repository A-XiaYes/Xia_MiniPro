// components/head/head.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '头部'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: 'Xiawq',
    age: 18,
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    increment() {
      this.triggerEvent('increment', {name: this.data.name, age: this.data.age})
    },
    headCounterIncrement(num) {
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})
