var hash=window.location.hash;
var redirect = "";
switch(hash) {
  case "#openenrollment":
    redirect = "/tagged/portfolio/#/page-1/id-147267515253";
    break;
  default:
    redirect = "/tagged/portfolio";

}
window.location = redirect;
