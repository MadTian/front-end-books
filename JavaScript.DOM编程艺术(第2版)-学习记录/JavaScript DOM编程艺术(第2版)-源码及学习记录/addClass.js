// addLoadEvent函数封装
function addLoadEvent(func){
  var oldonload=window.onload;
  if (typeof window.onload != 'function'){
    window.onload = func;
  } else {
    window.onload = function(){
      oldonload();
      func();
    }
  }
}

// addClass()函数封装
function addClass(element,value){
  if(!element.className){
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName += "";
    newClassName += value;
    element.className = newClassName;
  }
}

// addLoadEvent(addClass);