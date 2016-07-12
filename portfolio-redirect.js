var hash=window.location.hash;
var redirect = "";
switch(hash) {
  case "#openenrollment":
    redirect = "/tagged/portfolio/#/page-1/id-147267515253";
    break;
  case "grouptextalert": //is hash correct
    redirect = "/tagged/portfolio/#/page-1/id-147267569713";
    break;
  case "invoicing":
    redirect = "/tagged/portfolio/#/page-1/id-147267612063";
    break;
  case "letterhead":
    redirect = "/tagged/portfolio/#/page-1/id-147267761458";
    break;
  case "irssearch":
    redirect = "/tagged/portfolio/#/page-1/id-147267335613";
    break;
  case "congressional-map":
    redirect = "/tagged/portfolio/#/page-1/id-147267188198";
    break;
  case "sfe-website":
    redirect = "/tagged/portfolio/#/page-1/id-147266818418";
    break;
    redirect = "/tagged/portfolio/#/page-1/id-147266640543";
  case "chaptermap":
    redirect = "/tagged/portfolio/#/page-1/id-147266640543";
    break;
  default:
    redirect = "/tagged/portfolio";

}
window.location = redirect;
