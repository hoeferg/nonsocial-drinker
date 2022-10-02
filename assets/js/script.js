const $howItWorks = document.querySelector('#how-it-works');
const $contentSection = document.querySelector('#intro-1');
const $quickFavs = document.querySelector('#Quickfavs');
const $responsible = document.querySelector('#responsible');


function init() {

  createAboutUs();
  createForm();
  creatQuickFavs();
  createResponsibleFooter();

}

function createAboutUs() {
  const $aboutUsDiv = document.createElement("div");
  const $aboutUsDesc1 = document.createElement("p");
  const $aboutUsDesc2 = document.createElement("p");
  const $aboutUsDesc3 = document.createElement("p");

  $aboutUsDesc1.setAttribute('class', 'w3-center');
  $aboutUsDesc2.setAttribute('class', 'w3-center');
  $aboutUsDesc3.setAttribute('class', 'w3-center');

  $contentSection.appendChild($aboutUsDiv);
  $aboutUsDiv.appendChild($aboutUsDesc1);
  $aboutUsDiv.appendChild($aboutUsDesc2);
  $aboutUsDiv.appendChild($aboutUsDesc3);

  $aboutUsDesc1.textContent =
    "It is our hope that you will find this app fun while you are out in social situations.";
  $aboutUsDesc2.textContent =
    "We only say that the app is for the socially awkward because it was built by the socially awkward.";
  $aboutUsDesc3.textContent =
    " Its like that weird item on your friends coffee table that prompts conversation and inspires connection.";
  //console.log($aboutUsDesc1.textContent);

  const $appDiv = document.createElement("div");
  const $appDesc = document.createElement("p");
  const $appDesc2 = document.createElement("p");

  $appDesc.setAttribute('class', 'w3-center');
  $appDesc2.setAttribute('class', 'w3-center');

  $contentSection.appendChild($appDiv);
  $appDiv.appendChild($appDesc);
  $appDiv.appendChild($appDesc2);
  $appDesc.textContent =
    "This app will generate a cocktail, a joke and an excuse to get yourself on those getaway sticks and hightail it out of any truly awkward situation.";
  $appDesc2.textContent =
    "Not only is it an app for the socially awkward but it can help you escape the socially awkward… PURE, GENIUS!";

}

function createForm() {
  const $form = document.createElement("form");
  const $h2 = document.createElement("h2");
  const $description = document.createElement("p");
  const $submitBtn = document.createElement("button");
  const $selectOption = document.createElement("select");
  const $jokeLabel = document.createElement("label");
  const $jokeInput = document.createElement("input");
  const $excuseLabel = document.createElement("label");
  const $excuseInput = document.createElement("input");

  const $alcoholOptions = [
    "--Select your alcohol--",
    "Vodka",
    "Tequila",
    "Rum",
    "Gin",
    "Whiskey",
  ];
  for (let i = 0; i < $alcoholOptions.length; i++) {
    const $alcoholChoices = document.createElement("option");
    $alcoholChoices.textContent = $alcoholOptions[i];
    if (i > 0) {
      $alcoholChoices.setAttribute("value", $alcoholOptions[i]);
    } else {
      $alcoholChoices.setAttribute("value", "");
    }
    $selectOption.append($alcoholChoices);
  }

  $form.setAttribute('class', 'w3-center');
  $form.setAttribute('id', 'howItWorksForm');
  $howItWorks.setAttribute('class', 'w3-container w3-vivid-greenish-blue w3-border w3-round-xxlarge w3-card')
  $jokeInput.setAttribute('type', 'checkbox');
  $jokeInput.setAttribute('class', 'w3-check');
  $jokeInput.classList.add('button-margin');
  $jokeInput.setAttribute('id', 'jokeCheck')
  $excuseInput.setAttribute('type', 'checkbox');
  $excuseInput.setAttribute('class', 'w3-check');
  $excuseInput.setAttribute('id', 'excuseCheck')
  $excuseInput.classList.add('button-margin2');
  $selectOption.setAttribute('class', 'w3-select w3-border');
  $selectOption.setAttribute('style', 'width:13%;')
  $selectOption.setAttribute('id', 'user-options-list');
  $submitBtn.setAttribute('type', 'submit');
  $submitBtn.setAttribute('value', 'submit');
  $submitBtn.setAttribute('id', 'submitBtn');
  $submitBtn.setAttribute('class', 'w3-button w3-border-black w3-white');
  $submitBtn.classList.add('input-margin', "w3-round");
  $h2.setAttribute('class', 'w3-center');
  $description.setAttribute('class', 'w3-center');
  $description.setAttribute('class', 'w3-large');
  $excuseLabel.setAttribute('class', 'w3-large');
  $jokeLabel.setAttribute('class', 'w3-large');
  $jokeLabel.classList.add('button-margin');
  $excuseLabel.classList.add('button-margin');
  $h2.textContent = 'How It Works!'
  $description.textContent = 'Pick your poison from the drinks drop down and indicate whether or not you would like a joke and/or and excuse to go along with it from the options below. You will be shown a list of options on the next page that will aid you in you journey of libation and liberation.'
  $submitBtn.textContent = 'SEE WHAT YOU GET!'
  $jokeLabel.textContent = 'Jokes!'
  $excuseLabel.textContent = 'Excuses!'

  $howItWorks.appendChild($form);
  $form.appendChild($h2);
  $form.appendChild($description);
  $form.appendChild($selectOption);
  $form.appendChild($jokeLabel);
  $jokeLabel.appendChild($jokeInput);
  $form.appendChild($excuseLabel);
  $excuseLabel.appendChild($excuseInput);
  $form.appendChild($submitBtn);
}

