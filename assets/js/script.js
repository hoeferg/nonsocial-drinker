//  Create Summary Section
// //const $aboutUS = document.querySelector('#about-us');
// const $thisApp =document.querySelector('#this-app');

function hideAboutUS() {
  $aboutUS.setAttribute("class", "custom-display ");
}

function createAboutUs() {
  const $aboutUS = document.createElement("div");
  const $AboutUsDesc = document.createElement("p");
  const $appDiv = document.createElement("div");
  const $appDesc = document.createElement("p");

  document.body.appendChild($aboutUS);
  $aboutUS.appendChild($AboutUsDesc);
  document.body.appendChild($appDiv0);
  $appDesc.appendChild($appDesc);

  $AboutUsDesc.textContent =
    "It is our hope that you will find this app fun while you are out in social situations.";
  ("We only say that the app is for the socially awkward because it was built by the socially awkward.");
  ("It’s like that weird item on your friends coffee table that prompts conversation and inspires connection.");

  $appDesc.textContent =
    "This app will generate a cocktail, a joke and an excuse to get yourself on those getaway sticks and hightail it out of any truly awkward situation.";
    Not only is it an app for the socially awkward but it can help you escape the socially awkward… PURE, GENIUS!
}
