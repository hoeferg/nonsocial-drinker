const goHome = document.querySelector("#home-btn");
const $favBtn = document.querySelector("#go-to-favorites-btn");
let savedExcuses = [];
let savedJokes = [];
let savedDrinks = [];
const $refreshJokes = document.getElementById("jokes-refresh");
const $refreshDrinks = document.getElementById("drinks-refresh");
const $refreshExcuses = document.getElementById("excuses-refresh");
const alcoholType = localStorage.getItem("alcholType");

function init() {
    const alcoholType = localStorage.getItem('alcoholType');
    const wantJoke = JSON.parse(localStorage.getItem('wantJoke'));
    const wantExcuse = JSON.parse(localStorage.getItem('wantExcuse'));

  if (localStorage.getItem("savedDrinks") !== null) {
    savedDrinks = JSON.parse(localStorage.getItem("savedDrinks"));
  }

  if (localStorage.getItem("savedJokes") !== null) {
    savedJokes = JSON.parse(localStorage.getItem("savedJokes"));
  }

    if (localStorage.getItem('savedExcuses') !== null) {
        savedExcuses = JSON.parse(localStorage.getItem('savedExcuses'))
    }

    displayTopFavorites();
    getCocktail(alcoholType);
    if (wantJoke) {
        getJoke();
    } else {
        generateJokeBtn();
    }
    if (wantExcuse) {
        displayExcuseInformation();
    } else {
        generateExcuseBtn();
    }

    // getCocktail(alcoholType);
    // if (wantJoke) {
    //     getJoke();
    // } else {
    //     generateJokeBtn();
    // }
    // if (wantExcuse) {
    //     displayExcuseInformation();
    // } else {
    //     generateExcuseBtn();
    // }
}

function displayDrinkInformation(drinkData, ingredient) {
    // Section for buttons, will use twice for each main section
    const $buttonSection = document.querySelector("#drinks-refresh");

    // Headings for each category
    const $drinkHeader = document.querySelector("#drink-header");

    // Unordered list for each category
    const $drinkList = document.querySelector("#generated-drinks-list");

    // Refresh button
    const $button1 = document.createElement("button");

    const prevDisplayedDrinks = [];

    // Assign text value for header and appends to content section
    $drinkHeader.textContent = `Here are some great cocktails with ${ingredient}:`;

  // Assigns text value and attributes buttons and appends to section
  $button1.textContent = "Regenerate";
  $button1.setAttribute("type", "click");
  $button1.setAttribute(
    "class",
    "w3-col s11 w3-margin-bottom w3-display-bottommiddle w3-round"
  );
  $button1.setAttribute("data-name", ingredient);
  $button1.setAttribute("value", "click");
  refreshDisplay($buttonSection);
  $buttonSection.append($button1);

  // Uses for loops to iterate through drinkData array to get drink names and assigns them as text value for list item
  // List items are then appended to the drinks list
  // TODO: connect the drinks data properly
  for (let i = 0; i < 3; i++) {
    const $contentItem = document.createElement("li");
    const $itemText = document.createElement("p");
    const $saveButton = document.createElement("button");

    $saveButton.textContent = "Save Drink";
    $saveButton.setAttribute("type", "click");
    $saveButton.setAttribute("value", "click");
    $saveButton.setAttribute("class", "w3-round");

    const drinkName = getRandomDrink(drinkData, prevDisplayedDrinks);
    $saveButton.setAttribute("data-name", drinkName);
    console.log(prevDisplayedDrinks);
    console.log(drinkData);

        prevDisplayedDrinks.push(drinkName);

    $itemText.textContent = drinkName;
    $contentItem.append($itemText);
    $contentItem.append($saveButton);

    $drinkList.append($contentItem);
  }
  saveFavoriteDrink();
}

