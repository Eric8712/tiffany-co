$(document).ready(function () {
    // 彈跳選單OR下拉是選單
    $('.menu-toggle').on('click', function(){
        $(this).toggleClass('active');
        $('.navlist .nav').toggleClass('active');
    })
    $('.navlist').on('click', function(){
        $('.menu-toggle').removeClass('active');
        $('.navlist .nav').removeClass('active');
    })

    // video
    $('.jumbotron-video').vide({
    'mp4':'video/bg.mp4',
    'webm':'video/bg.webm',
    'ogv':'video/bg.ogv',
    'poster':'img/banner.jpeg',
    },{
        posterType: 'none',
        loop: false,
    })
    
})