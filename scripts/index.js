var myChart = echarts.init(document.getElementById('main'));
var specialmen = echarts.init(document.getElementById('specialmen'))
// 指定图表的配置项和数据
function barMethod(dom, data) {
  var option = {
    tooltip: {},
    grid: {
      show: true,
      top: 25,
      left: data.left,
      right: data.right,
      bottom: '35%',
      borderWidth: 0
    },
    xAxis: {
      splitLine:{show: false},
      type: "category",
      axisLabel: {
        interval: 0,
        rotate:-40,//-30度角倾斜显示
        textStyle: {
          color: '#fff'
        }
      },
      data: data.xAxis
    },
    yAxis: {
      splitLine:{
        show: true,
        lineStyle: {
          // 使用深浅的间隔色
          color: 'rgba(255, 255, 255, .1)'
        }
      },
      axisLabel: {
        rotate:-40,
        textStyle: {
          color: '#999'
        }
      }
    },
    series: [{
      name: data.title,
      type: 'bar',
      barMaxWidth: 10,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#0060FF'},
              {offset: 0.5, color: '#09B6F6'},
              {offset: 1, color: '#27F9BA'}
            ]
          )
        }
      },
      data: data.data
    }]
  };
  dom.setOption(option)
}
// 小区总数
var myChartCount = {
  xAxis: ['火花街道', '都尉街道', '凤垭街道', '文峰街道', '西兴街道', '南湖街道'],
  title: '街道',
  data: [23, 0, 0, 0, 0, 12],
  right: '9%',
  left: '15%'
}
// 特殊人群
barMethod(myChart, myChartCount)

var specialOption = {
  color: ['#002AFF', '#2b72f7', '#edd727', '#68e5fa', '#3cf45b'],
  grid: {
    show: true,
    top: 25,
    left: '22%',
    right: '5%',
    bottom: '35%',
    borderWidth: 0
  },
  xAxis: [
    {
      axisTick: {show: false},
      splitLine:{show: false},
      type: "category",
      axisLabel: {
        interval: 0,
        rotate:-40,//-30度角倾斜显示
        textStyle: {
          color: '#fff'
        }
      },
      data: ['重性精神病人', '涉毒人员', '刑释解教人员', '涉稳人员', '独居老人']
    }
  ],
  yAxis: [
    {
      splitLine:{
        show: true,
        lineStyle: {
          // 使用深浅的间隔色
          color: 'rgba(255, 255, 255, .1)'
        }
      },
      axisLabel: {
        rotate:-40,
        textStyle: {
          color: '#999'
        }
      },
      type: 'value'
    }
  ],
  series: [
    {
      name: '重性精神病人',
      type: 'bar',
      data: [0, 0, 0, 0, 0]
    },
    {
      name: '涉毒人员',
      type: 'bar',
      data: [0, 3, 0, 0, 0]
    },
    {
      name: '刑释解教人员',
      type: 'bar',
      data: [0, 0, 4, 0, 0]
    },
    {
      name: '涉稳人员',
      type: 'bar',
      data: [0, 0, 0, 29, 0]
    },
    {
      name: '独居老人',
      type: 'bar',
      data: [0, 0, , 0, 11]
    }
  ]
}
specialmen.setOption(specialOption)

var bars1 = echarts.init(document.getElementById('bars1'));
var bars2 = echarts.init(document.getElementById('bars2'));
var bars3 = echarts.init(document.getElementById('bars3'));
// 指定图表的配置项和数据
function optionbarsMethods(dom, data) {
  var optionbars = {
      color: data.color,
      tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}",
        position:function(p){   //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        }
      },
      legend: {
        itemWidth: 5,
        itemHeight: 5,
        itemGap: 5,
        orient: 'vertical',
        y: 'bottom',
        textStyle:{    //图例文字的样式
          color:'#fff',
          fontSize:10
        },
        data: data.legend
      },
      series: [
          {
              name: data.title,
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: false,
                      position: 'center',
                      formatter:'{b}\n{c}%'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '12',
                          fontWeight: 'bold'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data: data.data
          }
      ]
  };
  dom.setOption(optionbars)
}
// 使用刚指定的配置项和数据显示图表。
//小区类型数据
var residential = {
  color: ['rgb(246, 235, 40)', 'rgb(91, 236, 193)', 'rgb(57, 68, 215)'],
  legend: ['开放式', '封闭式', '混合式'],
  title: '小区类型',
  data: [
    {value:0, name:'开放式'},
    {value:34, name:'封闭式'},
    {value:1, name:'混合式'}
  ]
}
//房屋数据
var houseStyle = {
  color: ['rgb(246, 235, 40)', 'rgb(91, 236, 193)', 'rgb(57, 68, 215)'],
  legend: ['空闲', '出租', '自住'],
  title: '房屋数据',
  data: [
    {value: 21, name:'空闲'},
    {value: 1036, name:'出租'},
    {value: 6346, name:'自住'}
  ]
}
//车辆类型数据
var cars = {
  color: ['rgb(246, 235, 40)', 'rgb(91, 236, 193)', 'rgb(57, 68, 215)'],
  legend: ['本地', '外地', '其它'],
  title: '车辆数据',
  data: [
    {value: 3651, name:'本地'},
    {value: 300, name:'外地'},
    {value: 105, name:'其它'}
  ]
}
optionbarsMethods(bars1, residential)
optionbarsMethods(bars2, houseStyle)
optionbarsMethods(bars3, cars)

