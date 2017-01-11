$(document).ready(function() {
    

    /* header의 top menu */
    
    $(".gnb > li").mouseenter(function(){
        $(".gnb > li > ul , .gnbBG").stop().slideDown(200);
    });
    $(".gnb > li").mouseleave(function(){
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
    
    $(".menu > li").click(function(e){
        
        
        e.preventDefault(); //책갈피 없애는 기능!
        
        var list = $(this).index();
        
        /* 해당 카테고리의 ul 보여주기*/
        
        $(".subMenuWrap > ul").hide();
        $(".subMenuWrap > ul").eq(list).show();
        
    });
    
});
