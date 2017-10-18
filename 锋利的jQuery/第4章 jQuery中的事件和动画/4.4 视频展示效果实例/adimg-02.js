
$(document).ready(function(){
    // 完成版
    // 向右按钮的交互效果
    var page = 1;  //代表第几个版面
    var i = 4;
    $("span.next").click(function(event) {  //绑定click事件
      var $parent = $(this).parents("div.v_show");  //根据当前点击的元素获取到祖先元素
      var $v_list = $parent.find("div.v_content_list");  //找到"视频内容展示区域"
      var $v_content = $parent.find("div.v_content");  //找到"视频内容展示区域"的外围

      var v_width = $v_content.width();  //获取区域内容的宽度，带单位
      var len = $v_list.find("li").length;  //总的视频图片数
      var page_count = Math.ceil(len/i);  //只要不是整数,就往大的方向取最小的整数
      if( !$v_list.is(":animated")) {
        if(page == page_count) {  //如果跳转到了最后一个页面
        $v_list.animate({ left: '0px'} , "normal");  //通过改变left值，跳转到第1版面
        page = 1;
      } else {
        $v_list.animate({ left: '-='+v_width }, "normal");  //改变left值，达到每次换一个页面
        page++;
      }
      $parent.find('span').eq(page-1).addClass('current').siblings().removeClass('current');  //给指定的span元素添加current样式，然后去掉span元素的同辈元素上的current样式
      }
      
    });

    // 向左按钮的交互效果
    $("span.prev").click(function(event) {  //绑定click事件
      var $parent = $(this).parents("div.v_show");  //根据当前点击的元素获取到祖先元素
      var $v_list = $parent.find("div.v_content_list");  //找到"视频内容展示区域"
      var $v_content = $parent.find("div.v_content");  //找到"视频内容展示区域"的外围

      var v_width = $v_content.width();  //获取区域内容的宽度，带单位
      var len = $v_list.find("li").length;  //总的视频图片数
      var page_count = Math.ceil(len/i);  //只要不是整数,就往大的方向取最小的整数
      if( !$v_list.is(":animated")) {
        if(page == 1) {  //如果已经到第一个页面了，再向前必须跳转到最后一个版面
        $v_list.animate( { left: '-='+v_width*(page_count - 1) } , "normal");  //通过改变left值，跳转到第1版面
        page = page_count;
      } else {
        $v_list.animate({ left: '+='+v_width }, "normal");  //改变left值，达到每次换一个页面
        page--;
      }
      $parent.find('span').eq(page-1).addClass('current').siblings().removeClass('current');  //给指定的span元素添加current样式，然后去掉span元素的同辈元素上的current样式
      }
      
    });
});