function submitHandler(event) {
  event.preventDefault();

  const drinkOption = document.querySelector('#user-options-list');

  const alcoholType = drinkOption.value;

  const wantJoke = document.getElementById('jokeCheck').checked;
  const wantExcuse = document.getElementById('excuseCheck').checked;


  localStorage.setItem('alcoholType', alcoholType);
  localStorage.setItem('wantJoke', wantJoke);
  localStorage.setItem('wantExcuse', wantExcuse);

  window.location.assign('./assets/html/results.html');
}


function creatQuickFavs() {

  const $h2 = document.createElement('h2')
  const $description = document.createElement('p');
  const $goToFavs = document.createElement('button');

  $quickFavs.setAttribute('class', 'w3-container w3-vivid-greenish-blue w3-border w3-round-xxlarge w3-card w3-center')
  $h2.setAttribute('class', 'w3-center')
  $h2.classList.add('favsh2')
  $description.setAttribute('class', 'w3-center');
  $description.setAttribute('class', 'w3-xlarge');
  $goToFavs.setAttribute('class', 'w3-button w3-border-black w3-white ')
  $goToFavs.classList.add('input-margin')
  $h2.textContent = 'Come Here Often?'
  $description.textContent = "Been here before? Forget that delectable drink and knee-slapper of a joke? Don't worry, we got you covered! If you saved any of your options to your favorites just click the button below and we'll get you socializing in no time! Nothing saved? Use the menu above and be sure to save what works!"
  $goToFavs.textContent = 'Go To Favorites!'

  $quickFavs.appendChild($h2)
  $h2.append($description)
  $quickFavs.append($goToFavs)
}

function createResponsibleFooter() {
  const $text = document.createElement('p')
  const $hotline = document.createElement('p')

  // $responsible.setAttribute('class', 'w3-container w3-round-xxlarge w3-safety-blue w3-border')
  $text.setAttribute('class', 'w3-center');
  $hotline.setAttribute('class', 'w3-center');

  $text.textContent = "All of us with Non-social drinker would like to remind you to please enjoy the app, and drinking, responsibly."
  $hotline.textContent = " If you or a loved one is struggling with alcohol abuse please do not hesitate to call SAMHSA's national hotline @ 1 (800) 662-HELP (4357)! "

  $responsible.appendChild($text);
  $responsible.appendChild($hotline)
}

init();

$quickFavs.addEventListener('click', function () {
  window.location.assign('assets/html/favorites.html')
});

const userChoiceForm = document.querySelector('#howItWorksForm');
userChoiceForm.addEventListener('submit', submitHandler);

