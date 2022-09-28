const $header  = document.querySelector('#greeting');
const test = document.querySelector('#test');



// This function will hide the header when called
function hideHeader() {
    $header.setAttribute("class","custom-display");
}

// This function can be passed a parent element and will remove its children
function refreshDisplay(parentElement) {

    while(parentElement.firstChild) {

        parentElement.removeChild(parentElement.firstChild);

    }

}



function displayDrinkInforamtion(drinkData) {

    // These will be the main sections that will contain all content
    const $section1 = document.createElement('section');
    $section1.setAttribute('data-name','drinks');

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
    $button1.setAttribute('type','click');
    $button1.setAttribute('data-name','regenerate');
    $button2.setAttribute('type','click');
    $button2.setAttribute('data-name','favorites');
    $button1.setAttribute('value','click');
    $button2.setAttribute('value','click');
    $buttonSection.append($button1);
    $buttonSection.append($button2);

    // Uses for loops to iterate through drinkData array to get drink names and assigns them as text value for list item
    // List items are then appended to the drinks list
    // TODO: connect the drinks data properly
    for(let i = 0; i < 3; i++) {
        const $contentItem = document.createElement('li');

        $contentItem.textContent = drinkData[i].drink_name;

        $drinkList.append($contentItem);
    }

    // Appends drink list to content section
    $drinkContentSection.append($drinkList);

    // Appends content section and button section to main section
    $section1.append($drinkContentSection);
    $section1.append($buttonSection);
}

function displayJokeInforamtion(jokeDataArray) {

    // These will be the main section that will contain all content
    const $section2 = document.createElement('section');
    $section2.setAttribute('data-name','jokes');


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
    $button1.setAttribute('type','click');
    $button1.setAttribute('data-name','regenerate');
    $button2.setAttribute('type','click');
    $button2.setAttribute('data-name','favorites');
    $button1.setAttribute('value','click');
    $button2.setAttribute('value','click');
    $buttonSection.append($button1);
    $buttonSection.append($button2);
    $buttonSection.append($button2);

    // Uses for loops to iterate through jokeData array to get jokes and assigns them as text value for list item
    // List items are then appended to the jokes list
    // TODO: connect the jokes data properly also may need to refactor if joke is a two liner
    for(let i = 0; i < 3; i++) {
        const $contentItem = document.createElement('li');

        $contentItem.textContent = jokeDataArray[i].joke;

        $jokeList.append($contentItem);
    }

    // Appends joke list to section
    $jokeContentSection.append($jokeList);

    // Appends content section and button section to main section
    $section2.append($jokeContentSection);
    $section2.append($buttonSection);
}