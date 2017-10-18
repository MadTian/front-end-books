$(document).ready(function(){
    // 默认样式：从第7条开始隐藏后面的品牌（除最后一条'其他品牌相机'外）
    var $category = $("ul li:gt(5):not(:last)");
    $category.hide();


    // 单击"显示全部品牌"执行以下操作
    
    //获取按钮，并给其添加事件
    var $toggleBtn = $("div.showmore > a");

    $toggleBtn.click(function(event) {

      if($category.is(":visible")){
        $category.hide();  //隐藏部分品牌
      
        // "精简显示品牌"文本切换成"显示全部品牌"
        // 按钮的背景图片换成向下的图片
        $(this).find("span")
            // 注意：图片的路径~~此处添加的是行间样式
            .css("background", "url(img/down.gif) 0 0 no-repeat")
            .text("显示全部品牌");  //这里使用了链式操作

        // 高亮推荐品牌
        $("ul li").removeClass("promoted");  //添加高亮样式

      } else {

        $category.show();  //显示全部品牌
      
        // "显示全部品牌"文本切换成"精简显示品牌"
        // 按钮的背景图片换成向上的图片
        $(this).find("span")
            // 注意：图片的路径~~此处添加的是行间样式
            .css("background", "url(img/up.gif) 0 0 no-repeat")
            .text("精简显示品牌");  //这里使用了链式操作

        // 高亮推荐品牌
        $("ul li")
          // filter()删选出与指定表达式匹配的元素集合
          .filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")  //删选出符合要求的品牌
          .addClass("promoted");  //添加高亮样式

      }

      return false;  //超链接不跳转
    });
    
    // toggle()方法 --???不可行 无法阻止a的默认操作
    /*$category.toggle(function() {
      
      $(this).show();  //显示全部品牌
      
      // "显示全部品牌"文本切换成"精简显示品牌"
      // 按钮的背景图片换成向上的图片
      $(this).find("span")
          // 注意：图片的路径~~此处添加的是行间样式
          .css("background", "url(img/up.gif) 0 0 no-repeat")
          .text("精简显示品牌");  //这里使用了链式操作

      // 高亮推荐品牌
      $("ul li")
        // filter()删选出与指定表达式匹配的元素集合
        .filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")  //删选出符合要求的品牌
        .addClass("promoted");  //添加高亮样式

    }, function() {
      $(this).hide();  //隐藏部分品牌
      
      // "精简显示品牌"文本切换成"显示全部品牌"
      // 按钮的背景图片换成向下的图片
      $(this).find("span")
          // 注意：图片的路径~~此处添加的是行间样式
          .css("background", "url(img/down.gif) 0 0 no-repeat")
          .text("显示全部品牌");  //这里使用了链式操作

      // 高亮推荐品牌
      $("ul li").removeClass("promoted");  //添加高亮样式

    });*/
    
});