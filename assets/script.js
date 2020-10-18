$(document).ready(function(){
  $(this).scrollTop(0);

  const livestream = document.getElementById('livestream-container');
  const buttons = document.querySelectorAll('.button');
  setTimeout(function(){
    // livestream.style.transform = 'translateY(-50px)';
    window.scrollTo({top: 50, behavior: 'smooth'});
    console.log("ok");
    for ( let i = 0; i < buttons.length; i++ ) {
      buttons[i].style.display = 'block';
    }
  }, 2000);

  var timeout;
  document.onmousemove = function(){
    clearTimeout(timeout);
    // console.log("timeout");
    $('#mask').removeClass('mask-animation');
    timeout = setTimeout(function(){
      $('#mask').addClass('mask-animation');
    }, 10000);
  }


  var previousScroll = 0;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if ( currentScroll > previousScroll ) {
      if ( currentScroll > (window.innerHeight - 50) ) {
        $('#title').removeClass('fadein');
        $('#title').css('display','none');
        $('#about').css('display','block');
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



  $('.button').click(function(){
    $('.button').css('animation-play-state','running,running,running');
    $(this).css("animation-play-state","paused,paused,running");
    $(this).css("pointer-events","none");
  });

  $('#statement').click(function(){
    $('#title,#about,#livestream-scroll').addClass('hide');
    $('.statements').addClass('show');
    console.log('statements');
  });



});
