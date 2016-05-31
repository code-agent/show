$(function(){

        //var isTouch= Modernizr.touch;
        //if (isTouch) { $('.revealOnScroll').addClass('animated'); }

        $(window).on('scroll', revealOnScroll);

        function revealOnScroll() {
            $(".revealOnScroll:not(.animated)").each(function(){
                if($(window).scrollTop()+$(window).height()*0.5>$(this).offset().top){
                    if($(this).data('timeout')){//是否有data-timeout
                        $(this).addClass('animated');//马上加animated类防止重复进入定时器
						var $thisObj=$(this);//把this传进去
						setTimeout(function(){				
							$thisObj.addClass($thisObj.data('animation'));//data-animation的值放进类
                        }, parseInt($thisObj.data('timeout')));
                    }else {
						$(this).addClass('animated '+$(this).data('animation'));
                    }
                }
            });
        }






    $('#login-modal').modal({//用js控制打开登录后面的暗色背景
        show:false,
        backdrop:true,
        //remote:'loginform.html'
    });
    $('#login-modal').on('show.bs.modal',function(){
        console.log('显示对话框');
    });
    $('#login-modal').on('shown.bs.modal',function(){
        console.log('对话框已经显示了');
    });
    $('#login-modal').on('hide.bs.modal',function(){
        console.log('隐藏对话框');
    });
    $('#login-modal').on('hidden.bs.modal',function(){
        console.log('对话框已经隐藏了');
    });
    $('#login-modal').on('loaded.bs.modal',function(){
        console.log('已经加载好了对话框里面的内容');
    });

    $('.prev-slide').on('click',function(){
        $('#slideshow').carousel('prev');
    });
    $('.next-slide').on('click',function(){
        $('#slideshow').carousel('next');
    });
    $(document).on('keydown',function(e){
        switch (e.which){
            case 37:
                $('#slideshow').carousel('prev');
                break;
            case 39:
                $('#slideshow').carousel('next');
                break;
        }
    });

    var play=true;
    $('.play-and-stop').click(function(){
        if(!play){
            $('#slideshow').carousel('cycle');
            $(this).children('span').removeClass('glyphicon-play').addClass('glyphicon-pause');
        }else{
            $('#slideshow').carousel('pause');
            $(this).children('span').removeClass('glyphicon-pause').addClass('glyphicon-play');
        }
        play=!play;
    });

    $('#slideshow').on('slide.bs.carousel',function(){
        console.log('播放幻灯片');
    });
    $('#slideshow').on('slid.bs.carousel',function(){
        console.log('播放完成');
    });



var isEach=0;//是否在遍历，这个可以解决手快脑残党，出现两个图片都放大
$('.bPic').click(function(){
	var $thisPic=$(this);
	var hasC=0;
	if(!isEach){
		$('.bPic').each(function(){
			if($(this).hasClass($(this).data('anilg'))){
				hasC=1;//为0代表没有一个bPicLarg类
				var $thisin=$(this);
				$thisin.addClass($thisin.data('anism'));
				isEach=1;
				setTimeout(function(){
					$thisin.removeClass($thisin.data('anilg'));
					$thisin.removeClass($thisin.data('anism'));
					isEach=0;
				},500);
				if($thisin!=$thisPic){
					$thisPic.addClass($thisPic.data('anilg'));
				}
			return false;//找到了提前退出,不然会把自己remove
			}
		});
		if(!hasC){
			$thisPic.addClass($thisPic.data('anilg'));}
	}
});


$('#adviceSbmit').click(function(){
    if(!$('#youname').get(0).validity.valid){
        $('#younameSpan').html("用户名称不能为空");
        console.log('tt');
    }else{
        $('#younameSpan').html("&nbsp;");
    }
    if(!$("input[name='usename']").get(0).validity.valid){
        console.log('tt');
        $('#usenameSpan').html("设备不能为空");
    }else{
        $('#usenameSpan').html("&nbsp;");
    }
    if(!$("textarea[name='advice']").get(0).validity.valid){
        console.log('ttt');
        $('#adviceSpan').html("建议不能为空");
    }else{
        $('#adviceSpan').html("&nbsp;");
    }
    if(($('#youname').get(0).validity.valid)&&($("input[name='usename']").get(0).validity.valid)&&($("textarea[name='advice']").get(0).validity.valid)){
        $.ajax({
            url:'advice.php',
            type:'get',
            data:$('#adviceForm').serializeArray(),
            dataType:'JSON',
            success:function(data){$('#adviceSpan').html(data);},
            error:function(){console.log('失败')},
            async:true
        });
    }
});


















});