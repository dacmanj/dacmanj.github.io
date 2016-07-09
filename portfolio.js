$("#portfolio-menu li a").on('mouseover',showPortfolioItem);

function showPortfolioItem(e) {
  $("ul#portfolio-menu li").removeClass("active");
  $(this).parent().addClass("active"); //#7cc98b
  var item = $(this).attr("href");
  $(".portfolio").hide();
  $(item).fadeIn(200);
  e.preventDefault();
}

$().ready(function() {
   //add github icon to github links
   $("a:contains('On Github')").html("<i class='fa fa-github' style='height: 18px;'></i>&nbsp;On Github");
   //activate hash if linked directly
   if (window.location.hash) { $("ul#portfolio-menu li a[href=" + window.location.hash + "]").parent().addClass("active"); $(window.location.hash).fadeIn(200);}
});
