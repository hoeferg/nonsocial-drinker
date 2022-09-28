
function createAboutUs() {
  const $aboutUsDiv = document.createElement('div');
  const $aboutUsDesc1 = document.createElement('p');
  const $aboutUsDesc2 = document.createElement('p');
  const $aboutUsDesc3 = document.createElement('p');

  document.body.appendChild($aboutUsDiv);
  $aboutUsDiv.appendChild($aboutUsDesc1);
  $aboutUsDiv.appendChild($aboutUsDesc2);
  $aboutUsDiv.appendChild($aboutUsDesc3);

  $aboutUsDesc1.textContent =
    'It is our hope that you will find this app fun while you are out in social situations.';
    $aboutUsDesc2.textContent =
  'We only say that the app is for the socially awkward because it was built by the socially awkward.';
  $aboutUsDesc3.textContent = 
  ' Its like that weird item on your friends coffee table that prompts conversation and inspires connection.';
  console.log($aboutUsDesc1.textContent);

  const $appDiv = document.createElement('div');
  const $appDesc = document.createElement('p');
  const $appDesc2 = document.createElement('p');
  document.body.appendChild($appDiv);
  $appDiv.appendChild($appDesc);
  $appDiv.appendChild($appDesc2);
  $appDesc.textContent =
    'This app will generate a cocktail, a joke and an excuse to get yourself on those getaway sticks and hightail it out of any truly awkward situation.';
    $appDesc2.textContent =
  'Not only is it an app for the socially awkward but it can help you escape the socially awkward… PURE, GENIUS!';

  console.log($appDesc);
}
 createAboutUs();

