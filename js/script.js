jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // swiper
  // main-view
  const swiper1 = new Swiper(".js-swiper-fade", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  });

  // works
  const swiper2 = new Swiper(".js-swiper-slide", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  // ハンバーガーメニュー
  $("#js-hamburger").click(function () {
    $("body").toggleClass("is-drawerActive");
    if ($(this).attr("aria-expanded") == "false") {
      $(this).attr("aria-expanded", "true");
      $("#js-sp-nav").attr("aria-hidden", "false");
    } else {
      $(this).attr("aria-expanded", "false");
      $("#js-sp-nav").attr("aria-hidden", "true");
    }
  });

  // main-view超えるとヘッダーの背景色変更
  $(window).on("scroll", function () {
    const sliderHeight = $(".js-main-view").height();
    if (sliderHeight - 50 < $(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
  });

  // ページトップ
  const topButton = document.getElementById("js-pagetop");
  function getScrolled() {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : document.documentElement.scrollTop;
  }
  window.onscroll = function () {
    getScrolled() > 0
      ? topButton.classList.add("is-fadein")
      : topButton.classList.remove("is-fadein");
  };
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  topButton.onclick = function () {
    scrollToTop();
  };
});
