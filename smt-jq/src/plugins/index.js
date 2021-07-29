class SmtJq {
  constructor(opt) {
    this.init(opt)
    this.render()
  }

  extend(o, n, override) {
    for (var key in n) {
      if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
        o[key] = n[key];
      }
    }
    return o;
  }

  init(opt) {
    let {className}=opt
    let def = {
      dom: document.querySelector(className),
      option: {
        title: {
          text: '第一个 ECharts 实例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
    };
    this.def = this.extend(def, opt, true); //配置参数
    this.dom = this.def.dom
    this.option = this.def.option
    this.chart = echarts.init(this.dom)
  }

  render() {
    this.chart.setOption(this.option);
  }
}

export default SmtJq

