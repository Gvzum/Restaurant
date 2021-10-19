$(document).ready(() => {
    $('.food__view').hide(); 
    $('.food__coll').click(() => {
        $('.food__view').toggle('slow'); 
    });

    $('.hamburger').click(() => {
        $('.header__links').toggleClass('actives');
        $('.header__login').toggleClass('actives'); 
    }); 

    $('.menu-drop').hide(); 
    $('.main__title').click(() => {
            $('.menu-drop').toggle('slow'); 
    }); 
})