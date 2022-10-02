const $favoriteDrinksList = document.querySelector('#last-drink-list');
const $favoriteJokesList = document.querySelector('#last-jokes-list');
const $favoriteExcusesList = document.querySelector('#last-excuses-list');
const $clearAllBtn = document.querySelector('#clear-all');
const homeBtn = document.querySelector('#moreFunBtn');


$favoriteDrinksList.addEventListener('click', function (event) {
    let btn = event.target.getAttribute('data-name')
    let emptyArray = []
    if (localStorage.getItem('gotoDrinkList') !== null) (
        emptyArray = localStorage.getItem('gotoDrinkList')
    )
    if (!emptyArray.includes(btn)) {
        emptyArray.push(btn)
        localStorage.setItem('gotoDrinkList', JSON.stringify(emptyArray))
    }
})

$favoriteJokesList.addEventListener('click', function (event) {
    let btn = event.target.getAttribute('data-name')
    let emptyArray = []
    if (localStorage.getItem('gotoJokeList') !== null) (
        emptyArray = localStorage.getItem('gotoJokeList')
    )
    if (!emptyArray.includes(btn)) {
        emptyArray.push(btn)
        localStorage.setItem('gotoJokeList', JSON.stringify(emptyArray))
    }
});

$favoriteExcusesList.addEventListener('click', function (event) {
    let btn = event.target.getAttribute('data-name')
    let emptyArray = []
    if (localStorage.getItem('gotoExcuseList') !== null) (
        emptyArray = localStorage.getItem('gotoExcuseList')
    )
    if (!emptyArray.includes(btn)) {
        emptyArray.push(btn)
        localStorage.setItem('gotoExcuseList', JSON.stringify(emptyArray))
    }

});

function refreshDisplay(parentElement) {

    while (parentElement.firstChild) {

        parentElement.removeChild(parentElement.firstChild);

    }

}

function clearAll() {
    localStorage.removeItem('savedDrinks')
    localStorage.removeItem('savedJokes')
    localStorage.removeItem('savedExcuses')
    localStorage.removeItem('gotoDrinkList')
    localStorage.removeItem('gotoJokeList')
    localStorage.removeItem('gotoExcuseList')
    refreshDisplay($favoriteDrinksList)
    refreshDisplay($favoriteJokesList)
    refreshDisplay($favoriteExcusesList)
}

function refreshDisplay(parentElement) {

    while (parentElement.firstChild) {

        parentElement.removeChild(parentElement.firstChild);

    }

}

function displaySavedFavorites() {
    if (localStorage.getItem('savedDrinks') !== null) {
        const favDrinksArray = JSON.parse(localStorage.getItem('savedDrinks'));

        for (let i = 0; i < favDrinksArray.length; i++) {
            const $contentItem = document.createElement('li');
            const $itemText = document.createElement('p');
            const $saveButton = document.createElement('button');

            $saveButton.textContent = "Save Joke As Go To";
            $saveButton.setAttribute('type', 'click');
            $saveButton.setAttribute('value', 'click');


            $itemText.textContent = favDrinksArray[i];
            $saveButton.setAttribute('data-name', favDrinksArray[i]);

            $contentItem.append($itemText);
            $contentItem.append($saveButton);

            $favoriteDrinksList.append($contentItem);
        }
    }
    if (localStorage.getItem('savedJokes') !== null) {
        const favJokesArray = JSON.parse(localStorage.getItem('savedJokes'));

        for (let i = 0; i < favJokesArray.length; i++) {
            const $contentItem = document.createElement('li');
            const $itemText = document.createElement('p');
            const $saveButton = document.createElement('button');

            $saveButton.textContent = "Save Joke As Go To";
            $saveButton.setAttribute('type', 'click');
            $saveButton.setAttribute('value', 'click');


            $itemText.textContent = favJokesArray[i];
            $saveButton.setAttribute('data-name', favJokesArray[i]);

            $contentItem.append($itemText);
            $contentItem.append($saveButton);

            $favoriteJokesList.append($contentItem);
        }
    }
    if (localStorage.getItem('savedExcuses') !== null) {
        const favExcusesArray = JSON.parse(localStorage.getItem('savedExcuses'));

        for (let i = 0; i < favExcusesArray.length; i++) {
            const $contentItem = document.createElement('li');
            const $itemText = document.createElement('p');
            const $saveButton = document.createElement('button');

            $saveButton.textContent = "Save Joke As Go To";
            $saveButton.setAttribute('type', 'click');
            $saveButton.setAttribute('value', 'click');


            $itemText.textContent = favExcusesArray[i];
            $saveButton.setAttribute('data-name', favExcusesArray[i]);

            $contentItem.append($itemText);
            $contentItem.append($saveButton);

            $favoriteExcusesList.append($contentItem);
        }
    }
}

$clearAllBtn.addEventListener('click', clearAll);
homeBtn.addEventListener('click', function() {
    window.location.assign('../../index.html');
})

displaySavedFavorites();