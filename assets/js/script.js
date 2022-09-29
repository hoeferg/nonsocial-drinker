


function init() {
    createAboutUs();
    createForm();
}

function createAboutUs() {
    const $aboutUsDiv = document.createElement('div');
    const $aboutUsDesc1 = document.createElement('p');
    const $aboutUsDesc2 = document.createElement('p');
    const $aboutUsDesc3 = document.createElement('p');

    $contentSection.appendChild($aboutUsDiv);
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
    $contentSection.appendChild($appDiv);
    $appDiv.appendChild($appDesc);
    $appDiv.appendChild($appDesc2);
    $appDesc.textContent =
        'This app will generate a cocktail, a joke and an excuse to get yourself on those getaway sticks and hightail it out of any truly awkward situation.';
    $appDesc2.textContent =
        'Not only is it an app for the socially awkward but it can help you escape the socially awkward… PURE, GENIUS!';

    console.log($appDesc);
}

function createForm() {
    const $form = document.createElement('form');
    const $h2 = document.createElement('h2');
    const $description = document.createElement('p');
    const $jokeInput = document.createElement('input');
    const $submitBtn = document.createElement('button');
    const $inputField = document.createElement('input');

    $jokeInput.setAttribute('type', 'checkbox');
    $inputField.setAttribute('type', 'text');
    $submitBtn.setAttribute('type', 'submit');
    $submitBtn.setAttribute('value', 'submit');
    $submitBtn.textContent = 'Lets go!'

    $howItWorks.appendChild($form);
    $form.appendChild($h2);
    $form.appendChild($description);
    $form.appendChild($inputField)
    $form.appendChild($jokeInput);
    $form.appendChild($submitBtn);
    $h2.textContent = 'How It Works!'
    $description.textContent = 'Pick your poison from the drinks  drop down and indicate whether or not you would like a joke and/or and excuse to go along with it from the options below. You will be shown a list of options on the next page that will aid you in you journey of libation and liberation.'
    $form.setAttribute('id', 'how-it-works');
}


// This function will hide the header when called
function hideHeader() {
    $header.setAttribute("class", "custom-display");
}

// This function can be passed a parent element and will remove its children
function refreshDisplay(parentElement) {

    while (parentElement.firstChild) {

        parentElement.removeChild(parentElement.firstChild);

    }

}

function displayDrinkInforamtion(drinkData) {

    // These will be the main sections that will contain all content
    const $section1 = document.createElement('section');
    $section1.setAttribute('data-name', 'drinks');

    // Sections for header and unordered list
    const $drinkContentSection = document.createElement('section');

    // Section for buttons, will use twice for each main section
    const $buttonSection = document.createElement('section');
    $buttonSection.setAttribute('data-name', 'drinks-buttons');

    // Headings for each category
    const $drinkHeader = document.createElement('h2');

    // Unordered list for each category
    const $drinkList = document.createElement('ul');

    // Both refresh and save button
    const $button1 = document.createElement('button');
    const $button2 = document.createElement('button');

    // Assign text value for header and appends to content section
    $drinkHeader.textContent = "Drinks";
    $drinkContentSection.append($drinkHeader);

    // Assigns text value and attributes for buttons and appends them to their section
    $button1.textContent = "Regenerate";
    $button2.textContent = "Add to Favorites";
    $button1.setAttribute('type', 'click');
    $button1.setAttribute('data-name', 'regenerate');
    $button2.setAttribute('type', 'click');
    $button2.setAttribute('data-name', 'favorites');
    $button1.setAttribute('value', 'click');
    $button2.setAttribute('value', 'click');
    $buttonSection.append($button1);
    $buttonSection.append($button2);

    // Uses for loops to iterate through drinkData array to get drink names and assigns them as text value for list item
    // List items are then appended to the drinks list
    // TODO: connect the drinks data properly
    for (let i = 0; i < 3; i++) {
        const $contentItem = document.createElement('li');

        $contentItem.textContent = drinkData[i].drink_name;

        $drinkList.append($contentItem);
    }

    // Appends drink list to content section
    $drinkContentSection.append($drinkList);

    // Appends content section and button section to main section
    $section1.append($drinkContentSection);
    $section1.append($buttonSection);

    $contentSection.append($section1);
}

