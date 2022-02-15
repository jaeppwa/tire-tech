$(function(){

$('.navbar_gnb,.navSubshadow').on('mouseenter mouseleave',function(ev){
 
    if($(window).width()>1094) //데스크탑 상태 
    {  
        
        if(ev.type=='mouseenter'){//데스크탑 상태에서 마우스를 올려놨을때 
        $(".navSubshadow").stop().slideDown();
        $(".dep").stop().fadeIn();
    }else{
        $(".navSubshadow").stop().slideUp(250,function(){
            $(this).removeAttr("style")

        });//슬라이드 업 다음에 콜백함수 한번 더 
        
        $(".dep").stop().fadeOut(250,function(){
            $(this).removeAttr("style")

        });
    }
 
    }
});
 var $mainBtn =$(".navbar_gnb>li>a")//메인메뉴 버튼 만들기

 $mainBtn.click(function(){//모바일 상태에서 서브메뉴 슬라이드 
 if($(window).width()<1094){//모바일 상태 

        if(!$(this).parents("li").is(".act")){
        $(".navbar_gnb>li").removeClass('act');
        $(this).parents("li").addClass('act');
        $('.icon').removeClass("on");
        $(this).siblings(".icon").addClass("on");

       }else{//li에 act클라스가 있을때 (열려있는상태)
        $(".navbar_gnb>li").removeClass('act');
        $('.icon').removeClass("on");


       }
        }//모바일상태 끝
});
//모바일 상태에서 햄버거 버튼을 누르면 사이드 바 열리고 닫힘
 $(".trigger").click(function(){
     $(this).toggleClass("move");
     if($(this).hasClass("move")){
     $(".side-gnb").animate({right:0},400);
     $(".navbar_wrap").animate({right:250},400)
    }else{
        $(".side-gnb").animate({right:-250},400);
     $(".navbar_wrap").animate({right:0},400);
    }

 })




 /*   $(".navbar_gnb>li>a").click(function(){
        $(this).toggleClass("subOpen");
        
        if($(this).hasClass("subOpen")){
        $(this).siblings("ul.dep").show();
        $(this).siblings(".icon").addClass("on");
    }else{
        $(this).siblings("ul.dep").hide();
        $(this).siblings(".icon").removeClass("on");
    }
    });*/
    

}); 