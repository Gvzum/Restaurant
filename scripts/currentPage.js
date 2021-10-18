$(document).ready(() => {
    $('.food__view').hide(); 
    $('.food__coll').click(() => {
        $('.food__view').toggle('slow'); 
    });
})