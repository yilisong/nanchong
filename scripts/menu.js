function menuClick(e){
    var lis = e.parentNode.childNodes
    if(e.innerText == '消防管理') {
      window.open("http://118.25.14.190:5500")
      return
    } 
    lis.forEach((item) => {
      item.className = ""
    })
    e.className = "menuActive"
  }