function displayJokeInformation(jokesArr) {
    const jokesArray = jokesArr;

    // Section for buttons
    const $buttonSection = document.querySelector("#jokes-refresh");

    // Unordered list for each category
    const $jokeList = document.querySelector("#jokes-list");

    // Both refresh and save button
    const $button1 = document.createElement("button");

    
    for (let i = 0; i < 3; i++) {
        const $contentItem = document.createElement("li");
        const $itemText = document.createElement("p");
        const $saveButton = document.createElement("button");
        // Assigns text value and attributes for buttons and appends them to their section
        $button1.textContent = "Regenerate";
        $button1.setAttribute('class', ' w3-col s11 l2 w3-margin-bottom w3-display-bottomright w3-margin-right w3-round');
        $button1.setAttribute('data-name', 'regenerate');
        $button1.setAttribute('value', 'click');
        refreshDisplay($buttonSection);
        $buttonSection.append($button1);

        $itemText.textContent = jokesArray[i];
        $saveButton.setAttribute("data-name", jokesArray[i]);
        $saveButton.textContent = "Save Joke";
        $saveButton.setAttribute('type', 'click');
        $saveButton.setAttribute('value', 'click');
        $saveButton.setAttribute('class', 'w3-round');

        $contentItem.append($itemText);
        $contentItem.append($saveButton);



        $jokeList.append($contentItem);
    }

    saveFavoriteJokes();

}

function displayExcuseInformation() {
    let excuseArray = [];
    const $excuseButtonSection = document.querySelector("#excuses-refresh");

    const $excusesList = document.querySelector("#excuses-list");

    const $button2 = document.createElement("button");

  $button2.textContent = "Regenerate";
  $button2.setAttribute(
    "class",
    " w3-col s11 l2 w3-margin-bottom w3-display-bottomright w3-margin-right w3-round"
  );
  $button2.setAttribute("data-name", "regenerate");
  $button2.setAttribute("value", "click");
  refreshDisplay($excuseButtonSection);
  $excuseButtonSection.append($button2);

  while (excuseArray.length < 3) {
    let excuseAr = getExcuse();
    if (!excuseArray.includes(excuseAr)) {
      excuseArray.push(excuseAr);
    }
  }

  console.log(excuseArray);

    console.log(excuseArray);

    for (let i = 0; i < 3; i++) {
        const $contentItem = document.createElement("li");
        const $itemText = document.createElement("p");
        const $saveButton = document.createElement("button");

    $saveButton.textContent = "Save Excuse";
    $saveButton.setAttribute("type", "click");
    $saveButton.setAttribute("value", "click");
    $saveButton.setAttribute("class", "w3-round");

    $itemText.textContent = excuseArray[i];
    $saveButton.setAttribute("data-name", excuseArray[i]);
    $contentItem.append($itemText);
    $contentItem.append($saveButton);
    $excusesList.append($contentItem);
  }

  saveFavoriteExcuses();
}

function displayTopFavorites() {

    const favListsArray = [];
    const listsExistArray = [];
    //* ID NAMES HERE
    const idName = ["#last-drink-list", "#last-jokes-list", "#last-excuses-list"];

    if (localStorage.getItem("gotoDrinkList") !== null) {
        const topDrinksArray = JSON.parse(localStorage.getItem("gotoDrinkList"));
        favListsArray.push(topDrinksArray);
        listsExistArray.push(true);
    } else {
        favListsArray.push("fill");
        listsExistArray.push(false);
    }

  if (localStorage.getItem("gotoJokeList") !== null) {
    const topJokesArray = JSON.parse(localStorage.getItem("gotoJokeList"));
    favListsArray.push(topJokesArray);
    listsExistArray.push(true);
  } else {
    favListsArray.push("fill");
    listsExistArray.push(false);
  }

  if (localStorage.getItem("gotoExcuseList") !== null) {
    const topExcusesArray = JSON.parse(localStorage.getItem("gotoExcuseList"));
    favListsArray.push(topExcusesArray);
    listsExistArray.push(true);
  } else {
    favListsArray.push("fill");
    listsExistArray.push(false);
  }

  for (let i = 0; i < idName.length; i++) {
    const list = document.querySelector(idName[i]);

    if (listsExistArray[i]) {
      for (let y = 0; y < favListsArray[i].length; y++) {
        const $favItem = document.createElement("li");
        const $favText = document.createElement("p");
        const $removeButton = document.createElement("button");

        $removeButton.textContent = "Add to Favorites";
        $removeButton.setAttribute("type", "click");
        $removeButton.setAttribute("value", "click");

        $removeButton.setAttribute("data-name", favListsArray[i][y]);
        $favText.textContent = favListsArray[i][y];

        $favItem.append($favText);
        $favItem.append($removeButton);

        list.append($favItem);
      }
    }
  }
}

