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

 //insertAfter函数编写
 function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode;
  if(parent.lastChild == targetElement){
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
 }

 function preparePlaceholder(){
  debugger
  if(!document.createElement) return false;
  if(!document.createTextNode) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false;
  var placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", "images/placeholder.gif");
  placeholder.setAttribute("alt", "my image gallery");

  var description = document.createElement("p");
  description.setAttribute("id", "description");
  var destext = document.createTextNode("Choose an image");
  description.appendChild(destext);

  var gallery = document.getElementById("imagegallery");
  insertAfter(placeholder,gallery);
  insertAfter(description,placeholder);
 }

function prepareGallery(){
  debugger;
  if(!document.getElemengtsByTagName) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  // console.log(links);
  for(var i=0; i<links.length; i++){
    links[i].onclick=function(){
      debugger;
      return showPic(this);
    }
    links[i].onkeypress = links[i].onclick;
  }
}
function showPic(whichpic){
  if(!document.getElementById("placeholder")) return false;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  if(!document.getElementById("description")) return false;
  if(whichpic.getAttribute("title")){
    var text = whichpic.getAttribute("title");
  } else {
    var text = "";
  }
  var description = document.getElementById("description");
  if(description.firstChild.nodeType == 3){
    description.firstChild.nodeValue = text;
  }
  return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);