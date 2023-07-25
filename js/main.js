$(function(){
    $(".select_language").click(function(){
        $(this).toggleClass("show")
    })

    $(".sub").hide();

    $(".gnb_menu > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(this).find(".sub").stop().slideUp();
    })

    // visual_wrap 영역

    $(".visual_wrap").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:true
    })

    $(".recommend_tab a").click(function(e){
        e.preventDefault();
        $(".recommend_tab a").removeClass("on");
        $(this).addClass("on");

        n = $(this).index();
        console.log("n : " , n);

        $(".recommend_list_wrap > ul").removeClass("act");
        $(".recommend_list_wrap > ul").eq(n).addClass("act");
    })

    //flag_slider

    $(".flag_slider").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:true,
        fade:true
    })

    //모바일영역

    $(".mob_nav_btn").click(function(){
        $(".mob_nav").addClass("left_move");
        $(".m_nav_bg").delay(500).fadeIn();
    })

    $(".m_nav_bg").click(function(){
        $(".mob_nav").removeClass("left_move");
        $(".m_nav_bg").fadeOut(0);
    })

    $(".m_nav_list > li").hover(function(){
        $(this).find(".m_sub").stop().slideDown();
        $(this).find("a").addClass("on")
    },function(){
        $(this).find(".m_sub").stop().slideUp();
        $(this).find("a").removeClass("on")
    })
})