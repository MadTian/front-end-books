
$(document).ready(function(){
    // 基本效果分析
    $("span.next").click(function(event) {  //绑定click事件
      var $parent = $(this).parents("div.v_show");  //根据当前点击的元素获取到祖先元素
      var $v_list = $parent.find("div.v_content_list");  //找到"视频内容展示区域"
      var $v_content = $parent.find(div.v_content);  //找到"视频内容展示区域"的外围

      var v_width = $v_content.width();  //获取区域内容的宽度，带单位
      if(当动画到最后一版面) {
        $v_list.animate({ left: '0px'}, "normal");  //通过改变left值，跳转到第1版面
      } else {
        $v_list.animate({ left: '-='+v_width }, "normal");  //改变left值，达到每次换一个页面
      }
    });
});