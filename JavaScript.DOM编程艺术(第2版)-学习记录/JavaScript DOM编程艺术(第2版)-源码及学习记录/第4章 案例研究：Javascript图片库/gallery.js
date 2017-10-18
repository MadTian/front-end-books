window.onload=function(){

  var a = document.getElementsByTagName("a");
  var placeholder = document.getElementById("placeholder");
  var oP = document.getElementsByTagName("p")[0];

  for(var i=0; i<a.length;i++){
    a[i].onclick = function(){
            
    var source = this.getAttribute("href");
    placeholder.setAttribute("src", source);

    var text = this.getAttribute("title");
    // oP.innerHTML = text;
    oP.firstChild.nodeValue = text;
    return false; //阻止链接a被点击的默认行为
    };

  };

}        
  

