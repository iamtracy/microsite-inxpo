//smooth scroll on click to internal anchor
$(document).ready(function(){
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
      
        var target = this.hash,
        $target = $(target);
      
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-100
        }, 900, 'swing', function () {
            window.location.hash = target.preventDefault();;
        });
    }); //end smoothscroll

    (function($) {
        $('.navbar').fadeOut(550);                        
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 10) {
                $('.navbar').fadeIn(750);
            } else {
                $('.navbar').fadeOut(500);
            }
        });
    })(jQuery);

    // set the date we're counting down to
    var target_date = new Date('July, 15, 2016').getTime();
     
    // variables for time units
    var days, hours, minutes, seconds, ms_step=10;
     
    // get tag element
    var countdown = document.getElementById('countdown');
     
    setInterval(function () {
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
        min = parseInt(seconds_left / 60);
        sec = parseInt(seconds_left % 60);
         
        // format countdown string + set tag value
        countdown.innerHTML = ''+
            '<div class="countdown-list-container">' + 
                '<li>'+days+'<b> Days</b></li>'+
                '<li>'+hours+'<b> Hours</b></li>'+
                '<li>'+min+'<b> Minutes</b></li>'+
                //'<span class="seconds">'+sec+'<b>Seconds</b></span>';
            '</div>'  
    });

});