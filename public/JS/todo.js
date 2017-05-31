$(document).ready(function () {
	console.log("ready!");
});

//add to toodoo list
$(function () {
	$('.btn-primary').on('click', function () {
		if ($('.description-input').val().length == 0) {
			console.log("nothing in text-area bruh...")
		} else {
			console.log($('.description-input').val())
			//push information to table
			//update table
			//update columns
			$('.description-input').val('');
			console.log("ready for next too-doo");
		};
	});
});
