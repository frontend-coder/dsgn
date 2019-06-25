$(document).ready(function () {
	// 	$("body").niceScroll({
	// horizrailenabled:false
	// });
	// вверхнее красиво-вращающееся меню
	// 1 и 2 строка это анимация крестика
	//3 строка - слайдер вниз меню
	//слайдер вниз меню отвечает за работу мобильного меню к переносу

// // const humburger = document.querySelector('.humburger');
// // const tomMenu = document.querySelector('.top_menu');

// // humburger.addEventListener('click', (e)=> {
// // e.target.closest('.humburger').classList.toggle('humburger_active');

// // e.target.closest('.top_menu').querySelector('.top_menu_list').classList.toggle('top_menu_active');
// //  e.target.closest(`.menu`).querySelector(`.menu__list`).classList.toggle(`menu__list--active`);

// // } )



// const hamburger = document.querySelector('.humburger');

// hamburger.addEventListener('click', (e) => {
//  e.target.closest('.humburger').classList.toggle('humburger_active');
//  e.target.closest('.menu').querySelector('.menu__list').classList.toggle('humburger_active');
// });

// $(".humburger").on("click", function() {
//   $(this).toggleClass("humburger_active");
//   $(".menu__list").toggleClass("menu__list--active");
// })

$(".humburger").on("click", function() {
  $('.humburger').toggleClass("humburger_active");
  $(".menu__list").toggleClass("menu__list--active");
})






	//Ajax push mesege http://api.jquery.com/jquery.ajax/
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function () {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
	//castom code









});