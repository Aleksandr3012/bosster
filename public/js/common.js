"use strict";

var JSCCommon = {
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	// modalCall() {
	// 	$(".link-modal").fancybox({
	// 		arrows: false,
	// 		infobar: false,
	// 		touch: false,
	// 		type: 'inline',
	// 		autoFocus: false,
	// 		i18n: {
	// 			en: {
	// 				CLOSE: "Закрыть",
	// 				NEXT: "Вперед",
	// 				PREV: "Назад",
	// 				// PLAY_START: "Start slideshow",
	// 				// PLAY_STOP: "Pause slideshow",
	// 				// FULL_SCREEN: "Full screen",
	// 				// THUMBS: "Thumbnails",
	// 				// DOWNLOAD: "Download",
	// 				// SHARE: "Share",
	// 				// ZOOM: "Zoom"
	// 			},
	// 		},
	// 		beforeLoad: function () {
	// 			document.querySelector("html").classList.add("fixed")
	// 		},
	// 		afterClose: function () {
	// 			document.querySelector("html").classList.remove("fixed")
	// 		},
	// 	});
	// 	$(".modal-close-js").click(function () {
	// 		$.fancybox.close();
	// 	})
	// 	$.fancybox.defaults.backFocus = false;
	// 	const linkModal = document.querySelectorAll('.link-modal');
	// 	function addData() {
	// 		linkModal.forEach(element => {
	// 			element.addEventListener('click', () => {
	// 				let modal = document.querySelector(element.getAttribute("href"));
	// 				const data = element.dataset;
	// 				function setValue(val, elem) {
	// 					if (elem && val) {
	// 						const el = modal.querySelector(elem)
	// 						el.tagName == "INPUT"
	// 							? el.value = val
	// 							: el.innerHTML = val;
	// 						// console.log(modal.querySelector(elem).tagName)
	// 					}
	// 				}
	// 				setValue(data.title, '.ttu');
	// 				setValue(data.text, '.after-headline');
	// 				setValue(data.btn, '.btn');
	// 				setValue(data.order, '.order');
	// 			})
	// 		})
	// 	}
	// 	if (linkModal) addData();
	// },
	// /modalCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		if (this.btnToggleMenuMobile) {
			this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {
					_this.btnToggleMenuMobile.forEach(function (element) {
						return element.classList.toggle("on");
					});

					_this.menuMobile.classList.toggle("active");

					document.body.classList.toggle("fixed");
					document.querySelector('html').classList.toggle("fixed");
					return false;
				});
			});
		}
	},
	closeMenu: function closeMenu() {
		if (this.menuMobile) {
			this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");
			});
			this.menuMobile.classList.remove("active");
			document.body.classList.remove("fixed");
			document.querySelector('html').classList.remove("fixed");
		}
	},
	mobileMenu: function mobileMenu() {
		var _this2 = this;

		if (this.menuMobileLink) {
			this.toggleMenu();
			document.addEventListener('mouseup', function (event) {
				var container = event.target.closest(".menu-mobile--js.active"); // (1)

				if (!container) {
					_this2.closeMenu();
				}
			}, {
				passive: true
			});
			window.addEventListener('resize', function () {
				if (window.matchMedia("(min-width: 992px)").matches) {
					JSCCommon.closeMenu();
				}
			}, {
				passive: true
			});
		}
	},
	// /mobileMenu
	// tabs  .
	tabscostume: function tabscostume(tab) {
		var tabs = {
			Btn: [].slice.call(document.querySelectorAll(".tabs__btn")),
			BtnParent: [].slice.call(document.querySelectorAll(".tabs__caption")),
			Content: [].slice.call(document.querySelectorAll(".tabs__content"))
		};
		tabs.Btn.forEach(function (element, index) {
			element.addEventListener('click', function () {
				if (!element.classList.contains('active')) {
					var siblings = element.parentNode.querySelector(".tabs__btn.active");
					var siblingsContent = tabs.Content[index].parentNode.querySelector(".tabs__content.active");
					siblings.classList.remove('active');
					siblingsContent.classList.remove('active');
					element.classList.add('active');
					tabs.Content[index].classList.add('active');
				}
			});
		}); // $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
		// 	$(this)
		// 		.addClass('active').siblings().removeClass('active')
		// 		.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
		// 		.eq($(this).index()).fadeIn().addClass('active');
		// });
	},
	// /tabs
	// inputMask() {
	// 	// mask for input
	// 	let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
	// 	InputTel.forEach(function (element) {
	// 		element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}")
	// 	});
	// 	Inputmask("+9!999!999-99-99").mask(InputTel);
	// },
	// /inputMask
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	sendForm: function sendForm() {
		var gets = function () {
			var a = window.location.search;
			var b = new Object();
			var c;
			a = a.substring(1).split("&");

			for (var i = 0; i < a.length; i++) {
				c = a[i].split("=");
				b[c[0]] = c[1];
			}

			return b;
		}(); // form


		$(document).on('submit', "form", function (e) {
			e.preventDefault();
			var th = $(this);
			var data = th.serialize();
			th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
			th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
			th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
			th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
			$.ajax({
				url: 'action.php',
				type: 'POST',
				data: data
			}).done(function (data) {
				$.fancybox.close();
				$.fancybox.open({
					src: '#modal-thanks',
					type: 'inline'
				}); // window.location.replace("/thanks.html");

				setTimeout(function () {
					// Done Functions
					th.trigger("reset"); // $.magnificPopup.close();
					// ym(53383120, 'reachGoal', 'zakaz');
					// yaCounter55828534.reachGoal('zakaz');
				}, 4000);
			}).fail(function () {});
		});
	},
	heightwindow: function heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

		document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

		window.addEventListener('resize', function () {
			// We execute the same script as before
			var vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
		}, {
			passive: true
		});
	},
	animateScroll: function animateScroll() {
		$(document).on('click', " .top-nav li a, .scroll-link", function () {
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$('html, body').animate({
				scrollTop: destination
			}, 1100);
			return false;
		});
	},
	getCurrentYear: function getCurrentYear(el) {
		var now = new Date();
		var currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	}
};
var $ = jQuery;

