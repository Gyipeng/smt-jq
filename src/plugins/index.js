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
    let {className,keys}=opt
    let def = {
      dom: document.querySelector(className),
      option: {},
    };
    this.def = this.extend(def, opt, true); //配置参数
    this.dom = this.def.dom
    this.option =this.getOption(this.def.option,keys)
    this.chart = echarts.init(this.dom)
  }

  getOption(option, keys) {
    let NewOption = {
      title: {
        text: keys
      },
      series: [{
        name: '农产品',
        type: 'pie',
        radius: '50%',
        data: option.data
      }]
    }
    return NewOption
  }

  render() {
    this.chart.setOption(this.option);
  }
}

export default SmtJq

