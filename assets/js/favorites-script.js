const $favoriteDrinksList = document.querySelector('#last-drink-list')
const $favoriteJokesList = document.querySelector('#last-jokes-list')
const $favoriteExcusesList = document.querySelector('#last-excuses-list')
const $clearAllBtn = document.querySelector('#clear-all')


$favoriteDrinksList.addEventListener('click', function (event) {
    let btn = event.target.getAttribute('data-name')
    let emptyArray = []
    if (localStorage.getItem('drinkList') !== null) (
        emptyArray = localStorage.getItem('drinkList')
    )
    if (!emptyArray.includes(btn)) {
        emptyArray.push(btn)
        localStorage.setItem('drinkList', JSON.stringify(emptyArray))
    }
})

$favoriteJokesList.addEventListener('click', function (event) {
    let btn = event.target.getAttribute('data-name')
    let emptyArray = []
    if (localStorage.getItem('jokeList') !== null) (
        emptyArray = localStorage.getItem('drinkList')
    )
    if (!emptyArray.includes(btn)) {
        emptyArray.push(btn)
        localStorage.setItem('jokeList', JSON.stringify(emptyArray))
    }
});

$favoriteExcusesList.addEventListener('click', function (event) {
    let btn = event.target.getAttribute('data-name')
    let emptyArray = []
    if (localStorage.getItem('excuseList') !== null) (
        emptyArray = localStorage.getItem('excuseList')
    )
    if (!emptyArray.includes(btn)) {
        emptyArray.push(btn)
        localStorage.setItem('excuseList', JSON.stringify(emptyArray))
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
    refreshDisplay ($favoriteDrinksList)
    refreshDisplay ($favoriteJokesList)
    refreshDisplay ($favoriteExcusesList)
}

$clearAllBtn.addEventListener('click', clearAll)