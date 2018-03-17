var canvas;
var stage;
function init () {
  canvas = document.querySelector('#canvas');
//创建舞台
  stage = new createjs.Stage(canvas);
//创建一个Shape对象，此处也可以创建文字Text,创建图片Bitmap
//刷新舞台
  drawValue()
  drawAxis()
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
      label: '0-9',
      value: 1,
      man: 1,
      woman: 1,
      color: "#002AFF",
      colorA: "rgba(0, 42, 255, 1)"
    },
    {
      label: '10-19',
      value: 2,
      man: 1,
      woman: 1,
      color: '#2b72f7',
      colorA: 'rgba(43, 114, 247, 1)'
    },
    {
      label: '20-29',
      value: 5,
      man: 3,
      woman: 2,
      color: "#68e5fa",
      colorA: "rgba(104, 229, 250, 1)"
    },
    {
      label: '30-39',
      value: 6,
      man: 3,
      woman: 3,
      color: "#36bfae",
      colorA: "rgba(54, 191, 174, 1)"
    },
    {
      label: '40-49',
      value: 7,
      man: 5,
      woman: 2,
      color: "#66ffcc",
      colorA: "rgba(102, 255, 204, 1)"
    },
    {
      label: '50-59',
      value: 8,
      man: 6,
      woman: 3,
      color: "#3cf45b",
      colorA: "rgba(60, 244, 91, 1)"
    },
    {
      label: '60-69',
      value: 7,
      man: 4,
      woman: 3,
      color: "#2db34f",
      colorA: "rgba(45, 179, 79, 1)"
    },
    {
      label: '70-79',
      value: 8,
      man: 4,
      woman: 4,
      color: "#c0ff2d",
      colorA: "rgba(192, 255, 45, 1)"
    },
    {
      label: '80-89',
      value: 9,
      man: 5,
      woman: 4,
      color: "#f7fa46",
      colorA: "rgba(247, 250, 70, 1)"
    },
    {
      label: '90以上',
      value: 10,
      man: 6,
      woman: 4,
      color: "#edd727",
      colorA: "rgba(237, 215, 39, 1)"
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
    var gutter = -2
    var manPercent = data[i].man / manMax
    var womanPercent = data[i].woman / womanMax
    var wholeLen = valContainer.width* 3 / 5 - valContainer.width * 2 / 5
    var womanOffset = womanPercent * wholeLen / 2
    var manOffset = manPercent * wholeLen / 2
    var line = new createjs.Shape()
    line.graphics.setStrokeStyle(barWidth, 2, 2).beginLinearGradientStroke([data[i].colorA, data[i].color], [0, 1], valContainer.width * 2 / 5 + manOffset, 0, valContainer.width* 3 / 5, 0)
      .moveTo(valContainer.width * 2 / 5 + manOffset, valContainer.height - 55 - i*barWidth + i*gutter ).lineTo(valContainer.width* 3 / 5 , valContainer.height - 55 - i*barWidth+ i*gutter).closePath()
    var line1 = new createjs.Shape()
    line1.graphics.setStrokeStyle(barWidth, 2, 2).beginLinearGradientStroke([data[i].color, data[i].colorA], [0, 1], valContainer.width * 3 / 5, 0, valContainer.width* 4 / 5 - womanOffset, 0)
      .moveTo(valContainer.width * 3 / 5, valContainer.height - 55 - i*barWidth  + i*gutter).lineTo(valContainer.width* 4 / 5 - womanOffset, valContainer.height - 55 - i*barWidth + i*gutter ).closePath()
    var value = new createjs.Text(data[i].label, '10px Arial', '#ccc')
    value.x = valContainer.width * 1 / 5
    value.y = valContainer.height - 55 - i*barWidth  - 5  + i*gutter

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