(function ($) {
  "use strict";

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Sticky Menu
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 100) {
      $(".navbar").addClass("nav-bg");
    } else {
      $(".navbar").removeClass("nav-bg");
    }
  });

  // Background-images
  $("[data-background]").each(function () {
    $(this).css({
      "background-image": "url(" + $(this).data("background") + ")",
    });
  });

  // Shuffle js filter and masonry
  var Shuffle = window.Shuffle;
  var jQuery = window.jQuery;

  var myShuffle = new Shuffle(document.querySelector(".shuffle-wrapper"), {
    itemSelector: ".shuffle-item",
    buffer: 1,
  });

  jQuery('input[name="shuffle-filter"]').on("change", function (evt) {
    var input = evt.currentTarget;
    if (input.checked) {
      myShuffle.filter(input.value);
    }
  });

  // Check for click events on the navbar burger icon
  $(".filter-menu .button").click(function () {
    $(this).addClass("is-active").siblings().removeClass("is-active");
  });
})(jQuery);
