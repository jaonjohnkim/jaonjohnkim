
$(document).ready(function(){
  $('#mobileMenu a').click(function(e){
    e.preventDefault(); //PREVENTS CLICKING MENU FROM EXECUTING

    $('header nav').slideToggle();
    $('#mobileMenu').toggleClass('menuUp menuDown');
  });

  // $('header nav ul li a').click(function(e){
  //   if($(window).width() >= '600') {
  //     if($(this).siblings().size() &gt; 0){
  //       e.preventDefault();
  //       $(this).siblings().slideToggle('fast');
  //       $(this).children('.toggle').html($(this).children('.toggle').html() === 'close' ? 'expand' : 'close');
  //     }
  //   }
  // });

  $(window).resize(function(){
    if($(window).width() >= '600'){
      $('header nav').css('display','block');

      if($('#mobileMenu').attr('class') === 'menuDown'){
        $('#mobileMenu').toggleClass('menuUp menuDown');
      }

    } else {
      $('header nav').css('display', 'none');
    }
  });
});
