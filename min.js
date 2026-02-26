$(document).ready(function () {

	// history.scrollRestoration = "manual"
	// window.onload = function() {
	//     setTimeout (function () {
	//         scrollTo(0,0);
	//     },0);
	// }
	if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

	window.addEventListener('load', () => {
		if (window.innerWidth <= 1400) {
			document.body.style.overflow = 'hidden';
			document.body.style.touchAction = 'none';
			setTimeout(() => {
				window.scrollTo(0, 0);
				setTimeout(() => {
					document.body.style.overflow = '';
					document.body.style.touchAction = '';
				}, 100);
			}, 50);
		}
	});


	$('.gnb').mouseover(function () {
		$('.navi,.ham').addClass('mouseover')
	})
	$('.gnb').mouseleave(function () {
		$('.navi,.ham').removeClass('mouseover')
	})

	$('.slide_drag').mouseover(function () {
		$('#cursor').addClass('drag')
		$('.cursor_skip').addClass('drag')
	})
	$('.slide_drag').mouseleave(function () {
		$('#cursor').removeClass('drag')
		$('.cursor_skip').removeClass('drag')
	})
	$('.slide_drag2').mouseover(function () {
		$('#cursor').addClass('drag2')
	})
	$('.slide_drag2').mouseleave(function () {
		$('#cursor').removeClass('drag2')
	})
	$('.cursor_cick').mouseover(function () {
		$('#cursor').addClass('click')
	})
	$('.cursor_cick').mouseleave(function () {
		$('#cursor').removeClass('click')
	})

	$('a,.btn').mouseover(function () {
		$('#cursor').addClass('arrow')
	})
	$('a,.btn').mouseleave(function () {
		$('#cursor').removeClass('arrow')
	})

	$('.call,.tel p').mouseover(function () {
		$('.tel').addClass('active')
	})
	$('.call,.tel p').mouseleave(function () {
		$('.tel').removeClass('active')
	})

	$('.location_bt').click(function () {
		location.href = "location.html"
		// $('body.main .navi,body.main .right_scroll_wrap,body.main .ham').delay(0).fadeOut(1000);
		// $(".location_pop_wrap").addClass("active");
		// $('.location_pop_bg').addClass('active');
	})

	$('.location_pop_close').click(function () {
		$('body.main .navi,body.main .right_scroll_wrap,body.main .ham').delay(0).fadeIn(1000);
		$(".location_pop_wrap").removeClass("active");
		$('.location_pop_bg').removeClass('active');
	})

	$(".guest_bt,.menu6").click(function () {
		location.href = "guest.html"
		// $(".guest_pop_wrap").addClass("active");
		// $('.guest_pop_bg').addClass('active')
		// $('body').on('scroll touchmove mousewheel', function(event) {
		// 	event.preventDefault();
		// 	event.stopPropagation();
		// 	return false;
		// });
		// $('body').css({'overflow-y':'hidden'})
		// closeSiteMenus();
	});
	$('.guest_pop_close').click(function () {
		$(".guest_pop_wrap").removeClass("active");
		$('.guest_pop_bg').removeClass('active')
		$('body').off('scroll touchmove mousewheel');
		$('body').css({ 'overflow-y': 'auto' })

	})

	$(".news_bt,.menu5").click(function () {
		$(".news_pop_wrap").addClass("active");
		$('.news_pop_bg').addClass('active')
		$('body').on('scroll touchmove mousewheel', function (event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
		$('body').css({ 'overflow-y': 'hidden' })
		closeSiteMenus();
	});
	$('.news_pop_close').click(function () {
		$(".news_pop_wrap").removeClass("active");
		$('.news_pop_bg').removeClass('active')
		$('body').off('scroll touchmove mousewheel');
		$('body').css({ 'overflow-y': 'auto' })

	})

	$('.right_scroll span').animate({ 'opacity': '1' }, 0, function bb() {
		$(this).delay(0).animate({ 'top': '9rem' }, 1800, function () {
			$(this).css({ 'top': '0', 'opacity': '0' })
			$(this).animate({ 'opacity': '1' }, 700, bb)
		})
	})

	$('body.sub .navi').delay(0).fadeIn(1000);
	$('body.sub .navi,body.sub .ham').delay(0).fadeIn(1000);


	$('.top_bt').click(function () {
		$('body,html').animate({ 'scrollTop': '0' }, 400)
	})
	/*
	$('.ham').click(function(){
		alert('준비중입니다')
	})
	*/

	const trigger = new ScrollTrigger.default({
		trigger: {
			// once: true,
			offset: {
				element: {
					x: 0,
					y: 0.05
				},
				//			viewport: {
				//                x: 0,
				//                y: (trigger, frame, direction) => {
				//                    return trigger.visible ? 0 : 0.3
				//                }
				//             }
			},
			toggle: {
				class: {
					in: 'active',
					out: 'inactive'
				}
			}

		}
	});
	trigger.add('[data-active]')
	//			.add('[data-slideInBottom]')
	//			.add('[data-fadeIn]')
	//			.add('[data-slideInBottom]')

	// 

	ham = 0
	$('.ham').click(function () {
		// alert('준비중입니다')
		if (ham == 0) {
			ham = 1;
			$(this).addClass("active");
			$('.gnb>ul').stop().fadeOut(1000)
			$('.site_wrap,.site_bg').addClass("active");
			$('.navi,.ham').addClass("over");
			$('body').on('scroll touchmove mousewheel', function (event) {
				event.preventDefault();
				event.stopPropagation();
				return false;
			});
		}
		else if (ham == 1) {
			ham = 0;
			$(this).removeClass("active");
			$('.gnb>ul').stop().fadeIn(1000)
			$('.site_wrap,.site_bg').removeClass("active");
			$('.navi,.ham').removeClass("over");
			$('body').off('scroll touchmove mousewheel');
		}
	})

	// 인트로 애니메이션 시작

	const wait = (ms) => new Promise(res => setTimeout(res, ms));
	let cancelled = false;
	let finished = false;

	// PC/모바일 체크
	const isPC = () => $(window).width() > 1400;

	// 스크롤 잠금
	function lockScroll() {
		if (isPC()) {
			$('body').on('scroll touchmove mousewheel', blockScroll);
		} else {
			$('body').addClass('locked');
			$('body.sub').removeClass('locked');
		}
	}

	// 스크롤 해제
	function unlockScroll() {
		if (isPC()) {
			$('body').off('scroll touchmove mousewheel', blockScroll);
		} else {
			$('body').removeClass('locked');
		}
	}

	// 이벤트 차단 핸들러
	function blockScroll(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	}

	// 최종 액션
	function finalReveal() {
		if (finished) return;
		finished = true;

		if (isPC()) {
			// PC (1400px 이상)
			$('body.main .navi,body.main .right_scroll_wrap,body.main .ham').delay(0).fadeIn(1000);
		} else {
			// 모바일 (1400px 이하)
			$('body.main .navi,body.main .ham').delay(0).fadeIn(1000);
		}

		$('.cursor_skip2').removeClass('show');
		$('.main_skip_wrap').fadeOut(0);
		$('.main_guest').addClass('show');
		$('.main_wrap').addClass('on');


		setTimeout(() => {
			$('.main_wrap').addClass('end');
			$('#k_popup2').addClass('show');
			$('#k_popup3').addClass('show');
			// 인트로 끝 → 스크롤 해제
			unlockScroll();
		}, 1600);
	}

	const introTimeline = [
		{ delay: 200, add: 'intro' },
		{ delay: 1800, add: 'intro2' },
		{ delay: 1400, add: 'intro3' },
		{ delay: 2000, add: 'intro4' },
		{ delay: 500, add: 'intro5' },
		{ delay: 1800, add: 'intro6' },
	];

	async function runIntroSequence() {
		const $intro = $('.intro_wrap');

		// 인트로 시작 전 대기시간
		await wait(200);

		// 인트로 시작 시 스크롤 잠금
		lockScroll();

		for (const step of introTimeline) {
			await wait(step.delay);
			if (cancelled) return;
			if (step.add) $intro.addClass(step.add);
		}

		// 마지막 애니메이션 후 딜레이 5초 뒤 skip 추가
		await wait(2000);
		if (cancelled) return;
		$intro.addClass('skip');
		finalReveal();
	}

	function scheduleSkipUI() {
		setTimeout(() => {
			$('.main_skip_wrap').fadeIn(1000);
			$('.cursor_skip2').addClass('show');
		}, 1500);
	}

	function bindSkipButton() {
		$('.main_skip_bt').on('click', function () {
			if (finished) return;
			cancelled = true;

			$('.intro_wrap').stop(true, true).addClass('skip');
			$('.cursor_skip2').removeClass('show');
			$('.main_skip_wrap').fadeOut(0);

			// 스킵 → 스크롤 해제
			unlockScroll();

			finalReveal();
		});
	}

	// --- 개발용 스킵 토글 ---
	// 1) URL에 ?devskip=1 붙이면 켜짐
	// 2) 또는 localStorage.setItem('introDevSkip','1') 로 켜기 / removeItem 으로 끄기
	function isDevSkip() {
		const q = new URLSearchParams(location.search);
		return q.get('devskip') === '1' || localStorage.getItem('introDevSkip') === '1';
	}

	// 개발용 즉시 스킵 실행 (인트로 전부 생략)
	function fastSkip() {
		// 진행 중단
		cancelled = true;

		// 인트로 UI/상태 정리
		$('.intro_wrap').stop(true, true).addClass('skip');
		$('.cursor_skip2').removeClass('show');
		$('.main_skip_wrap').hide();

		// 바로 최종 단계로 (finalReveal 내부에서 1.6초 후 end/popup/스크롤해제 실행됨)
		finalReveal();
	}

	// 초기화
	$(function () {
		// 무조건 개발용 스킵 실행
		fastSkip();
	});

	// 인트로 애니메이션 끝

	win_w = $(window).width();
	if (win_w > 1400) {
		// 

		const cursor = document.querySelector('#cursor');
		const cursorCircle = cursor.querySelector('.cursor__circle');

		const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
		const pos = { x: 0, y: 0 }; // cursor's coordinates
		const speed = 0.2; // between 0 and 1

		const updateCoordinates = e => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		}

		window.addEventListener('mousemove', updateCoordinates);


		function getAngle(diffX, diffY) {
			return Math.atan2(diffY, diffX) * 180 / Math.PI;
		}

		function getSqueeze(diffX, diffY) {
			const distance = Math.sqrt(
				Math.pow(diffX, 2) + Math.pow(diffY, 2)
			);
			const maxSqueeze = 0.15;
			const accelerator = 1500;
			return Math.min(distance / accelerator, maxSqueeze);
		}


		const updateCursor = () => {
			const diffX = Math.round(mouse.x - pos.x);
			const diffY = Math.round(mouse.y - pos.y);

			pos.x += diffX * speed;
			pos.y += diffY * speed;

			const angle = getAngle(diffX, diffY);
			const squeeze = getSqueeze(diffX, diffY);

			const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
			const rotate = 'rotate(' + angle + 'deg)';
			const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

			cursor.style.transform = translate;
			cursorCircle.style.transform = rotate + scale;
		};

		function loop() {
			updateCursor();
			requestAnimationFrame(loop);
		}

		requestAnimationFrame(loop);



		const cursorModifiers = document.querySelectorAll('[cursor-class]');

		cursorModifiers.forEach(curosrModifier => {
			curosrModifier.addEventListener('mouseenter', function () {
				const className = this.getAttribute('cursor-class');
				cursor.classList.add(className);
			});

			curosrModifier.addEventListener('mouseleave', function () {
				const className = this.getAttribute('cursor-class');
				cursor.classList.remove(className);
			});
		});


		//main
		var full_move = true;
		$("#section1").on("DOMMouseScroll mousewheel wheel", function (event, delta) {
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			if (delta > 0) {
				if ($('.main_wrap').hasClass('end') == true) {
					$('.main_wrap').removeClass('on2 end2 on end hide').addClass('on end');
				} else if ($('.main_wrap').hasClass('end2') == true) {
					$('.main_wrap').removeClass('on2 end2 on end hide').addClass('on');
					setTimeout(function () {
						$('.main_wrap').addClass('end');
					}, 1600);
				}
			} else if (delta < 0) {
				if ($('.main_wrap').hasClass('end2') == true) {
					$('body').off('scroll touchmove mousewheel');
					$.fn.fullpage.moveTo(2);
				} else if ($('.main_wrap').hasClass('end') == true) {
					$('.main_wrap').removeClass('on end').addClass('on2');
					setTimeout(function () {
						$('.main_wrap').addClass('end2');
					}, 1600);
				}
			}
		});

		//location
		var full_move = true;
		$("#section2").on("DOMMouseScroll mousewheel wheel", function (event, delta) {
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			if (delta > 0) {
				if ($('.location_wrap').hasClass('end') == true) {
					$.fn.fullpage.moveTo(1);
				} else if ($('.location_wrap').hasClass('end2') == true) {
					$('.navi,.ham,.right_scroll_wrap').removeClass('white');
					$('.location_wrap').removeClass('on2 end2').addClass('on');
					setTimeout(function () {
						$('.location_wrap').addClass('end');
					}, 1600);
				}
			} else if (delta < 0) {
				if ($('.location_wrap').hasClass('end2') == true) {
					$.fn.fullpage.moveTo(3);
				} else if ($('.location_wrap').hasClass('end') == true) {
					$('.navi,.ham,.right_scroll_wrap').addClass('white');
					$('.location_wrap').removeClass('on end').addClass('on2');
					setTimeout(function () {
						$('.location_wrap').addClass('end2');
					}, 1600);
				}
			}
		});

		//copmlex
		var full_move = true;
		$("#section3").on("DOMMouseScroll mousewheel wheel", function (event, delta) {
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			if (delta > 0) {
				if ($('.complex_wrap').hasClass('end') == true) {
					$.fn.fullpage.moveTo(2);
				} else if ($('.complex_wrap').hasClass('end2') == true) {
					$('.complex_wrap').removeClass('on2 end2').addClass('on');
					setTimeout(function () {
						$('.complex_wrap').addClass('end');
					}, 1600);
				}
			} else if (delta < 0) {
				if ($('.complex_wrap').hasClass('end2') == true) {
					$.fn.fullpage.moveTo(4);
				} else if ($('.complex_wrap').hasClass('end') == true) {
					$('.complex_wrap').removeClass('on end').addClass('on2');
					setTimeout(function () {
						$('.complex_wrap').addClass('end2');
					}, 1600);
				}
			}
		});

		const TRANSITION = 1600;

		// 어떤 섹션에서 white를 사용할지 정의
		function isWhiteSection(idx) {
			// 예시: 3번 섹션만 흰색 네비
			return [6].includes(idx);
		}

		$('#fullpage').fullpage({
			navigation: false,
			css3: true,
			verticalCentered: true,
			scrollingSpeed: TRANSITION,

			// 초기 렌더 완료 시: 시작 섹션 기준으로 1회만 세팅
			afterRender: function () {
				// fullPage는 첫 섹션이 1부터 시작
				const startIndex = 1;
				$('.navi,.ham,.right_scroll_wrap').toggleClass('white', isWhiteSection(startIndex));
			},

			// 여기서만 white를 관리한다!
			onLeave: function (index, nextIndex, direction) {
				// 1) 이동 시작 시점에 "다음 섹션" 기준으로 테마 결정
				$('.navi,.ham,.right_scroll_wrap').toggleClass('white', isWhiteSection(nextIndex));

				// 2) 섹션 전환 애니메이션 (기존 로직 유지)
				if (index === 1 && direction === 'down') {
					$('.main_wrap').removeClass('end');
					setTimeout(() => { $('.main_wrap').removeClass('on'); }, TRANSITION);

					$('.location_wrap').addClass('on');
					setTimeout(() => { $('.location_wrap').addClass('end'); }, TRANSITION);
				}

				if (index === 2 && direction === 'up') {
					$('.main_wrap').removeClass('on end');
					$('.location_wrap').removeClass('end');
					setTimeout(() => { $('.location_wrap').removeClass('on'); }, TRANSITION);

					$('.main_wrap').addClass('on2');
					setTimeout(() => { $('.main_wrap').addClass('end2'); }, TRANSITION);
				} else if (index === 2 && direction === 'down') {
					$('.location_wrap').removeClass('end');
					setTimeout(() => { $('.location_wrap').removeClass('on'); }, TRANSITION);

					$('.complex_wrap').addClass('on');
					setTimeout(() => { $('.complex_wrap').addClass('end'); }, TRANSITION);
				}

				if (index === 3 && direction === 'up') {
					$('.navi,.ham,.right_scroll_wrap').addClass('white');
					$('.complex_wrap').removeClass('end');
					setTimeout(() => { $('.complex_wrap').removeClass('on'); }, TRANSITION);

					$('.location_wrap').addClass('on2');
					setTimeout(() => { $('.location_wrap').addClass('end2'); }, TRANSITION);
				} else if (index === 3 && direction === 'down') {
					$('.complex_wrap').removeClass('end');
					setTimeout(() => { $('.complex_wrap').removeClass('on'); }, TRANSITION);

					$('.comm_wrap').addClass('on');
					setTimeout(() => { $('.comm_wrap').addClass('end'); }, TRANSITION);
				}

				if (index === 4 && direction === 'up') {
					$('.comm_wrap').removeClass('end');
					setTimeout(() => { $('.comm_wrap').removeClass('on'); }, TRANSITION);

					$('.complex_wrap').addClass('on2');
					setTimeout(() => { $('.complex_wrap').addClass('end2'); }, TRANSITION);
				} else if (index === 4 && direction === 'down') {
					$('.comm_wrap').removeClass('end');
					setTimeout(() => { $('.comm_wrap').removeClass('on'); }, TRANSITION);

					$('.unit_wrap').addClass('on');
					setTimeout(() => { $('.unit_wrap').addClass('end'); }, TRANSITION);
				}

				if (index === 5 && direction === 'up') {
					$('.unit_wrap').removeClass('end');
					setTimeout(() => { $('.unit_wrap').removeClass('on'); }, TRANSITION);

					$('.comm_wrap').addClass('on');
					setTimeout(() => { $('.comm_wrap').addClass('end'); }, TRANSITION);
				} else if (index === 5 && direction === 'down') {
					$('.unit_wrap').removeClass('end');
					setTimeout(() => { $('.unit_wrap').removeClass('on'); }, TRANSITION);

					$('.brand_wrap').addClass('on');
					setTimeout(() => { $('.brand_wrap').addClass('end'); }, TRANSITION);
				}

				if (index === 6 && direction === 'up') {
					$('.brand_wrap').removeClass('end');
					setTimeout(() => { $('.brand_wrap').removeClass('on'); }, TRANSITION);

					$('.unit_wrap').addClass('on');
					setTimeout(() => { $('.unit_wrap').addClass('end'); }, TRANSITION);
				} else if (index === 6 && direction === 'down') {
					$('.brand_wrap').removeClass('end');
					setTimeout(() => { $('.brand_wrap').removeClass('on'); }, TRANSITION);

					$('.footer').addClass('on');
					setTimeout(() => { $('.footer').addClass('end'); }, TRANSITION);
					$('header,.navi,.right_scroll_wrap,.ham').fadeOut();
				}

				if (index === 7 && direction === 'up') {
					$('.navi,.ham,.right_scroll_wrap').removeClass('white');
					$('.footer').removeClass('on');
					setTimeout(() => { $('.footer').removeClass('end'); }, TRANSITION);
					$('header,.navi,.right_scroll_wrap,.ham').fadeIn();

					$('.brand_wrap').addClass('on');
					setTimeout(() => { $('.brand_wrap').addClass('end'); }, TRANSITION);
				}
			},

			// afterLoad에서는 white를 만지지 않는다 (충돌 방지)
			afterLoad: function (anchorLink, index) {
				// 스크롤 허용 관련만 유지 (필요 시)
				$.fn.fullpage.setAllowScrolling(true);
				$.fn.fullpage.setKeyboardScrolling(true);
			}
		});

		/* -----------------------------
		   유틸 & 클릭 핸들러(white 미터치)
		------------------------------*/

		function closeSiteMenus() {
			ham = 0;
			$('.ham').removeClass("active");
			$('.gnb>ul').stop().fadeIn(1000)
			$('.site_wrap,.site_bg').removeClass("active");
			$('.navi,.ham').removeClass("over");
			$('body').off('scroll touchmove mousewheel');
		}

		$(document).on('click', '.top_bt', function () {
			$.fn.fullpage.moveTo(1);

			$('.navi,.ham,.right_scroll_wrap').removeClass('white');
			$('.main_wrap').removeClass('on2 end2').addClass('on');
			setTimeout(() => {
				$('.main_wrap').addClass('end').removeClass('end2 on2');
				$('.location_wrap').removeClass('on2 end2 on3 end3').addClass('on end');
				$('.brand_wrap').removeClass('end2 on2 on3 end3 on4 end4').addClass('on end');
			}, TRANSITION);
		});

		$(document).on('click', '.menu1', function () {
			$.fn.fullpage.moveTo(1);

			$('.navi,.ham,.right_scroll_wrap').removeClass('white');
			$('.main_wrap').removeClass('on on2 end end2').addClass('on2');
			setTimeout(() => {
				$('.main_wrap').addClass('end2').removeClass('end on');
				$('.location_wrap').removeClass('on2 end2 on3 end3').addClass('on end');
				$('.brand_wrap').removeClass('end2 on2 on3 end3 on4 end4').addClass('on end');
			}, TRANSITION);

			closeSiteMenus();
		});

		$(document).on('click', '.menu2', function () {
			$.fn.fullpage.moveTo(2);

			$('.location_wrap').addClass('on');
			setTimeout(() => {
				$('.location_wrap').addClass('end');
				$('.main_wrap').removeClass('end2 on2').addClass('on2 end2');
				$('.brand_wrap').removeClass('end2 on2 on3 end3 on4 end4').addClass('on end');
			}, TRANSITION);

			closeSiteMenus();
		});

		$(document).on('click', '.menu3', function () {
			$.fn.fullpage.moveTo(3);

			$('.premium_wrap').addClass('on');
			setTimeout(() => {
				$('.premium_wrap').addClass('end');
				$('.main_wrap').removeClass('on2 end2').addClass('on2 end2');
				$('.location_wrap').removeClass('on2 end2 on3 end3').addClass('on3 end3');
				$('.brand_wrap').removeClass('end2 on2 on3 end3 on4 end4').addClass('on end');
			}, TRANSITION);

			closeSiteMenus();
		});

		$(document).on('click', '.menu4', function () {
			$.fn.fullpage.moveTo(4);

			$('.navi,.ham,.right_scroll_wrap').addClass('white');
			$('.brand_wrap').removeClass('on end end2 on2 on3 end3 on4 end4')
			$('.brand_wrap').addClass('on');
			setTimeout(() => {
				$('.brand_wrap').addClass('end');
				$('.main_wrap').removeClass('end2 on2').addClass('on2 end2');
				$('.location_wrap').removeClass('on2 end2 on3 end3').addClass('on3 end3');
			}, TRANSITION);

			closeSiteMenus();
		});

		$(document).on('click', '.menu7', function () {
			$.fn.fullpage.moveTo(5);

			$('.contact_wrap').addClass('on');
			setTimeout(() => {
				$('.contact_wrap').addClass('end');
				$('.main_wrap').removeClass('end2 on2').addClass('on2 end2');
				$('.location_wrap').removeClass('on2 end2 on3 end3').addClass('on3 end3');
				$('.brand_wrap').removeClass('end').addClass('on end');
			}, TRANSITION);

			closeSiteMenus();
		});


	} else if (win_w <= 1400) {

		document.querySelectorAll('.site_list a').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const targetId = this.getAttribute('data-target');
				const targetElement = document.getElementById(targetId);

				if (targetElement) {
					const yOffset = -40;
					const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

					window.scrollTo({
						top: y,
						behavior: 'smooth'
					});

					ham = 0;
					$('.ham').removeClass("active");
					$('.site_list2').removeClass("open");
					$('.site_wrap,.site_bg,.world_bg,.world_content').removeClass("active");
					$('.navi,.ham').removeClass("over");
					$('.site_list2').removeClass("open");
				}
			});
		});



		// var menuH = document.querySelector(".navi").offsetHeight;
		var summaryT = document.querySelector(".main02").offsetTop;


		$(document).on('click', '.menu1', function () {
			// window.scrollTo({top:mainT - menuH, behavior:'smooth'});
			window.scrollTo({ top: summaryT, behavior: 'smooth' });
			ham = 0;
			$('.ham').removeClass("active");
			$('.site_wrap,.site_bg,.world_bg,.world_content').removeClass("active");
			$('.navi,.ham').removeClass("over");
			$('body').css({ 'overflow-y': 'auto' })
		});

	}

});





