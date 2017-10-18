// addLoadEvent函数封装
function addLoadEvent(func){
  var oldonload = window.onload;
  if(typeof window.onload != "function"){
    window.onload = func;
  } else {
    window.onload = function(){
      oldonload();
      func();
    }
  }
}

// 缩略语列表创建
var abbreviations = document.getElementsByTagName('abbr');
var defs = [];
function displayAbbreviations(){
  if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  // 遍历所有缩略词
  if(abbreviations.length<1) return false;
  for(var i=0;i<abbreviations.length;i++){
    var currentAbbr = abbreviations[i];
    var key = currentAbbr.lastChild.nodeValue;
    // var definition = currentAbbr.getAttribute("title");
    var definition = currentAbbr.title;
    // alert(definition);
    defs[key] = definition;
  }
  // 缩略语之定义列表
  var dlist = document.createElement("dl");
  // 遍历定义
  for(key in defs){
    var definition = defs[key];
    // 创建定义标题--dt
    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);
    // 创建定义描述--dd
    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);

    // dt dd追加到dlist
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }
  // 创建标题
  var header = document.createElement("h2");
  var header_text = document.createTextNode("Abbreviations");
  // 标题追加到页面主体
  header.appendChild(header_text);

  // 把定义列表添加到页面主体
  document.body.appendChild(header);
  document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);


