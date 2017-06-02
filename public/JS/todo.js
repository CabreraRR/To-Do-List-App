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
	});
});

$(function () {
	$('button.update').on('click', function () {
		var editTitle = prompt("Update task");
		if (editTitle != null) {
			$.post("/update", {
				id: $(".update").attr("data-id")
			}, function (todo) {
				$("h3." + todo.id).replaceWith("<h3>" + todo.title + "</h3>");
			});
		}
	});
});
