$(function($){

    $('#banner').slick({
        prevArrow: '<i class="fa-solid fa-angles-left banner_arrow_left"></i>',
        nextArrow: '<i class="fa-solid fa-angles-right banner_arrow_right"></i>',
    });

    //filter js
    $('.filter-container').filterizr();

    $('.filter_menu ul li').on('click', function(){
        $('.filter_menu ul li').removeClass('active');
        $(this).addClass('active');
    });
});