/**
 * Main JS file for cura behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

  var $document = $(document);

  // Document ready
  $document.ready(function () {

    var $postContent = $(".post-content");
    $postContent.fitVids();

    $('.flexslider').flexslider({
      animation: "fade"
    });


    $document.on('scroll', function () {
      $('.flexslider li').css(
        'background-position-y', $document.scrollTop() / 4);
    });

    // Menu & menu button animation
    var $btn = $(".menu-icon");
    var $body = $("body");
    var $nav = $("body > nav > ul");

    $btn.on("click tap", function(e){
      e.preventDefault();
      if ($body.hasClass("nav-closed")) {
        $(this).addClass("nav-close");
        $body.toggleClass("nav-opened nav-closed");
        $nav.addClass("opened");
      } else {
        $(this).removeClass("nav-close");
        $body.toggleClass("nav-opened nav-closed");
        $nav.removeClass("opened");
      }
    });


  });

})(jQuery);
