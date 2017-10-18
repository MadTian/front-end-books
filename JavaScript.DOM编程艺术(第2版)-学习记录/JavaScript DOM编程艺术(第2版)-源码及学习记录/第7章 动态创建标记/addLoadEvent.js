// 共享onload事件
function addLoadEvent(func){
  // 把现有的window.onload事件处理函数的值存入变量oldonload
  var oldonload = window.onload;
  if(typeof window.onload != 'function') {
    // 如果在这个处理函数上还未绑定任何函数，就像平时那样把新函数添加个它
    window.onload = func;
  } else {
    // 如果在这个处理函数上已经绑定了一些函数，就把新函数追加到现有指令的末尾
    window.onload = function(){
      oldonload();
      func();
    }
  }
}

    