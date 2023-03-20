// Adapted from "Single Page Apps for GitHub Pages"
// Checks current URL and changes it to another based on a redirect list

// TODO IMPORTANT: If site is moved to a custom domain instead of a github projects page, this variable should be changed to 0 since there's no subdomain on the root
var pathSegmentsToKeep = 1;

var l = window.location;
var extension = "/" + l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/');
switch (extension) {
  case "/wp-content/uploads/2020/02/white-paper-building-digital-credential-infrastructure-future.pdf":
    l.replace(l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') + l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + "/docs/DCC-white-paper-building-digital-credential-infrastructure-future.pdf");
    break;
  default:
    break;
}