function displayJokeInforamtion(jokeDataArray) {

    // These will be the main section that will contain all content
    const $section2 = document.createElement('section');
    $section2.setAttribute('data-name', 'jokes');


    // Section for header and unordered list
    const $jokeContentSection = document.createElement('section');

    // Section for buttons
    const $buttonSection = document.createElement('section');
    $buttonSection.setAttribute('data-name', 'jokes-buttons');


    // Headings for each category
    const $jokeHeader = document.createElement('h2');

    // Unordered list for each category
    const $jokeList = document.createElement('ul');

    // Both refresh and save button
    const $button1 = document.createElement('button');
    const $button2 = document.createElement('button');

    // Assign text value for header and appends to content section
    $jokeHeader.textContent = "Jokes";
    $jokeContentSection.append($jokeHeader);

    // Assigns text value and attributes for buttons and appends them to their section
    $button1.textContent = "Regenerate";
    $button2.textContent = "Add to Favorites";
    $button1.setAttribute('type', 'click');
    $button1.setAttribute('data-name', 'regenerate');
    $button2.setAttribute('type', 'click');
    $button2.setAttribute('data-name', 'favorites');
    $button1.setAttribute('value', 'click');
    $button2.setAttribute('value', 'click');
    $buttonSection.append($button1);
    $buttonSection.append($button2);
    $buttonSection.append($button2);

    // Uses for loops to iterate through jokeData array to get jokes and assigns them as text value for list item
    // List items are then appended to the jokes list
    // TODO: connect the jokes data properly also may need to refactor if joke is a two liner
    for (let i = 0; i < 3; i++) {
        const $contentItem = document.createElement('li');

        $contentItem.textContent = jokeDataArray[i].joke;

        $jokeList.append($contentItem);
    }

    // Appends joke list to section
    $jokeContentSection.append($jokeList);

    // Appends content section and button section to main section
    $section2.append($jokeContentSection);
    $section2.append($buttonSection);

    $contentSection.append($section2);
}
// hideHeader();

function getJoke() {
    // jokeInput = document.querySelector("#jokeInput")
    let requestUrl = `https://v2.jokeapi.dev/joke/Programming,Misc?`
    fetch(requestUrl, {
        method: 'GET',
})
        .then(function (response) {
            if (response.ok) {
                response.json()

                    .then(function (data) {
                        console.log(data);
                    displayJokeInforamtion(data);
                    })
            }
        })
}
console.log(getJoke())



// refreshDisplay();

function getCocktail() {
    let ingredients = 'alcoholType'
    let $url = `https://api.api-ninjas.com/v1/cocktail?ingredients=${ingredients}`

    fetch($url, {
        method: 'GET',
        headers: { 'X-Api-Key': 'OuLOQXkRIPUQZ/oPSLdQaA==newehym4gENucVSM' },

    })
        .then(function (response) {
            if (response.ok) {
                response.json()

                    .then(function (data) {
                        console.log(data);
                    })
            }
        })
}

function excuse() {
	
	let person = ['mom', 'dad', 'grandma', 'grandpa', 'sister', 'brother'];
	let action = ['broke', 'snapped', 'lost', 'chased'];
	let event = ['computer', 'project', 'report', 'dog', 'cat', 'goose'];
	
	let who = person[Math.floor(Math.random()*person.length)+0];
	let did = action[Math.floor(Math.random()*action.length)+0];
	let what = event[Math.floor(Math.random()*event.length)+0];
	
	return `My ${who} ${did} my ${what}.`
	
}
console.log(excuse())

