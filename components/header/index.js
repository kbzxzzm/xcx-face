// components/header/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    a: {
      // 用来限定属性值的类型
      type: Number,
      // 默认值
      value: 0
    },

    b: {
      type: String,
      value: ''
    },

    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg: '哈哈，我是组件内自定义的数据!'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeData () {
      console.log('自定义组件中定义的事件回调!');
      // 更新初始数据
      this.setData({
        msg: 'Hello!'
      })
    },

    emitParent () {
      // 在些将父组件的自定义事件触发
      this.triggerEvent('myevent', this.data.msg);
    }
  }
})
