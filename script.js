// oncontextmenu
// oncontextmenu="return false;"
document.onkeydown=function(e){
    if(event.keyCode == 123){
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0) ){
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J" .charCodeAt(0)){
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'(0)){
        return false;
    }
}

// slide
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// paralax scroll navbar
$(function(){
    var $item = $('nav ul li');
    
    $item.on('click', 'a', function(event){
        var $section = $($(this).attr('href'));
        var sectionTop = $section.offset().top;   
    
        $('html, body').stop().animate({scrollTop: sectionTop}, 800);
        
        event.preventDefault();
    });
    
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        
        $item.each(function(){
            var $section = $($(this).find('a').attr('href'));
            var sectionTop = $section.offset().top - 60;
            var sectionHeight = $section.height();
            
            if (sectionTop <= scrollTop && (sectionTop + sectionHeight) > scrollTop){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            }
        });
    });
});