$(function () {
    $('.panel_name').on('click', function () {
        $(this).toggleClass('close');
        $(this).next().slideToggle();
    });
})