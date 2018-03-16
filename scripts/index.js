var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

var bars1 = echarts.init(document.getElementById('bars1'));
var bars2 = echarts.init(document.getElementById('bars2'));
var bars3 = echarts.init(document.getElementById('bars3'));
// 指定图表的配置项和数据
var optionbars = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
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
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
bars1.setOption(optionbars);
bars2.setOption(optionbars);
bars3.setOption(optionbars);

var line1 = echarts.init(document.getElementById('line1'))
var line2 = echarts.init(document.getElementById('line2'))
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
          data: ['1月', '2月', '3月', '4月', '5月',
            '6月']
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
          data: [120, 132, 101, 134, 90, 230]
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
          data: [220, 182, 191, 234, 290, 330]
        },
      ],
      animationDuration: 2000,
      color: ['#03fdfc' , '#fff']
}
line1.setOption(optionLine);
line2.setOption(optionLine);