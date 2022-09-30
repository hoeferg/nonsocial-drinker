const $favoriteDrinksList = document.querySelector('#favorite-drinks-list')
const $favoriteJokesList = document.querySelector('#favorite-jokes-list')
const $favoriteExcusesList = document.querySelector('#favorite-excuses-list')
const $clearAll = document.querySelector('#clear-all')

$favoriteDrinksList.addEventListener('click', function(event) {
    let btn = event.target.getAttribute('data-name')
    let emptyArray = []
    if (localStorage.getItem('drinkList') !== null) (
        emptyArray = localStorage.getItem('drinkList')
    )
    if (!emptyArray.includes(btn)) {
        emptyArray.push(btn)
        localStorage.setItem('drinkList', JSON.stringify(emptyArray))
    }
} );

$favoriteJokesList.addEventListener('click', function(event) {
    let btn = event.target.getAttribute('data-name')
    let emptyArray = []
    if (localStorage.getItem('jokeList') !== null) (
        emptyArray = localStorage.getItem('drinkList')
    )
    if (!emptyArray.includes(btn)) {
        emptyArray.push(btn)
        localStorage.setItem('jokeList', JSON.stringify(emptyArray))
    }
} );

$favoriteExcusesList.addEventListener('click', function(event) {
    let btn = event.target.getAttribute('data-name')
    let emptyArray = []
    if (localStorage.getItem('excuseList') !== null) (
        emptyArray = localStorage.getItem('excuseList')
    )
    if (!emptyArray.includes(btn)) {
        emptyArray.push(btn)
        localStorage.setItem('excuseList', JSON.stringify(emptyArray))
    }
} );