function eventHandler() {
	JSCCommon.ifie(); // JSCCommon.modalCall();

	JSCCommon.tabscostume('.tabs--js');
	JSCCommon.mobileMenu(); // JSCCommon.inputMask();

	JSCCommon.sendForm();
	JSCCommon.heightwindow();
	JSCCommon.animateScroll(); // JSCCommon.CustomInputFile(); 

	var x = window.location.host;
	var screenName;
	screenName = 'main.jpg';

	if (screenName && x === "localhost:3000") {
		document.body.insertAdjacentHTML("beforeend", "<div class=\"pixel-perfect\" style=\"background-image: url(screen/".concat(screenName, ");\"></div>"));
	} // function whenResize() {
	// 	const topH = document.querySelector("header ").offsetHeight;
	// 	if ($(window).scrollTop() > topH) {
	// 		document.querySelector('.top-nav  ').classList.add('fixed');
	// 	} else {
	// 		document.querySelector('.top-nav  ').classList.remove('fixed');
	// 	}
	// }
	// window.addEventListener('resize', () => {
	// 	whenResize();
	// }, { passive: true });
	// whenResize();
	// let defaultSl = {
	// 	spaceBetween: 0,
	// 	lazy: {
	// 		loadPrevNext: true,
	// 	},
	// 	watchOverflow: true,
	// 	spaceBetween: 0,
	// 	loop: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	pagination: {
	// 		el: ' .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true,
	// 		// renderBullet: function (index, className) {
	// 		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
	// 		// }
	// 	},
	// }
	// const swiper4 = new Swiper('.sBanners__slider--js', {
	// 	// slidesPerView: 5,
	// 	...defaultSl,
	// 	slidesPerView: 'auto',
	// 	freeMode: true,
	// 	loopFillGroupWithBlank: true,
	// 	touchRatio: 0.2,
	// 	slideToClickedSlide: true,
	// 	freeModeMomentum: true,
	// });
	// modal window

}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
} // window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }