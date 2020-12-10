$(document).ready(function () {
  $("h1").css("color", "red");
  $("h1").addClass("big-title margin-50");
  $("h1").text("Bye");
  $("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
  });

  $(document).keydown(function (event) {
    $("h1").text(event.key);
  });

  // $("h1").click(function () {
  //   $("h1").css("color", "purple");
  // });

  // After/Before the Content
  // $("h1").after("<button>Test</button>");
  // $("h1").before("<button>Test</button>");
  //Inside the Content
  // $("h1").append("<button>Test</button>");
  // $("h1").prepend("<button>Test</button>");

  // $("button").text("Don't Click Me");
  // $("button").html("<em>My</em>");
  $("button").click(function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
  });

  // $("h1").hide();
  // $("h1").show();
  // $("h1").toggle();
  // $("h1").fadeOut();
  // $("h1").fadeIn();
  // $("h1").fadeToggle();
  // $("h1").slideUp();
  // $("h1").slideDown();
  // $("h1").slideToggle();
  // $("h1").animate({opacity: 0.5});

  // $("input").keydown(function (event) {
  //   console.log(event.key);
  // })

  // $("img").attr("src");
  // $("a").attr("href","https://www.bing.com");
});
