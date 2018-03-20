function menuClick(e){
    var lis = e.parentNode.childNodes
    if(e.innerText == '消防管理') {
      window.open("http://118.25.14.190:5500")
      return
    } 
    // 车辆管理
    if(e.innerText == '车辆管理') {
      window.open("http://172.19.13.142/CarsMng/index")
      return
    } 
    lis.forEach((item) => {
      item.className = ""
    })
    e.className = "menuActive"
  }