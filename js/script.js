document.addEventListener("DOMContentLoaded", function () {
  // preload
  $(window).load(function () {
    $(".spinner").fadeOut(500);
    $("#loader").slideToggle(700);
    $("body").removeClass("preload");
  });

  // height header
  $("#header-cover").height($(window).height());
  $(window).resize(function () {
    $("#header-cover").height($(window).height());
  });

  // margin content
  $(window)
    .on("resize", function () {
      var height = Math.ceil($("#header-cover").height());
      $("#content").css({ marginTop: height });
    })
    .trigger("resize");

  // menu on scroll
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > $(window).innerHeight() - 140) {
      $("#menu-row").removeClass("large").addClass("small").fadeIn("slow");
      $("#menu-wrapper").removeClass("large").addClass("small").fadeIn("slow");
      $("#logo").removeClass("large").addClass("small").fadeIn("slow");
      $("#menu ul li a").removeClass("large").addClass("small").fadeIn("slow");
    } else {
      $("#menu-row").removeClass("small").addClass("large").fadeIn("slow");
      $("#menu-wrapper").removeClass("small").addClass("large").fadeIn("slow");
      $("#logo").removeClass("small").addClass("large").fadeIn("slow");
      $("#menu ul li a").removeClass("small").addClass("large").fadeIn("slow");
    }
  });

  $(window)
    .resize(function () {
      console.log("resize called");
      var width = $(window).width();
      if (width <= 568) {
        $("#menu-last").removeClass("last");
        $("#menu-last-mobile").addClass("last");
        $("#project-main-photo-id").removeClass("same-height");
        $("#project-description").removeClass("same-height");
      } else {
        $("#menu-last").addClass("last");
        $("#menu-last-mobile").removeClass("last");
        $("#project-main-photo-id").addClass("same-height");
        $("#project-description").addClass("same-height");
      }
    })
    .resize(); //trigger the resize event on page load.
});
