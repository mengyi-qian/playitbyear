$(document).ready(function(){
  const title = document.querySelector('h1');
  const playitbyear = `play it by ear`;
  const about = `
    <p>This livestream is recorded from our exhibition space.</p>
    <p>You are welcome to make a <u>reservation</u> for visit, or go to our <u>echo</u> dock, or leave us a <u>message</u>.</p>
  `

  var previousScroll = 0;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if ( currentScroll > previousScroll ) {
      if ( currentScroll > (window.innerHeight - 50) ) {
        // console.log(currentScroll);
        title.innerHTML = about;
        title.className = 'about';
        $('h1').removeClass('fadein');
      }
    } else {
      if ( currentScroll < (window.innerHeight - 50) ) {
        // console.log(currentScroll);
        title.innerHTML = playitbyear;
        title.className = 'playitbyear';
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




});
