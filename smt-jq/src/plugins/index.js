;(function (undefined) {
  "use strict"
  var _global;

  function extend(o, n, override) {
    for (var key in n) {
      if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
        o[key] = n[key];
      }
    }
    return o;
  }

  function SmtJq(opt) {
    this._init(opt);
  }

  SmtJq.prototype = {
    constructor: this,
    _init: function (opt) {
      // 默认参数
      var def = {
        dom: document.querySelector("#smt-jq"),
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

      this.def = extend(def, opt, true); //配置参数
      this.dom = this.def.dom
      this.option = this.def.option
      this.chart = echarts.init(this.dom)
    },
    render() {
      this.chart.setOption(this.option);
    }
  }

  _global = (function () {
    return this || (0, eval)('this');
  }());
  if (typeof module !== "undefined" && module.exports) {
    module.exports = SmtJq;
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return SmtJq;
    });
  } else {
    !('SmtJq' in _global) && (_global.SmtJq = SmtJq);
  }
}());
