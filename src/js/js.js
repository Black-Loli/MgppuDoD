$('.tab_selector').click(function (event) {
	console.log(event.target.id)
	$('.tab-content .cards_grid').removeClass('cards_grid');
	$('.tab-content').children(`#${event.target.id}_content`).addClass('cards_grid');
})