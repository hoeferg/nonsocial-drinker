const $howItWorks = document.querySelector('#how-it-works');
const $contentSection = document.querySelector('#intro-1');


function init() {
  if (localStorage.getItem("likedDrinks") !== null) {
    savedDrinks = JSON.parse(localStorage.getItem("likedDrinks"));
  }
  if (localStorage.getItem("likedJokes") !== null) {
    savedJokes = JSON.parse(localStorage.getItem("likedJokes"));
  }
  // if (localStorage.getItem('likedexcuses') !== null) {
  //     savedExcuses = JSON.parse(localStorage.getItem('likedescuses'))
  // }
  createAboutUs();
  createForm();
}

function createAboutUs() {
  const $aboutUsDiv = document.createElement("div");
  const $aboutUsDesc1 = document.createElement("p");
  const $aboutUsDesc2 = document.createElement("p");
  const $aboutUsDesc3 = document.createElement("p");

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

    $form.setAttribute('id', 'howItWorksForm');
    $howItWorks.setAttribute('class', 'w3-container w3-vivid-greenish-blue w3-border w3-round-xxlarge w3-card')
    $jokeInput.setAttribute('type', 'checkbox');
    $jokeInput.classList.add('button-margin');
    $jokeInput.setAttribute('id', 'jokeCheck')
    $excuseInput.setAttribute('type', 'checkbox');
    $excuseInput.setAttribute('id', 'excuseCheck')
    $excuseInput.classList.add('button-margin');
    $selectOption.setAttribute('class', 'dropdown');
    $selectOption.setAttribute('id', 'user-options-list');
    $submitBtn.setAttribute('type', 'submit');
    $submitBtn.setAttribute('value', 'submit');
    $submitBtn.setAttribute('id', 'submitBtn');
    $submitBtn.classList.add('input-margin')
    $h2.setAttribute('class', 'w3-center');
    $description.setAttribute('class', 'w3-center');
    $description.setAttribute('class', 'w3-large');
    $excuseLabel.setAttribute('class', 'w3-large');
    $jokeLabel.setAttribute('class', 'w3-large');
    $jokeLabel.classList.add('button-margin');
    $excuseLabel.classList.add('button-margin');
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
    $excuseLabel.appendChild($excuseInput)
    $form.appendChild($submitBtn);
    $h2.textContent = 'How It Works!'
    $description.textContent = 'Pick your poison from the drinks drop down and indicate whether or not you would like a joke and/or and excuse to go along with it from the options below. You will be shown a list of options on the next page that will aid you in you journey of libation and liberation.'
}

function submitHandler(event) {
    event.preventDefault();

    const drinkOption = document.querySelector('#user-options-list');

    const alcoholType = drinkOption.value;

    const wantJoke = document.getElementById('jokeCheck').checked;
    const wantExcuse = document.getElementById('excuseCheck').checked;


    localStorage.setItem('alcholType', alcoholType);
    localStorage.setItem('wantJoke', wantJoke);
    localStorage.setItem('wantExcuse', wantExcuse);

    window.location.assign('./assets/html/results.html');
}


init();
const userChoiceForm = document.querySelector('#howItWorksForm');
userChoiceForm.addEventListener('submit', submitHandler);
