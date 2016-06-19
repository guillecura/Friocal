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


  });

})(jQuery);
