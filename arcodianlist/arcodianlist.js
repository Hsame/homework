$('dt').on('click', function() {
    
    function slideDown(target) {
    slideUp();
    $(target).children('.symbol').children('.fa-chevron-down').css("display","none")
    $(target).children('.symbol').children('.fa-chevron-up').css("display","block")
    $(target).addClass('on').next().slideDown();
    }

    function slideUp() {
    console.log($('dt'))
    $('dt').children('.symbol').children('.fa-chevron-down').css("display","block")
    $('dt').children('.symbol').children('.fa-chevron-up').css("display","none")
    $('dt').removeClass('on').next().slideUp();
    }

    $(this).hasClass('on') ? slideUp() : slideDown(this);
    });