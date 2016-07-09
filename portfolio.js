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
   buildMenu();
   $(".portfolio").show();
});

function buildMenu() {
    var menu = $("ul#portfolio-menu");
    if (!menu) return;
    var items = $("div.portfolio");
    $(items).each(function(e) {
      console.log($(this));
      console.log($(this).attr("id"));
      console.log($("h2",this));
      var new_menu_item = $("<li><a href='#" + $(this).attr("id") + "'>" + "test" + "</a></li>");
      menu.append(new_menu_item);
    })
}

/*
<li><a href="#responsive">Responsive Web Design</a></li>
<li><a href="#chaptermap">Searchable Chapter Map</a></li>
<li><a href="#sfe-website">Website Theming/CMS Implementation</a></li>
<li><a href="#congressional-map">Congressional District Mashup</a></li>
<li><a href="#irssearch">Nonprofit Database Search Tool</a></li>
<li><a href="#openenrollment">Interactive Open-Enrollment Tool</a></li>
<li><a href="#twilio">Group Text Alert App</a></li>
<li><a href="#twilio">Group Text Alert App</a></li>
*/
