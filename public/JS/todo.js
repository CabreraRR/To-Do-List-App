$(document).ready(function () {
	console.log("ready!");
});

//add to toodoo list here


// on double click
$(function () {
	$('.flex-box').dblclick(function () {
		$(this).addClass('done');
		//push update to table
		console.log("Done with task");
	});
});

//clicking the add button
$(function () {
	$('.btn-lg').on('click', function () {
		if ($('.description-input').val().length == 0) {
			console.log("nothing in text-area bruh...")
		} else {
			console.log($('.description-input').val());
			console.log($('#day option:selected').text());
			//push information to table
			//update table
			//update columns
			$('.description-input').val('');
			console.log("ready for next too-doo");
		};
	});
});
