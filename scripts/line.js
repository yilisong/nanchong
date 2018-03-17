var canvas;
var stage;
function init () {
  canvas = document.querySelector('#canvas');
//创建舞台
  stage = new createjs.Stage(canvas);
//创建一个Shape对象，此处也可以创建文字Text,创建图片Bitmap
//刷新舞台
  drawAxis()
  drawValue()
  stage.update();
}

function drawAxis() {
  var axisContainer = new createjs.Container();
  axisContainer.width = canvas.width
  axisContainer.height = canvas.height
  var line = new createjs.Shape()
  line.graphics.setStrokeStyle(1, 1, 2).beginLinearGradientStroke(['#FFFFFF', '#FFFFFF'], [0, 1], 0, -15, 0, -213)
    .moveTo(axisContainer.width * 3 / 5, 0).lineTo(axisContainer.width * 3 / 5, axisContainer.height - 50).closePath()
  var yline = new createjs.Shape()
  yline.graphics.setStrokeStyle(1, 1, 2).beginLinearGradientStroke(['#FFFFFF', '#FFFFFF'], [0, 1], 0, -15, 0, -213)
    .moveTo(axisContainer.width * 2 / 5, axisContainer.height - 50).lineTo(axisContainer.width* 4 / 5 , axisContainer.height - 50).closePath()
  axisContainer.addChild(line, yline)
  axisContainer.name = "axis"
  stage.addChild(axisContainer)
}

function drawValue () {
  var valContainer = new createjs.Container();
  valContainer.width = canvas.width
  valContainer.height = canvas.height
  var data = [
    {
      label: '0-4',
      value: 1,
      man: 1,
      woman: 1,
      color: "#52DDBE",
      colorA: "rgba(82, 221, 190, 0.7)"
    },
    {
      label: '5-9',
      value: 2,
      man: 1,
      woman: 1,
      color: "#16BAE1",
      colorA: "rgba(22, 186, 225, 0.7)"
    },
    {
      label: '10-14',
      value: 5,
      man: 3,
      woman: 2,
      color: "#6A76F6",
      colorA: "rgba(106, 118, 246, 0.7)"
    },
    {
      label: '15-19',
      value: 6,
      man: 3,
      woman: 3,
      color: "#8991D1",
      colorA: "rgba(137, 145, 209, 0.7)"
    },
    {
      label: '20-24',
      value: 7,
      man: 5,
      woman: 2,
      color: "#0060FF",
      colorA: "rgba(0, 96, 225, 0.7)"
    },
    {
      label: '25-29',
      value: 8,
      man: 6,
      woman: 3,
      color: "#975CCD",
      colorA: "rgba(151, 96, 205, 0.7)"
    },
    {
      label: '30-34',
      value: 7,
      man: 4,
      woman: 3,
      color: "#00ADFF",
      colorA: "rgba(0, 137, 225, 0.7)"
    },
    {
      label: '35-39',
      value: 8,
      man: 4,
      woman: 4,
      color: "#F9F167",
      colorA: "rgba(249, 201, 103, 0.7)"
    },
    {
      label: '40-44',
      value: 9,
      man: 5,
      woman: 4,
      color: "#915AC7",
      colorA: "rgba(145, 90, 199, 0.7)"
    },
    {
      label: '45-49',
      value: 10,
      man: 6,
      woman: 4,
      color: "#D53A35",
      colorA: "rgba(213, 58, 53, 0.7)"
    }
  ]
  var barWidth = 8
  var max = 0;
  var manMax = 0;
  var womanMax = 0;
  data.forEach(function (t) {
    if (t.value > max) {
      max = t.value
    }
    if (t.man > manMax) {
      manMax = t.man
    }
    if (t.woman > womanMax) {
      womanMax = t.woman
    }
  })

  for(var i = 0; i< data.length; i++){
    var manPercent = data[i].man / manMax
    var womanPercent = data[i].woman / womanMax
    var wholeLen = valContainer.width* 3 / 5 - valContainer.width * 2 / 5
    var womanOffset = womanPercent * wholeLen / 2
    var manOffset = manPercent * wholeLen / 2
    var line = new createjs.Shape()
    line.graphics.setStrokeStyle(barWidth, 2, 2).beginLinearGradientStroke([data[i].colorA, data[i].color], [0, 1], valContainer.width * 2 / 5 + manOffset, 0, valContainer.width* 3 / 5, 0)
      .moveTo(valContainer.width * 2 / 5 + manOffset, valContainer.height - 55 - i*barWidth ).lineTo(valContainer.width* 3 / 5 , valContainer.height - 55 - i*barWidth).closePath()
    var line1 = new createjs.Shape()
    line1.graphics.setStrokeStyle(barWidth, 2, 2).beginLinearGradientStroke([data[i].color, data[i].colorA], [0, 1], valContainer.width * 3 / 5, 0, valContainer.width* 4 / 5 - womanOffset, 0)
      .moveTo(valContainer.width * 3 / 5, valContainer.height - 55 - i*barWidth ).lineTo(valContainer.width* 4 / 5 - womanOffset, valContainer.height - 55 - i*barWidth).closePath()
    var value = new createjs.Text(data[i].label, '10px Arial', '#ccc')
    value.x = valContainer.width * 1 / 5
    value.y = valContainer.height - 55 - i*barWidth  - 5

    var man = new createjs.Text("男", '12px Microsoft Yahei', '#FFFFFF')
    var woman = new createjs.Text("女", '12px Microsoft Yahei', '#FFFFFF')
    man.x = valContainer.width * 2 / 5
    man.y = 30
    woman.x = valContainer.width * 4 / 5
    woman.y = 30
    valContainer.addChild(line, value, line1, man, woman)

  }



  stage.addChild(valContainer)
}