function getRandomDrink(drinkData, prevDisplayedDrinks) {
    const drinkName =
        drinkData[Math.floor(Math.random() * drinkData.length) + 0].name;
    console.log(drinkName);

    if (!prevDisplayedDrinks.includes(drinkName)) {
        return drinkName;
    } else {
        getRandomDrink(drinkData, prevDisplayedDrinks); // reutrn any random
    }
}

function createJokeArray(jokeData, jokeArr) {
    let tempJArray;

    if (jokeArr === undefined) {
        tempJArray = [];
    } else {
        tempJArray = jokeArr;
    }

    if (!tempJArray.includes(jokeData)) {
        tempJArray.push(jokeData);
    }

    if (tempJArray.length === 3) {
        displayJokeInformation(tempJArray);
    } else {
        getJoke(tempJArray);
    }
}

function getJoke(jokeArr) {
    const requestUrl = `https://v2.jokeapi.dev/joke/Misc?type=single&blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
    fetch(requestUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                let jokeResponse = data.joke;
                console.log(jokeResponse);
                createJokeArray(jokeResponse, jokeArr);
            });
        }
    });
}

function getCocktail(userIngredient) {
    let ingredients = userIngredient;
    let $url = `https://api.api-ninjas.com/v1/cocktail?ingredients=${ingredients}`;

    fetch($url, {
        method: "GET",
        headers: { "X-Api-Key": "OuLOQXkRIPUQZ/oPSLdQaA==newehym4gENucVSM" },
    }).then(function (response) {
        if (response.ok) {
            response
                .json()

        .then(function (data) {
          console.log("response", data);
          displayDrinkInformation(data, ingredients);
        });
    }
  });
}

function getExcuse() {
    let person = ["mom", "dad", "grandma", "grandpa", "sister", "brother"];
    let action = ["broke", "snapped", "lost", "chased"];
    let event = ["computer", "project", "report", "dog", "cat", "goose"];

    let who = person[Math.floor(Math.random() * person.length) + 0];
    let did = action[Math.floor(Math.random() * action.length) + 0];
    let what = event[Math.floor(Math.random() * event.length) + 0];

    return `My ${who} ${did} my ${what}.`;

}

function saveFavoriteJokes() {
    const $listOfJokes = document.getElementById("jokes-list");

  $listOfJokes.addEventListener("click", function (event) {
    let $jokeOptions = event.target.getAttribute("data-name");
    console.log($jokeOptions);

    if (!savedJokes.includes($jokeOptions)) {
      savedJokes.push($jokeOptions);
      localStorage.setItem("savedJokes", JSON.stringify(savedJokes));
    }
  });
}

function saveFavoriteDrink() {
  const $listOfDrinks = document.getElementById("generated-drinks-list");

  $listOfDrinks.addEventListener("click", function (event) {
    let $drinkOptions = event.target.getAttribute("data-name");
    console.log($drinkOptions);

    if (!savedDrinks.includes($drinkOptions)) {
      savedDrinks.push($drinkOptions);
      localStorage.setItem("savedDrinks", JSON.stringify(savedDrinks));
      console.log(savedDrinks);
    }
  });
}

