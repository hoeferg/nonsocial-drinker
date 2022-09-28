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

// hideHeader();
// refreshDisplay();