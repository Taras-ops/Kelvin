$(document).ready(function(){
    $('.coments').slick({
        arrows: false,
        autoplay: true,
        dots: true,
    });
});

AOS.init({
    delay: 400,
    duration: 1000,
    initClassName : 'aos-init',
    easing: 'ease-in',
})

$('.burger').click(function(){
    $('.burger-header-nav').toggleClass('active')
    $('.burger').toggleClass('active')
    $('body').toggleClass('active')
})

$('.burger-header-nav ul li a').click(function(){
    $('.burger-header-nav').removeClass('active')
    $('.burger').removeClass('active')
    $('body').removegitClass('active')
})