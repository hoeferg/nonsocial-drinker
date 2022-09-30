function init() {
    const alcholType = localStorage.getItem('alcholType');
    const wantJoke = JSON.parse(localStorage.getItem('wantJoke'));
    const wantExcuse = JSON.parse(localStorage.getItem('wantExcuse'));

    getCocktail(alcholType);
    if(wantJoke) {
        getJoke();
    }
    if (wantExcuse) {
        displayExcuseInformation();
    }

}

// This function can be passed a parent element and will remove its children
function refreshDisplay(parentElement) {

    while (parentElement.firstChild) {

        parentElement.removeChild(parentElement.firstChild);

    }

}

function displayDrinkInformation(drinkData,ingredient) {


    // These will be the main sections that will contain all content
    const $section1 = document.createElement('section');
    $section1.setAttribute('data-name', 'drinks');

    // Section for buttons, will use twice for each main section
    const $buttonSection = document.querySelector('#drinks-refresh');

    // Headings for each category
    const $drinkHeader = document.querySelector('#drink-header');

    // Unordered list for each category
    const $drinkList = document.querySelector('#generated-drinks-list');

    // Refresh button
    const $button1 = document.createElement('button');

    const prevDisplayedDrinks = [];

    // Assign text value for header and appends to content section
    $drinkHeader.textContent = `Here are some great cocktails with ${ingredient}:`;

    // Assigns text value and attributes buttons and appends to section
    $button1.textContent = "Regenerate";
    $button1.setAttribute('type', 'click');
    $button1.setAttribute('class', 'w3-margin');
    $button1.setAttribute('data-name', ingredient);
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
        $saveButton.setAttribute('class', 'w3-margin w3-right');
        $saveButton.setAttribute('value', 'click');

        const drinkName = getRandomDrink(drinkData, prevDisplayedDrinks);

        $saveButton.setAttribute('data-name', drinkName);

        prevDisplayedDrinks.push(drinkName);

        $itemText.textContent = drinkName;
        $contentItem.append($itemText)
        $contentItem.append($saveButton);

        $drinkList.append($contentItem);
    }

}

function displayJokeInformation(jokesArr) {

    const jokesArray = jokesArr;

    // Section for buttons
    const $buttonSection = document.querySelector('#jokes-refresh');

    // Headings for each category
    const $jokeHeader = document.querySelector('#joke-header');

    // Unordered list for each category
    const $jokeList = document.querySelector('#jokes-list');

    // Both refresh and save button
    const $button1 = document.createElement('button');

    // Assign text value for header and appends to content section
    $jokeHeader.textContent = "Your Jokes:";

    // Assigns text value and attributes for buttons and appends them to their section
    $button1.textContent = "Regenerate";
    $button1.setAttribute('type', 'click');
    $button1.setAttribute('data-name', 'regenerate');
    $button1.setAttribute('value', 'click');
    $buttonSection.append($button1);

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


        $itemText.textContent = jokesArray[i]
        $saveButton.setAttribute('data-name', jokesArray[i]);

        $contentItem.append($itemText);
        $contentItem.append($saveButton);

        $jokeList.append($contentItem);
    }

}

