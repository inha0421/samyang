$(document).ready(function(){
	

    //메인 슬라이더 구현


    var i = $(".navi5 .on").index();
    var wid = $(".visual5").width();
    var len = $(".navi5 li").length;


    //버튼에 on 클래스 처리

    $(".navi5 li").click(function(){

        $(".navi5 li").removeClass("on");
        $(this).addClass("on");

    });

    $(".navi5 li").mouseenter(function(){

        $(".navi5 li").removeClass("on");
        $(this).addClass("on");

    });



    //버튼 눌렀을때 해당 슬라이드 화면으로 이동


    $(".navi5 li").click(function(e){

        e.preventDefault();

        i = $(this).index();
        Sliding();

    });



    //슬라이드 함수 구현


    function Sliding(){

        $(".navi5 li").removeClass("on");
        $(".navi5 li").eq(i).addClass("on");
        $(".panel5").animate({"margin-left": -wid * i},500);

    }


    //자동 재생 구현

    var auto = setInterval (function(){

        if(i == len-1){
            i = 0;
        }

        else{
            i++;
        }

        Sliding();


    },2000);


    //마우스 오버시 자동 재생 정지


    $(".visual5").mouseenter(function(){

        clearInterval(auto);

    });

    //마우스리브시 자동 재생 다시 시작



    $(".visual5").mouseleave(function(){


        auto = setInterval (function(){

        if(i == len-1){
            i = 0;
        }

        else{
            i++;
        }

        Sliding();


    },2000);

    });


});

