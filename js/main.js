const prev = document.getElementById('btn-prev'),
	  next = document.getElementById('btn-next'),
	  slides = document.querySelectorAll('.slide'),
	  dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
	for(slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}
const activeDot = n => {
	for(dot of dots) {
		dot.classList.remove('actived');
	}
	dots[n].classList.add('actived');
}

const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
}
const nextSlide = () => {
	if(index == slides.length - 1){
		index = 0;
		prepareCurrentSlide(index);
	}else{
		index++;
		prepareCurrentSlide(index);
	}
}
const prevSlide = () => {
	if(index == 0){
		index = slides.length - 1;
		prepareCurrentSlide(index);
	}else{
		index--;
		prepareCurrentSlide(index);
	}
}
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

$(function () {

  $('.menu-sign').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(0, function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 1);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 1, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(1);
    });
  });

  $('#myModal__selected, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 1, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(1);
    });
  });

	$(document).ready(function(){
	$('.accordionItemContent').hide();
	$('.accordionItem').click(function(){
	    $(this).next().toggle()});
	});
})
