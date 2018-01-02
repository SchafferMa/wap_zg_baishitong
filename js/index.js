    $(function(){
      $(".p3-enter li").click(function(){
          $(".p3-content").hide();
          $(".p3-enter li").removeClass("color")
          $(".p3-content").eq($(this).index()).show()
          $(this).addClass("color")
      });
	  $('.p2-tab').find('div').click(function(){
			var index = $(this).index();
			$(this).addClass('p2-active').siblings().removeClass('p2-active');
			$('.p2-content').find('p').eq(index).show().siblings().hide();
		});
    })