var line1 = echarts.init(document.getElementById('line1'))
var line2 = echarts.init(document.getElementById('line2'))
function lineMethods(dom, data) {
  var optionLine = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        },
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    grid: {
      show: true,
      top: 5,
      left: '5%',
      right: '7%',
      bottom: '11%',
      borderWidth: 0
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          color: 'rgba(255, 255, 255, .1)',
          margin: 5,
          interval: 0,
          // rotate: -30,//-30度角倾斜显示
          textStyle: {
            color: '#fff',
            fontSize:'8px',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color:'#fff',
            opacity: 0.1
          }
        },
        data: data.xAxis
      }
    ],
    yAxis: [
      {
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        type: 'value'
      }
    ],
    series: [
      {
        name: data.title,
        type: 'line',
        smooth: true,
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: '#00a2ff' // 0% 处的颜色
            }, {
              offset: 1, color: '#03fdfc' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
          width: 2,
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'rgba(7, 105, 160, 0.5)' // 0% 处的颜色
            }, {
              offset: 1, color: 'rgba(7, 105, 160, 0)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        },
        symbol: 'none',
        data: data.data
      }
    ],
    animationDuration: 2000,
    color: ['#03fdfc' , '#fff']
  }
  dom.setOption(optionLine, true)
}
// 房屋数量
var houseCount = {
  xAxis: ['17-10', '17-11', '17-12', '18-01', '18-02', '18-03'],
  title: '房屋数量',
  data: [682,	1356,	2890,	4765,	5790,	7403]
}
// 车辆总数
var residentialCount = {
  xAxis: ['17-10', '17-11', '17-12', '18-01', '18-02', '18-03'],
  title: '车辆总数',
  data: [77, 63, 88, 73, 81, 88]
}
lineMethods(line1, houseCount)
lineMethods(line2, residentialCount)
// 饼图
var ageChart = echarts.init(document.getElementById('memberChange'))

var optionBar = {
  color: ['rgb(246, 235, 40)', 'rgb(91, 236, 193)', 'rgb(57, 68, 215)'],
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    top: 5,
    // x: 'center',
    y: 'bottom',
    data: ['户籍人口','境外人口','流动人口'],
    itemWidth: 5,
    itemHeight: 5,
    itemGap: 5,
    orient: 'vertical',
    textStyle:{    //图例文字的样式
      color:'#fff',
      fontSize:12
    }
  },
  calculable: true,
  series : [
    {
      name: '人口',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
        {value:16798, name:'户籍人口'},
        {value:13, name:'境外人口'},
        {value:4952, name:'流动人口'}
      ],
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'inner',
            formatter: '{c} ({d}%)'
          },
          labelLine: {
            show: false
          }
        }
      }
    }
  ]
}
ageChart.setOption(optionBar)


$('.jiedao>div').click(function(){
  $(this).addClass('active').siblings().removeClass('active')
  $('#' + $(this).attr('name')).show().siblings().hide();
})


var menChange = echarts.init(document.getElementById('menChange'))
var menChangeLine = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          },
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      grid: {
        show: true,
        top: 5,
        left: '5%',
        right: '5%',
        bottom: '20%',
        borderWidth: 0
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            color: '#aaa',
            margin: 5
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color:'#fff',
              opacity: 0.1
            }
          },
          data: ['10月', '11月', '12月', '1月', '2月','3月']
        }
      ],
      yAxis: [
        {
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          type: 'value'
        }
      ],
      series: [
        {
          name: '进入',
          type: 'line',
          smooth: true,
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#00a2ff' // 0% 处的颜色
              }, {
                offset: 1, color: '#03fdfc' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            width: 2,
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(7, 105, 160, 0.5)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(7, 105, 160, 0)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          },
          symbol: 'none',
          data: [220, 182, 191, 234, 290, 330]
        },
        {
          name: '离开',
          type: 'line',
          smooth: true,
          lineStyle: {
            color: '#fff',
            width: 2,
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(255, 255, 255, 0.2)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(255, 255, 255, 0)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          },
          symbol: 'none',
          data: [120, 132, 101, 134, 90, 230]
        },
      ],
      animationDuration: 2000,
      color: ['#03fdfc' , '#fff']
}
menChange.setOption(menChangeLine);

var canvasChart = echarts.init(document.getElementById('canvas'))
var canvasOptions = {
  tooltip: {
    trigger: 'item',
    formatter:function(a){
      console.log(a)
      return (
        a['data']['name']+":"+a['data']['value']+"("+a['percent']*2+"%)"
      )
    },
    position: ['10%', '50%']
  },
  color: ["#0696ff","#7ed321","#ffc31a", "transparent"],
  startAngle: 180,
  series: [
    {
      name:'',
      type:'pie',
      radius: ['45%', '90%'],
      avoidLabelOverlap: false,
      startAngle: 180,
      center:["50%","70%"],
      //stillShowZeroSum:0,
      label: {

        normal: {
          position: 'inner',
          textStyle: {
            color: '#fff',
            fontSize: 12
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '12',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data:[
        {value:2025, name:'<16'},
        {value:15492, name:'16~60'},
        {value:4258, name:'>60'},
        {value:21775, name:'',tooltip:{formatter:function(a){return ""}}}
      ]
    }
  ]
}
canvasChart.setOption(canvasOptions)
window.setInterval(function(){
    line1.clear();
    line2.clear();
    menChange.clear();
    myChart.clear();
    specialmen.clear();
    ageChart.clear();
    bars1.clear();
    bars2.clear();
    bars3.clear();
    canvasChart.clear()
    canvasChart.setOption(canvasOptions)
    optionbarsMethods(bars1, residential)
    optionbarsMethods(bars2, houseStyle)
    optionbarsMethods(bars3, cars)
    ageChart.setOption(optionBar)
    barMethod(myChart, myChartCount)
    specialmen.setOption(specialOption)
    lineMethods(line1, houseCount)
    lineMethods(line2, residentialCount)
    menChange.setOption(menChangeLine);
  }, 3000);