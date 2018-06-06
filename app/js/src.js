var menuOpener = document.getElementsByClassName('menu_opener');
$('.menu_opener').click(function(){
  $(this).find('.icon-list').toggleClass('icon-list_opened');
  $('.main-menu').toggleClass('active');
})
var hammertime = new Hammer(document);
hammertime.on('panleft panright', function(ev) {
  console.log(ev.type);
  if(ev.type == 'panright'){
    $('.menu_opener .icon-list').addClass('icon-list_opened');
    $('.main-menu').addClass('active');
  }
  if(ev.type == 'panleft'){
    $('.menu_opener .icon-list').removeClass('icon-list_opened');
    $('.main-menu').removeClass('active');
  }
});