$(document).ready(function() {
    

    /* header의 top menu */
    
    $(".gnb > li, .gnbBG").mouseenter(function(){
        $(".gnb > li > ul , .gnbBG").stop().slideDown(200);
    });

    $(".gnb > li, .gnbBG").mouseleave(function(){
        $(".gnb > li > ul, .gnbBG").stop().slideUp(200);
    }); 
    
    
    
    
    
    /* menu tab 구현 */

    $(".menu > li > a").click(function(e){
        e.preventDefault(); //책갈피 없애는 기능!
        
            var list = $(this).index();
        
        /* active됐을 때 아이콘 */
        $(".menu > li >a").removeClass("on");
        $(this).addClass("on");
            
        
    });
    


    //////////////////////////////////////////////////



    //제품 소개 화면에서 해당 카테고리의 ul 보여주기

    $(".menu > li").click(function(e){

        e.preventDefault(); //책갈피 없애는 기능!
        
        var list = $(this).index();
        
        $(".subMenuWrap > div > ul:first-child").css({"margin-left":"0%"});
        $(".btn li:first-child").addClass("btn_on");

        $(".subMenuWrap > div ").hide();
        $(".subMenuWrap > div ").eq(list).show();




    });


    //제품 소개 ul 슬라이드



    $(".btn li").click(function(){

        $(".btn li").removeClass("btn_on");
        $(this).addClass("btn_on");

    });



    $(".btn li").click(function(e){

        e.preventDefault(); //책갈피 없애는 기능!
        
        var wid = $(".subMenuWrap > div > ul > li").width();
        var len =$(this).length;
        var i = $(".btn .btn_on").index();
        var j = $(".subMenuWrap > div").index();
        
        $(".subMenuWrap > div > ul:first-child").animate({"margin-left":-wid * i});

    });


    // 사이드 quick 메뉴 fixed 구현

    var qck = $(".quick").offset().top;


    $(document).scroll(function(e){

        e.preventDefault();
        var sc = $(this).scrollTop();

        if(sc >= qck){
            $(".quick").addClass("fix");
        }
        else if(sc < qck){
         $(".quick").removeClass("fix");
        }
    });

    $(".quick ul li:last-child a").click(function(){

        var sc = $(this).scrollTop();
        sc = 0;

    });
    

    //패밀리 구현

    $(".family a").click(function(e){

        e.preventDefault();

        $(".family ul").toggleClass("toggle");

    });

    //언어박스 구현
        //패밀리 구현

    $(".lang >a").click(function(e){

        e.preventDefault();

        $(".lang ul").addClass("toggle");

    });
    $(".lang ul li a").click(function(e){

        e.preventDefault();

        $(".lang ul").removeClass("toggle");

    });


});
