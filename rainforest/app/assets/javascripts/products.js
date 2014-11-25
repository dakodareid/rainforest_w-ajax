// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {

	$('#search-form').submit(function(event) {
		event.preventDefault();
		var searchValue = $('#search').val();

	//switched from previous script js method to shorter $.ajax method
		// $.ajax({
		// 	url: '/products?search=' + searchValue, 
		// 	type: 'GET',
		// 	dataType: 'html'
		// }).done(function(data) {
		// 	$('#products').html(data);
		// });

	//switched from above to even shorter $.get method
		// $.get('/products?search=' + searchValue)
		// .done(function(data){
		// 	console.log(data);
		// 	$('#products').html(data);
		// });

		$.getScript('/products?search=' + searchValue);

	});

  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        return $.getScript(url);
      }
    });
  }
});