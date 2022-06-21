import onNavigate from "part:@sanity/base/router/onNavigate";

if (onNavigate) {
  console.log("onN");
  onNavigate(destinationUrl);
}
