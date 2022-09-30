const $greetingHeader = document.querySelector('#greeting');
const $howItWorks = document.querySelector('#how-it-works');
const $contentSection = document.querySelector('#content-section');
const $favoriteDrinksList = document.querySelector('#favorite-drinks-list')
const $favoriteJokesList = document.querySelector('#favorite-jokes-list')
const $favoriteExcusesList = document.querySelector('#favorite-excuses-list')
const $clearAll = document.querySelector('#clear-all')


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
    const $submitBtn = document.createElement('button');
    const $selectOption = document.createElement('select');
    const $jokeLabel = document.createElement('label');
    const $jokeInput = document.createElement('input');
    const $excuseLabel = document.createElement('label');
    const $excuseInput = document.createElement('input');


    const $alcoholOptions = ['--Select your alcohol--', 'Vodka', 'Tequila', 'Rum', 'Gin', 'Whiskey']
    for (let i = 0; i < $alcoholOptions.length; i++) {
        const $alcholChoices = document.createElement('option');
        $alcholChoices.textContent = $alcoholOptions[i]
        if (i > 0) {
            $alcholChoices.setAttribute('value', $alcoholOptions[i])
        } else {
            $alcholChoices.setAttribute('value', '')
        }
        $selectOption.append($alcholChoices)
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

// This function will hide the header when called
function hideHeader() {
    $greetingHeader.setAttribute("class", "custom-display");
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

    //* ID FOR REFRESH DRINKS BUTTON SECTION
    $buttonSection.setAttribute('id','drinks-refresh');

    $buttonSection.setAttribute('data-name', 'drinks-buttons');

    // Headings for each category
    const $drinkHeader = document.createElement('h2');

    // Unordered list for each category
    const $drinkList = document.createElement('ul');

    //* ID FOR DISPLAYED DRINKS LIST
    $drinkList.setAttribute('id', 'displayed-drinks');

    // Refresh button
    const $button1 = document.createElement('button');

    const prevDisplayedDrinks = [];

    // Assign text value for header and appends to content section
    $drinkHeader.textContent = "Drinks";
    $drinkContentSection.append($drinkHeader);

    // Assigns text value and attributes buttons and appends to section
    $button1.textContent = "Regenerate";
    $button1.setAttribute('type', 'click');
    $button1.setAttribute('data-name', 'regenerate');
    $button1.setAttribute('value', 'click');
    $buttonSection.append($button1);

    // Uses for loops to iterate through drinkData array to get drink names and assigns them as text value for list item
    // List items are then appended to the drinks list
    // TODO: connect the drinks data properly
    for (let i = 0; i < 3; i++) {
        const $contentItem = document.createElement('li');
        const $itemText = document.createElement('p');
        const $saveButton = document.createElement('button');

        $saveButton.textContent = "Save Drink";
        $saveButton.setAttribute('type', 'click');
        $saveButton.setAttribute('value', 'click');

        const drinkName = getRandomDrink(drinkData, prevDisplayedDrinks);

        $saveButton.setAttribute('data-name', drinkName);

        prevDisplayedDrinks.push(drinkName);

        $itemText.textContent = drinkName;
        $contentItem.append($itemText)
        $contentItem.append($saveButton);

        $drinkList.append($contentItem);
    }

    // Appends drink list to content section
    $drinkContentSection.append($drinkList);

    // Appends content section and button section to main section
    $section1.append($drinkContentSection);
    $section1.append($buttonSection);

    $howItWorks.append($section1);
}

function displayJokeInforamtion() {

    // These will be the main section that will contain all content
    const $section2 = document.createElement('section');
    $section2.setAttribute('data-name', 'jokes');


    // Section for header and unordered list
    const $jokeContentSection = document.createElement('section');

    // Section for buttons
    const $buttonSection = document.createElement('section');

    //* ID FOR REFRESH JOKES BUTTON SECTION
    $buttonSection.setAttribute('id','jokes-refresh');
    $buttonSection.setAttribute('data-name', 'jokes-buttons');


    // Headings for each category
    const $jokeHeader = document.createElement('h2');

    // Unordered list for each category
    const $jokeList = document.createElement('ul');

    //* ID FOR DISPLAYED JOKES LIST
    $jokeList.setAttribute('id','displayed-jokes');

    // Both refresh and save button
    const $button1 = document.createElement('button');

    // Assign text value for header and appends to content section
    $jokeHeader.textContent = "Jokes";
    $jokeContentSection.append($jokeHeader);

    // Assigns text value and attributes for buttons and appends them to their section
    $button1.textContent = "Regenerate";
    $button1.setAttribute('type', 'click');
    $button1.setAttribute('data-name', 'regenerate');
    $button1.setAttribute('value', 'click');
    $buttonSection.append($button1);


    const jokeArray = getJokeArray();
    // Uses for loops to iterate through jokeData array to get jokes and assigns them as text value for list item
    // List items are then appended to the jokes list
    // TODO: connect the jokes data properly also may need to refactor if joke is a two liner
    for (let i = 0; i < 3; i++) {
        const $contentItem = document.createElement('li');
        const $itemText = document.createElement('p');
        const $saveButton = document.createElement('button');

        $saveButton.textContent = "Save Joke";
        $saveButton.setAttribute('type', 'click');
        $saveButton.setAttribute('value', 'click');

    
        //$itemText.textContent = jokeArray[i]
        //$saveButton.setAttribute('data-name', jokeArray[i]);
        
        $contentItem.append($itemText);
        $contentItem.append($saveButton);

        $jokeList.append($contentItem);
    }

    // Appends joke list to section
    $jokeContentSection.append($jokeList);

    // Appends content section and button section to main section
    $section2.append($jokeContentSection);
    $section2.append($buttonSection);

    $howItWorks.append($section2);
}

function displayTopFavorites() {
    const $favoritesSection = document.createElement('section');
    const $buttonsSection = document.createElement('section');
    const $drinkFavsSection = document.createElement('section');
    const $jokeFavsSection = document.createElement('section');
    const $excuseFavsSection = document.createElement('section');
    const $favoritesSectionHeading = document.createElement('h2');
    const $goToFavoritesButton = document.createElement('button');
    const elementArray = [$drinkFavsSection, $jokeFavsSection, $excuseFavsSection];
    const labelNameArray = ["Favorite Drinks", "Favorite Jokes", "Favorite Excuses"];

    //* ID NAMES HERE
    const idName = ["top-drink-display","top-joke-display","top-excuse-display"];

    const favListsArrray = [];
    const listsExistArray = [];

    if (localStorage.getItem("topFavDrinksArr") !== null) {
        const topDrinksArray = JSON.parse(localStorage.getItem("topFavDrinksArr"));
        favListsArrray.push(topDrinksArray);
        listsExistArray.push(true);
    } else {
        listsExistArray.push(false);
    }

    if (localStorage.getItem("topFavJokesArr") !== null) {
        const topJokesArray = JSON.parse(localStorage.getItem("topFavDrinksArr"));
        favListsArrray.push(topJokesArray);
        listsExistArray.push(true);
    } else {
        listsExistArray.push(false);
    }

    if (localStorage.getItem("topFavExcusesArr") !== null) {
        const topExcusesArray = JSON.parse(localStorage.getItem("topFavDrinksArr"));
        favListsArrray.push(topExcusesArray);
        listsExistArray.push(true);
    } else {
        listsExistArray.push(false);
    }

    $favoritesSectionHeading.textContent = "Your Top Saved Favorites";
    $goToFavoritesButton.textContent = "Go to Favorites Page";

    $goToFavoritesButton.setAttribute('type', 'click');
    $goToFavoritesButton.setAttribute('value', 'click');

    $favoritesSection.append($favoritesSectionHeading);
    $buttonsSection.append($goToFavoritesButton);

    for (let i = 0; i < elementArray.length; i++) {

        const $favHeading = document.createElement('h3');
        const $favList = document.createElement('ul');

        $favHeading.textContent = labelNameArray[i];
        $favList.setAttribute('id', idName[i]);

        if (listsExistArray[i]) {

            for (let y = 0; y < favListsArrray[i].length; y++) {
                const $favItem = document.createElement('li');
                const $removeButton = document.createElement('button');

                $removeButton.textContent = "Add to Favorites";
                $removeButton.setAttribute('type', 'click');
                $removeButton.setAttribute('data-name', 'favorites');
                $removeButton.setAttribute('value', 'click');
                

                $favItem.textContent = favListsArrray[i][y];

                $favList.append($favItem);
            }

        }

        elementArray[i].append($favHeading);
        elementArray[i].append($favList);

        $favoritesSection.append(elementArray[i]);

    }

    $contentSection.append($favoritesSection);
    $contentSection.append($buttonsSection);
}

function getRandomDrink(drinkData, prevDisplayedDrinks) {

    const drinkName = drinkData[Math.floor(Math.random() * drinkData.length) + 0].name;

    if (!prevDisplayedDrinks.includes()) {
        return drinkName;
    } else {
        getRandomDrink(drinkData, prevDisplayedDrinks);
    }

}

function getJokeArray() {



}

function getJoke() {
    // jokeInput = document.querySelector("#jokeInput")
    const requestUrl = `https://v2.jokeapi.dev/joke/Misc?type=single`
    fetch(requestUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        console.log(data);
                        let jokeResponse = data
                        // let jokeResponseDisplay= document.createElement('p')
                        // jokeResponseDisplay.textContent = `Joke:${jokeResponse}`
                        console.log(jokeResponse)
                    })
            }
        });
}
getJoke()
function getCocktail(userIngredient) {
        let ingredients = userIngredient;
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
                            displayDrinkInforamtion(data);
                        })
                }
            })
}

