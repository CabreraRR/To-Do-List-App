$(document).ready(function () {
	console.log("ready!");
});

//add to toodoo list here


// on double click
$(function () {
	$('.flex-box').dblclick(function () {
		if ($(this).hasClass("done")) {
			$(this).removeClass("done");
			console.log("task has been undone");
		} else {
			$(this).addClass("done");
			console.log("Done with task");
		}
		//push update to table

	});
});

//clicking the add button
$(function () {
	$('.btn-lg').on('click', function () {
		if ($('.description-input').val().length == 0) {
			console.log("nothing in text-area bruh...")
		} else {
			console.log($('.description-input').val());
			console.log($('#day option:selected').id());
			//push information to table
			//update table
			//update columns
			$('#' + ($('#day option:selected').id())).append("<h1>testing</h1>");
			$('.description-input').val('');
			console.log("ready for next too-doo");
		};
	});
});
