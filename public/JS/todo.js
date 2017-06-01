
// on double click of task
$(function () {
	$('.flex-box').dblclick(function () {
		if ($(this).hasClass("done")) {
			$(this).removeClass("done");
			//change table data from true to false
			console.log("task has been undone");
		} else {
			$(this).addClass("done");
			//change table data from false to true
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
			console.log($('#day option:selected').text());
			//push information to table
			//update columns
			$('tuesday').append('<div class="flex-box"><div class="description">stuff</div></div>');
			$('.description-input').val('');
			console.log("ready for next too-doo");
		};
	});
});