$(window).scroll(function () {

	sc = $(window).scrollTop();
	footerTop = $('.footer').offset().top - $(window).height()
	mainH = $('.brand01').height()

	if (sc > 21) {
		$('.navi').addClass('active')
		$('.ham').addClass('active2')
		$('.right_open').addClass('active')
		$('.site_list').addClass('active2')
	}
	if (sc < 21) {
		$('.navi').removeClass('active')
		$('.ham').removeClass('active2')
		$('.right_open').removeClass('active')
		$('.site_list').removeClass('active2')
	}

	if (mainH <= sc) {
		$('.main_wrap').removeClass('on');
	} else {
		$('.main_wrap').addClass('on');
	}

	if (footerTop <= sc) {
		$('.footer').addClass('active');
	} else {
		$('.footer').removeClass('active');
	}

});



$(function () {

	// 1️⃣ 상단 메뉴 클릭 시 토글 (모바일 전용)
	$('.site_list > li').on('click', function (e) {
		if ($(window).width() > 1400) return;

		// 서브메뉴 안의 a 클릭이면 전파만 차단하고 그대로 이동하도록 리턴
		if ($(e.target).closest('.site_list2 a').length) {
			e.stopPropagation();
			return;
		}

		var $li = $(this);
		var $topA = $li.children('a').first();
		var $submenu = $li.children('.site_list2');

		// 상단 a 클릭 시에만 토글 작동
		if (($topA.is(e.target) || $topA.has(e.target).length) && $submenu.length) {
			e.preventDefault();

			// 다른 li들 닫기
			$('.site_list > li.open').not($li).removeClass('open');
			// 현재 li 토글
			$li.toggleClass('open');
		}
	});

	// 2️⃣ 메뉴 외부 클릭 시 열린 메뉴 닫기
	$(document).on('click', function (e) {
		if ($(window).width() > 1400) return;
		if (!$(e.target).closest('.site_list').length) {
			$('.site_list > li.open').removeClass('open');
		}
	});

	// 3️⃣ 리사이즈 시 정리
	$(window).on('resize', function () {
		if ($(window).width() > 1400) {
			$('.site_list > li.open').removeClass('open');
		}
	});

	// 4️⃣ site_list2 내부 링크는 무조건 클릭 가능하도록 방탄 처리
	$(document).on('click touchend', '.site_list2 a', function (e) {
		if ($(window).width() > 1400) return;

		var a = this;
		var href = a.getAttribute('href');
		var blank = a.target === '_blank';

		// 전파만 막고 기본동작은 허용
		e.stopPropagation();

		// fullPage.js 등으로 스크롤 잠겨있을 때 잠금 해제
		if ($.fn.fullpage && $.fn.fullpage.setAllowScrolling) {
			$.fn.fullpage.setAllowScrolling(true);
			$.fn.fullpage.setKeyboardScrolling(true);
		}

		// 다른 코드가 preventDefault 걸었을 때도 이동 보장
		if (href && href !== '#') {
			setTimeout(function () {
				if (blank) window.open(href, '_blank');
				else window.location.href = href;
			}, 0);
		}
	});

});

$(document).ready(function () {
	$(window).on('scroll', function () {
		if ($('.location04').hasClass('inactive')) {
			$('.location_pop_box').removeClass('active');
			$('.location_pop_bg').removeClass('active');
		}
	});

	// 커뮤니티 이미지 슬라이더 자동 전환
	let currentCommSlide = 0;
	const commSlides = $('.comm_img_slide');
	if (commSlides.length > 0) {
		setInterval(function () {
			commSlides.removeClass('active');
			currentCommSlide = (currentCommSlide + 1) % commSlides.length;
			commSlides.eq(currentCommSlide).addClass('active');
		}, 3000);
	}
});