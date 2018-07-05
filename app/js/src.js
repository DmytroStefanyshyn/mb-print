var menuOpener = document.getElementsByClassName('menu_opener');
$('.menu_opener').click(function(){
  $(this).find('.icon-list').toggleClass('icon-list_opened');
  $('.main-menu').toggleClass('active');
})
var hammertime = new Hammer(document);
hammertime.on('panleft panright', function(ev) {
  if($(ev.target).parents('.slider').length){
    return false;
  }
  if(ev.type == 'panright'){
    $('.menu_opener .icon-list').addClass('icon-list_opened');
    $('.main-menu').addClass('active');
  }
  if(ev.type == 'panleft'){
    $('.menu_opener .icon-list').removeClass('icon-list_opened');
    $('.main-menu').removeClass('active');
  }
});

// function setParentHeight(el){
//   var parent = el.parent()
//   parent.height(el.height())
// }
$('[data-tabtrigger]').click(function(e){
  e.preventDefault();
  var n = $(this).data('tabtrigger');
  var group = $(this).data('group');
  if($(this).is('[data-toggle]')){
    if($(this).is('.active')){
      $(this).removeClass('active');
      $('[data-tab="'+n+'"][data-group="'+group+'"]').removeClass('active');
    }else{
      $(this).addClass('active');
      $('[data-tab="'+n+'"][data-group="'+group+'"]').addClass('active');
    }
  }else{
    $('[data-group="'+group+'"]').removeClass('active')
  $(this).addClass('active')
  $('[data-tab="'+n+'"][data-group="'+group+'"]').addClass('active');
  }
   
  // if(!$(this).is('[data-noheight]')){
  //   setParentHeight( $('[data-tab="'+n+'"][data-group="'+group+'"]'))
  // }
  
})
$('ul.tab-nav li:first-child a').click();

$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: false
  });
});


$('ul.main-menu li').click(function(e){
    $('ul.main-menu li').removeClass('active');
    $(this).addClass('active');
});