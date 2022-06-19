// operations.html
// ved.html 
// specialchecks.html
// distance.htmlfor
var $ = require( "jquery" );
require ('./libs/slick.min.js');
require ('./libs/mobile-menu.js');
require ('./libs/dropdown.js');
require ('./libs/deposite.js');

function ibg(){
	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
		$(this).find('img').first().css("width", 0);
		$(this).find('img').first().css("height", 0);
		$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
}
function RatioW(){
	$.each($('.ratio-w'), function(index, val) {
		var ratioMultiplier = parseFloat($(this).data("ratio-multiplier"));
		if(ratioMultiplier == "undefined"){
			ratioMultiplier = 1;
		}
		console.log(ratioMultiplier);
		$(this).css("height", (parseFloat($(this).css("width")) * ratioMultiplier).toString() + "px");
	});
}
function RatioH(){
	$.each($('.ratio-h'), function(index, val) {
		var ratioMultiplier = parseFloat($(this).data("ratio-multiplier"));
		if(ratioMultiplier == "undefined"){
			ratioMultiplier = 1;
		}
		console.log(ratioMultiplier);
		$(this).css("width", (parseFloat($(this).css("height")) * ratioMultiplier).toString() + "px");
	});
}

//READMORE START
$(document).on('click', '.readmore', function(event) {
	$(this).toggleClass("toggled");
	ToggleReadmoreObjects($(this));
});
function ToggleReadmoreObjects(readmore){
	let readmoreObjects = $("[data-readmore-identifier="+readmore.attr('id')+"]");
	if(readmoreObjects.length == 0){
		return;
	}
	for (var i = 0; i < readmoreObjects.length; i++) {
		let readmoreObject = $(readmoreObjects[i]);
		if(readmore.hasClass("toggled")){

			readmoreObject.removeClass("hidden");
		}
		else{
			readmoreObject.addClass("hidden");
		}
		
	}
}
//First run through for every readmore when page loads
$(document).ready(function(){
	$('.readmore').each(function(){
		ToggleReadmoreObjects($(this));
	});
});

//READMORE END

$(window).resize(function(){
	RatioW();
	RatioH();
}); 
$(document).ready(function (){
	current_menu_id = $('#info').data('current-id');
	main_menu_id = $('#info').data('main-menu-current-id');
	$('#' + current_menu_id).addClass('current__page');
	$('#' + main_menu_id + '>a').addClass('current');

	$(".credit-slider").slick({
		arrows:false,
		dots:true,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					
				}
			}
		]
	});
	$(".ved-block-slider").slick({
		arrows:false,
		dots:true,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					
				}
			}
		]
	});
	ibg();
	RatioW();
	RatioH();
});
$(document).on("click",".dropbtn",function(){
	$(this).parent(".dropdown").find(".dropdown-content").toggleClass("show");
});
$("#tarifs").click(function (e) {
	e.preventDefault();
	$("#tarifs").addClass("current-link");
	$("#docs").removeClass("current-link");
	$("#tarifs-item").addClass("active");
	$("#docs-item").removeClass("active");
});
$("#docs").click(function (e) {
	e.preventDefault();
	$("#docs").addClass("current-link");
	$("#tarifs").removeClass("current-link");
	$("#docs-item").addClass("active");
	$("#tarifs-item").removeClass("active");
});

$('body').on('click','#showmore.more',function(e){
	e.preventDefault();
	$('.operations__documentation-kind.active>.operations__documentation-file.hide').each(function () {
		$(this).removeClass('hide');
	});
	$('#showmore.more').addClass('less').removeClass('more').html('Скрыть<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-less" /></svg>');

});

$('body').on('click','#showmore.less',function(e){
	e.preventDefault();
	$('.operations__documentation-kind.active>.operations__documentation-file').filter('[data-show="no"]').each(function () {
		$(this).addClass('hide');
		});
	$('#showmore.less').removeClass('less').addClass('more').html('Смотреть все<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-more" /></svg>');
});

// accountopen.html for

$("#resident").click(function (e) {
	e.preventDefault();
	$("#resident").addClass("current-link");
	$("#noresident").removeClass("current-link");
	$("#up").removeClass("current-link");
	$("#custom").removeClass("current-link");
	$("#resident-item").addClass("active");
	$("#noresident-item").removeClass("active");
	$("#up-item").removeClass("active");
	$("#custom-item").removeClass("active");
});
$("#noresident").click(function (e) {
	e.preventDefault();
	$("#noresident").addClass("current-link");
	$("#resident").removeClass("current-link");
	$("#up").removeClass("current-link");
	$("#custom").removeClass("current-link");
	$("#noresident-item").addClass("active");
	$("#resident-item").removeClass("active");
	$("#up-item").removeClass("active");
	$("#custom-item").removeClass("active");
});
$("#up").click(function (e) {
	e.preventDefault();
	$("#up").addClass("current-link");
	$("#resident").removeClass("current-link");
	$("#noresident").removeClass("current-link");
	$("#custom").removeClass("current-link");
	$("#up-item").addClass("active");
	$("#resident-item").removeClass("active");
	$("#noresident-item").removeClass("active");
	$("#custom-item").removeClass("active");
});
$("#custom").click(function (e) {
	e.preventDefault();
	$("#custom").addClass("current-link");
	$("#resident").removeClass("current-link");
	$("#noresident").removeClass("current-link");
	$("#up").removeClass("current-link");
	$("#custom-item").addClass("active");
	$("#resident-item").removeClass("active");
	$("#noresident-item").removeClass("active");
	$("#up-item").removeClass("active");
});

$('body').on('click','#showmore.more',function(e){
	e.preventDefault();
	$('.operations__documentation-kind.active>.operations__documentation-file.hide').each(function () {
		$(this).removeClass('hide');
	});
	$('#showmore.more').addClass('less').removeClass('more').html('Скрыть<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-less" /></svg>');

});

$('body').on('click','#showmore.less',function(e){
	e.preventDefault();
	$('.operations__documentation-kind.active>.operations__documentation-file').filter('[data-show="no"]').each(function () {
		$(this).addClass('hide');
		});
	$('#showmore.less').removeClass('less').addClass('more').html('Смотреть все<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-more" /></svg>');
});

// create.html for

$('body').on('click','#showmore.more',function(e){
	e.preventDefault();
	$('.documentation__list>.documentation__item.hide').each(function () {
		$(this).removeClass('hide');
	});
	$('#showmore.more').addClass('less').removeClass('more').html('Скрыть<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-less" /></svg>');

});

$('body').on('click','#showmore.less',function(e){
	e.preventDefault();
	$('.documentation__list>.documentation__item').filter('[data-show="no"]').each(function () {
		$(this).addClass('hide');
		});
	$('#showmore.less').removeClass('less').addClass('more').html('Смотреть все<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-more" /></svg>');
});