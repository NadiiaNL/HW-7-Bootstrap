$(function () {
$('#intro-carousel').carousel({
    interval: 5000,
    keyboard: false,
    pause: 'hover',
    ride: 'carousel',
  });
  $('#clients-carousel').carousel({
    interval: 1000,
    keyboard: false,
    pause: 'hover',
    ride: 'carousel',
  });
    
$('#portfolio-dropdown').dropdown(
    $('.dropdown-toggle').click(function () {
        
	    $('.dropdown-menu').removeClass('show');
        
	   });
);
});
    