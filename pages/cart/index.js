
import F2 from '@antv/wx-f2';

let chart = null;

function initChart(canvas, width, height, F2) { // 使用 F2 绘制图表
  const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
    { year: '1959 年', sales: 38 },
    { year: '1960 年', sales: 38 },
    { year: '1962 年', sales: 38 },
  ];

  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });

  chart.source(data, {
    sales: {
      tickCount: 5
    }
  });

  chart.tooltip({
    showItemMarker: false,
    onShow(ev) {
      const { items } = ev;
      items[0].name = null;
      items[0].name = items[0].title;
      items[0].value = '¥ ' + items[0].value;
    }
  });

  chart.interval().position('year*sales');

  chart.render();
  
  return chart;
}

Page({
  data: {
    // 图表需要的数据
    opts: {
      onInit: initChart
    },

    courses: ['html', 'css', 'javascript'],
    msg: ''
  },

  mycallback (ev) {
    console.log('我是父组件自定义事件的回调函数...');
    // console.log(ev.detail);

    // 更新数据
    this.setData({
      msg: ev.detail
    })
  }
})