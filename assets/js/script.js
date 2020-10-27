$(function () {
  $(".dtr-portfolio-content").slice(0, 3).show();

  $("#loadMore").on("click", function (e) {
    e.preventDefault();

    $(".dtr-portfolio-content:hidden").slice(0, 3).slideDown();
    if ($(".dtr-portfolio-content:hidden").length == 0) {
      $("#load").fadeOut("slow");
    }

    $("html,body").animated(
      {
        scrollTop: $(this).offset().top,
      },
      1500
    );
  });
});
