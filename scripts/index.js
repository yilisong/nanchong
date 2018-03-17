var myChart = echarts.init(document.getElementById('main'));
var specialmen = echarts.init(document.getElementById('specialmen'))
// 指定图表的配置项和数据
function barMethod(dom, data) {
  var option = {
    tooltip: {},
    grid: {
      show: true,
      top: 15,
      left: '8%',
      right: '7%',
      bottom: '30%',
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

// 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);
// specialmen.setOption(option);
// 小区总数
var myChartCount = {
  xAxis: ['火花街道', '都尉街道', '凤垭街道', '文峰街道', '西兴街道', '南湖街道'],
  title: '街道',
  data: [12532, 1, 1, 1, 1, 9149]
}
// 特殊人群
var specialmenList = {
  xAxis: ['重性精神病人', '涉毒人员', '刑释解教人员', '涉稳人员', '独居老人'],
  title: '特殊人群',
  data: [0, 3, 4, 29, 11]
}
barMethod(myChart, myChartCount)
barMethod(specialmen, specialmenList)

var bars1 = echarts.init(document.getElementById('bars1'));
var bars2 = echarts.init(document.getElementById('bars2'));
var bars3 = echarts.init(document.getElementById('bars3'));
// 指定图表的配置项和数据
function optionbarsMethods(dom, data) {
  var optionbars = {
      color: ['rgb(91, 236, 193)', 'rgb(0, 186, 255)', 'rgb(57, 68, 215)'],
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
  legend: ['封闭式', '开放式', '混合式'],
  title: '小区类型',
  data: [
    {value:0, name:'封闭式'},
    {value:44, name:'开放式'},
    {value:1, name:'混合式'}
  ]
}
//房屋数据
var houseStyle = {
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
  legend: ['本地', '外地', '其它'],
  title: '车辆数据',
  data: [
    {value: 80, name:'本地'},
    {value: 3, name:'外地'},
    {value: 5, name:'其它'}
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
  dom.setOption(optionLine)
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
  color: ['rgb(58, 76, 217)','rgb(0, 183, 252)','rgb(91, 236, 193)'],
  title: {
    textStyle: {
      fontSize: 13,
      color: '#fff'          // 主标题文字颜色
    },
    text: '人口信息',
    x:'left'
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'right',
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
  series : [
    {
      name: '人口',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
        {value:335, name:'户籍人口'},
        {value:32, name:'境外人口'},
        {value:234, name:'流动人口'}
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
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
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