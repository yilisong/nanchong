function menuClick(e){
    var lis = e.parentNode.childNodes
    lis.forEach((item) => {
      item.className = ""
    })
    e.className = "menuActive"
  }