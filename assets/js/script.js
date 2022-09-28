const $header = document.querySelector('#greeting');
const test = document.querySelector('#test');
const $howItWorks = document.querySelector('#how-it-works');
const $contentSection = document.querySelector('#content-section');

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
createForm()




// hideHeader();
// refreshDisplay();

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



