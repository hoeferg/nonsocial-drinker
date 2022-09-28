const $header = document.querySelector('#greeting');
const test = document.querySelector('#test');
const $howItWorks = document.querySelector('#howItWorks');
const ingredients = document.querySelector('#ingredients')
function createForm() {
    const $form = document.createElement('form');
    const $h2 = document.createElement('h2');
    const $description = document.createElement('p');
    const $jokeBtn = document.createElement('button');
    const $excuseBtn = document.createElement('button');

    document.body.appendChild($form);
    $form.appendChild($h2)
    $form.appendChild($description)
    $form.appendChild($jokeBtn)
    $form.appendChild($excuseBtn)
    $h2.textContent = 'How It Works!'
    $description.textContent = 'Pick your poison from the drinks  drop down and indicate whether or not you would like a joke and/or and excuse to go along with it from the options below. You will be shown a list of options on the next page that will aid you in you journey of libation and liberation.'
}

// hideHeader();
// refreshDisplay();
createForm()

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
// hideHeader();

function getJoke() {
    jokeInput = document.querySelector.("#jokesComfirm")
    const requestUrl = `https://sv443.net/jokeapi/v2`
    console.log(jokeInput)
    fetch(requestUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    console.log(Object.values(JokeAPI));

    // JokeAPI.getJokes().then(r => console.log(r.body))
    JokeAPI.getJokes({
        jokeType: "single"
    })
        .then((r) => r.json())
        .then((data) => {
            updateUI(data);
        });

    // To update the joke on the UI
    function updateUI(jokeData) {
        const $ = (id) => document.getElementById(id);

        $("joke--text").innerHTML = jokeData.joke;
    }

    JokeAPI.getJokes({
        jokeType: "twopart"
    })
        .then((r) => r.json())
        .then((data) => {
            updateUI(data);
        });

    // To update the joke on the UI
    function updateUI(jokeData) {
        const $ = (id) => document.getElementById(id);

        $("joke--text").innerHTML = jokeData.joke;
    }
}
console.log(getJoke())
// refreshDisplay();

function getCocktail() {
    let ingredients = 'vodka'
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
            })}


console.log(getCocktail())