function excuse() {

    let person = ['mom', 'dad', 'grandma', 'grandpa', 'sister', 'brother'];
    let action = ['broke', 'snapped', 'lost', 'chased'];
    let event = ['computer', 'project', 'report', 'dog', 'cat', 'goose'];

    let who = person[Math.floor(Math.random() * person.length) + 0];
    let did = action[Math.floor(Math.random() * action.length) + 0];
    let what = event[Math.floor(Math.random() * event.length) + 0];

    return `My ${who} ${did} my ${what}.`

}

function submitHandler(event) {
    event.preventDefault();

    const drinkOption = document.querySelector('#user-options-list');

    const alcoholType = drinkOption.value;

    const wantJoke = document.getElementById('jokeCheck').checked;
    const wantExcuse = document.getElementById('excuseCheck').checked;

    refreshDisplay($howItWorks);
    hideHeader();
    getCocktail(alcoholType);
    if(wantJoke && wantExcuse) {
        displayJokeInforamtion();
        //displayExcuseInformation();
    } else if(wantJoke) {
        displayJokeInforamtion();
    } else if (wantExcuse) {
        //displayExcuseInformation();
    }
}

init();
const userChoiceForm = document.querySelector('#howItWorksForm');
userChoiceForm.addEventListener('submit', submitHandler);