function saveFavoriteExcuses() {
  const $listOfExcuses = document.getElementById("excuses-list");

  $listOfExcuses.addEventListener("click", function (event) {
    let $excuseOptions = event.target.getAttribute("data-name");

    console.log($excuseOptions);
    if (!savedExcuses.includes($excuseOptions)) {
      savedExcuses.push($excuseOptions);
      localStorage.setItem("savedExcuses", JSON.stringify(savedExcuses));
      console.log(savedExcuses);
    }
  });
}

function generateExcuseBtn() {

    const $genExcuseBtn = document.createElement('button');
    const $buttonSection = document.querySelector('#excuses-refresh');

    $genExcuseBtn.setAttribute('type', 'submit');
    $genExcuseBtn.setAttribute('value', 'Get An Excuse');
    $genExcuseBtn.classList.add('button-margin-excuse');
    $genExcuseBtn.textContent = "Get An Excuse!"


    $genExcuseBtn.setAttribute("type", "submit");
    $genExcuseBtn.setAttribute("value", "Get An Excuse");
    $genExcuseBtn.textContent = "Get An Excuse!";

    $buttonSection.append($genExcuseBtn);

    $genExcuseBtn.addEventListener("click", function () {
        $genExcuseBtn.style.display = "none";
        displayExcuseInformation();
    });
}

function generateJokeBtn() {
    const $genJokeBtn = document.createElement("button");
    const $buttonSection = document.querySelector("#jokes-refresh");

    $genJokeBtn.setAttribute('type', 'submit');
    $genJokeBtn.setAttribute('value', 'Get An Joke');
    $genJokeBtn.classList.add('button-margin-joke');
    $genJokeBtn.textContent = "Get A Joke!"


    $buttonSection.append($genJokeBtn);

  $genJokeBtn.addEventListener("click", function () {
    $genJokeBtn.style.display = "none";
   
  });
}

init();

$favBtn.addEventListener("click", function () {
    window.location.assign("../html/favorites.html");
});


function saveFavoriteJokes() {
    const $listOfJokes = document.getElementById("jokes-list");
    $listOfJokes.addEventListener("click", function (event) {
        let $jokeOptions = event.target.getAttribute("data-name");
        console.log($jokeOptions);
        if (!savedJokes.includes($jokeOptions)) {
            savedJokes.push($jokeOptions);
            localStorage.setItem("savedJokes", JSON.stringify(savedJokes));
        }
    });
}

function saveFavoriteDrink() {
    const $listOfDrinks = document.getElementById("generated-drinks-list");
    $listOfDrinks.addEventListener("click", function (event) {
        let $drinkOptions = event.target.getAttribute("data-name");
        console.log($drinkOptions);
        if (!savedDrinks.includes($drinkOptions)) {
            savedDrinks.push($drinkOptions);
            localStorage.setItem("savedDrinks", JSON.stringify(savedDrinks));
            console.log(savedDrinks);
        }
    });
}

function saveFavoriteExcuses() {
    const $listOfExcuses = document.getElementById("excuses-list");
    $listOfExcuses.addEventListener("click", function (event) {
        let $excuseOptions = event.target.getAttribute("data-name");
        console.log($excuseOptions);
        if (!savedExcuses.includes($excuseOptions)) {
            savedExcuses.push($excuseOptions);
            localStorage.setItem("savedExcuses", JSON.stringify(savedExcuses));
            console.log(savedExcuses);
        }
    });
}

function refreshDisplay(parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

$refreshJokes.addEventListener("click", function (event) {
  const $jokeDisplay = document.getElementById("jokes-list");
  
  refreshDisplay($jokeDisplay);

  getJoke();
  
});

$refreshDrinks.addEventListener("click", function (event) {
  const $drinkDisplay = document.getElementById("generated-drinks-list");
 
  refreshDisplay($drinkDisplay);

  
  getCocktail(alcholType);
  
});

$refreshExcuses.addEventListener("click", function (event) {
  const $excuseDisplay = document.getElementById("excuses-list");
 
  refreshDisplay($excuseDisplay);

  
  getExcuse();
  displayExcuseInformation();
  
});

goHome.addEventListener("click", function () {
  window.location.assign("../../index.html");
});
