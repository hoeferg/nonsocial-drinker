const $header = document.querySelector('#greeting');
const test = document.querySelector('#test');



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
console.log(getJoke)
// refreshDisplay();