$(document).ready(function(){
  // Reset the scroll to top when page refreshed
  $(this).scrollTop(0);

  const livestream = document.getElementById('livestream-container');
  const buttons = document.querySelectorAll('.button');

  // Show the button and the livestream video in 2 seconds
  setTimeout(function(){
    window.scrollTo({top: 50, behavior: 'smooth'});
    // console.log("ok");
    for ( let i = 0; i < buttons.length; i++ ) {
      buttons[i].style.display = 'block';
    }
  }, 2000);

  for ( let i = 0; i < buttons.length; i++ ) {
    // make the animation a random duration, from 45s to 50s, from 7s to 8s, from 3s to 4s,
    buttons[i].style["animation-duration"] = ( 45 + Math.random() * 5 ) + 's, ' + '8s,' +
                                             ( 3 + Math.random() ) + 's';

    // start the animations at a random offset, from 0s to -25s, from 0s to -8s, from 0s to -4s,
    buttons[i].style["animation-delay"] = ( -1 * Math.random() * 25 ) + 's, ' +
                                          ( -1 * Math.random() * 8 ) + 's,' +
                                          ( -1 * Math.random() * 4 ) + 's';
  }

  // When mouse not moving for over 20 seconds
  // Site goes to sleep
  var timeout;
  document.onmousemove = function(){
    clearTimeout(timeout);
    // console.log("timeout");
    $('#mask').removeClass('mask-animation');
    timeout = setTimeout(function(){
      $('#mask').addClass('mask-animation');
    }, 20000);
  }

  // When scrolling the livestream video up and down
  // Replace the background text
  var previousScroll = 0;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if ( currentScroll > previousScroll ) {
      if ( currentScroll > (window.innerHeight - 50) ) {
        $('#title').removeClass('fadein');
        $('#title').css('display','none');
        $('#about').removeClass('hide').css('display','block');
      }
    } else {
        if ( currentScroll < (window.innerHeight - 50) ) {
        $('#about').css('display','none');
        $('#title').css('display','block');
      }
    }
    previousScroll = currentScroll;
  });

  // setInterval(function(){
  //   const button = document.getElementById('button');
  //   // console.log('ok');
  //   var buttonX = $("#button").position().left;
  //   var buttonY = $("#button").position().top;
  //   var positionX = (buttonX / window.innerWidth) * 6;
  //   positionY = (Math.sin(positionX * Math.PI) * 200) + (window.innerWidth / 2);
  //   // console.log(`${positionX},${positionY}`);
  //   button.style.top = `${positionY}px`;
  // }, 1);

  // Hover focus of the statements
  $('#statement-right').addClass('blur');

  $('#statement-left').hover(
    function(){
      $(this).removeClass('blur');
      $('#statement-right').addClass('blur');
    },function(){
      $(this).addClass('blur');
    }
  );

  $('#statement-right').hover(
    function(){
      $(this).removeClass('blur');
      $('#statement-left').addClass('blur');
    },function(){
      $(this).addClass('blur');
    }
  );

  // Click the button and stop the animation
  $('.button').click(function(){
    $('.button').css('animation-play-state','running,running,running');
    $('.button').removeClass('disable');
    $(this).css("animation-play-state","paused,paused,running");
    $(this).addClass('disable');
  });

  // $('.button').hover(
  //   function(){
  //     $(this).css("animation-play-state","paused,paused,running");
  //   },function(){
  //     $(this).css("animation-play-state","running,running,running");
  //   }
  // );

  // Show the statement page
  $('#statement').click(function(){
    $('#title,#about,#livestream-scroll').addClass('hide');
    $('.info,.echo').addClass('hide');
    $('.statements,#close').removeClass('hide').css('display','block');
    console.log('statements');
  });

  // Show the info page
  $('#info').click(function(){
    $('#title,#about,#livestream-scroll').addClass('hide');
    $('.statements,.echo').addClass('hide');
    $('.info').removeClass('hide').css('display','flex');
    $('#close').removeClass('hide').css('display','block');
    console.log('info');
  });

  // Show the echo page
  $('#echo').click(function(){
    $('#title,#about,#livestream-scroll').addClass('hide');
    $('.statements,.info').addClass('hide');
    $('.echo').removeClass('hide').css('display','flex');
    $('#close').removeClass('hide').css('display','block');
    console.log('echo');
  });

  // Back to the homepage
  $('#close').click(function(){
    $('#title,#livestream-scroll').removeClass('hide').css('display','block');
    $('.statements,.info,.echo,#close').addClass('hide');
    $('.button').css('animation-play-state','running,running,running');
    $('#title').addClass('fadein');
    $('.button').css("pointer-events","auto");
    console.log('homepage');
  });



});