function displayExcuseInformation() {
    let excuseArray = []
    const $excuseButtonSection = document.querySelector('#excuse-refresh');

    const $excusesList = document.querySelector('#excuses-list');

    const $button2 = document.createElement('button');



    $button2.textContent = "Regenerate";
    $button2.setAttribute('type', 'click');
    $button2.setAttribute('data-name', 'regenerate');
    $button2.setAttribute('value', 'click');
    $excuseButtonSection.append($button2);

    while (excuseArray.length < 3) {
        let excuseAr = getExcuse();
        if (!excuseArray.includes(excuseAr)) {
            excuseArray.push(excuseAr)
        }
    }
    console.log(excuseArray)

    for (let i = 0; i < 3; i++) {
        const $contentItem = document.createElement('li');
        const $itemText = document.createElement('p');
        const $saveButton = document.createElement('button');

        $saveButton.textContent = "Save Excuse";
        $saveButton.setAttribute('type', 'click');
        $saveButton.setAttribute('value', 'click');

        $itemText.textContent = excuseArray[i]
        $saveButton.setAttribute('data-name', excuseArray[i]);
        $contentItem.append($itemText);
        $contentItem.append($saveButton);
        $excusesList.append($contentItem);
    }
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
    const idName = ["top-drink-display", "top-joke-display", "top-excuse-display"];

    const favListsArray = [];
    const listsExistArray = [];

    if (localStorage.getItem("topFavDrinksArr") !== null) {
        const topDrinksArray = JSON.parse(localStorage.getItem("topFavDrinksArr"));
        favListsArray.push(topDrinksArray);
        listsExistArray.push(true);
    } else {
        favListsArrray.push("fill");
        listsExistArray.push(false);
    }

    if (localStorage.getItem("topFavJokesArr") !== null) {
        const topJokesArray = JSON.parse(localStorage.getItem("topFavDrinksArr"));
        favListsArray.push(topJokesArray);
        listsExistArray.push(true);
    } else {
        favListsArrray.push("fill");
        listsExistArray.push(false);
    }

    if (localStorage.getItem("topFavExcusesArr") !== null) {
        const topExcusesArray = JSON.parse(localStorage.getItem("topFavDrinksArr"));
        favListsArray.push(topExcusesArray);
        listsExistArray.push(true);
    } else {
        favListsArrray.push("fill");
        listsExistArray.push(false);
    }

    $favoritesSectionHeading.textContent = "Your Go To Favorites";
    $goToFavoritesButton.textContent = "See More of Favorites Page";

    $goToFavoritesButton.setAttribute('type', 'click');
    $goToFavoritesButton.setAttribute('value', 'click');
    $goToFavoritesButton.setAttribute('class', 'goToFavs')

    $favoritesSection.append($favoritesSectionHeading);
    $buttonsSection.append($goToFavoritesButton);

    for (let i = 0; i < elementArray.length; i++) {

        const $favHeading = document.createElement('h3');
        const $favList = document.createElement('ul');

        $favHeading.textContent = labelNameArray[i];
        $favList.setAttribute('id', idName[i]);

        if (listsExistArray[i]) {

            for (let y = 0; y < favListsArray[i].length; y++) {
                const $favItem = document.createElement('li');
                const $removeButton = document.createElement('button');

                $removeButton.textContent = "Add to Favorites";
                $removeButton.setAttribute('type', 'click');
                $removeButton.setAttribute('data-name', 'favorites');
                $removeButton.setAttribute('value', 'click');


                $favItem.textContent = favListsArray[i][y];

                $favList.append($favItem);
            }

        }

        elementArray[i].append($favHeading);
        elementArray[i].append($favList);

        $favoritesSection.append(elementArray[i]);

    }

    //$contentSection.append($favoritesSection);
    //$contentSection.append($buttonsSection);
}

function getRandomDrink(drinkData, prevDisplayedDrinks) {

    const drinkName = drinkData[Math.floor(Math.random() * drinkData.length) + 0].name;

    if (!prevDisplayedDrinks.includes(drinkName)) {
        return drinkName;
    } else {
        getRandomDrink(drinkData, prevDisplayedDrinks);
    }

}

function createJokeArray(jokeData, jokeArr) {
    let tempJArray;

    if (jokeArr === undefined) {
        tempJArray = []
    } else {
        tempJArray = jokeArr;
    }

    if (!tempJArray.includes(jokeData)) {
        tempJArray.push(jokeData);
    }


    if(tempJArray.length === 3) {
        displayJokeInformation(tempJArray);
    } else {
        getJoke(tempJArray);
    }

}

function getJoke(jokeArr) {

    const requestUrl = `https://v2.jokeapi.dev/joke/Misc?type=single`
    fetch(requestUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        let jokeResponse = data.joke;
                        console.log(jokeResponse);
                        createJokeArray(jokeResponse, jokeArr);
                    })
            }
        });

}

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
                            displayDrinkInformation(data,ingredients);
                        })
                }
            })
}

function getExcuse() {

    let person = ['mom', 'dad', 'grandma', 'grandpa', 'sister', 'brother'];
    let action = ['broke', 'snapped', 'lost', 'chased'];
    let event = ['computer', 'project', 'report', 'dog', 'cat', 'goose'];

    let who = person[Math.floor(Math.random() * person.length) + 0];
    let did = action[Math.floor(Math.random() * action.length) + 0];
    let what = event[Math.floor(Math.random() * event.length) + 0];

    return `My ${who} ${did} my ${what}.`
}

init();