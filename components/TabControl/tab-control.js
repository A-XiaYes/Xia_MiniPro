// components/TabControl/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value() {
        return []
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTabItem(event) {
      let index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })

      /* 发送信息给父组件 */
      this.triggerEvent('switchTabItem', {index, title: this.properties.title[index]})
    }
  }
})
