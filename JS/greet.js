//Get DOM Elements
let errorMessageElem = document.querySelector(".errMessage");
let txtNameElem = document.querySelector(".txtName");
let btnGreetElem = document.querySelector(".btnGreet");
let helloMessageElem = document.querySelector(".helloMessage");
let radioLangElem = document.getElementsByName("radioLang");
let greetCount = document.querySelector(".counter");
let btnClearCountElem = document.querySelector(".btnClearCount");


let counter = 0;
// instantiate factory function
const greetApp = greetMe();

// add event listener for when the 'Greet Me' button is pressed
btnGreetElem.addEventListener("click", btnGreet_onClick);

// add event listener for when the 'Clear Count' button is pressed
btnClearCountElem.addEventListener("click", clearCount_onClick);

//check if a value for the counter is stored in localStorage
if (localStorage['count']){
    // ensure counter is a number
    counter = Number(localStorage['count']);

    greetCount.innerHTML = counter;
};

function btnGreet_onClick () {
    var name = greetApp.titleCase(txtNameElem.value);
    var languageSelected = "";
    
    errorMessageElem.innerHTML = "";
    helloMessageElem.innerHTML = "";

    // Loop through the radio buttons
    for (var i = 0; i < radioLangElem.length; i++) {
        if (radioLangElem[i].checked) {
          // Get the value of the selected radio button
          languageSelected=radioLangElem[i].value.toLowerCase();
          radioLangElem[i].checked = false; //unchecks the radio button
          break; // Exit the loop once the selected radio button is found
        }
    }
    // Check that the form has been completed
    if(name.length === 0 || languageSelected.length === 0){
        errorMessageElem.innerHTML = greetApp.greet(name,languageSelected)
    }
    else{
        // Update counter
        greetCount.innerHTML = greetApp.count();

        // update the message on screen
        helloMessageElem.innerHTML = greetApp.greet(name,languageSelected);
        txtNameElem.value = "";
    }
    
}

function clearCount_onClick() {
    greetApp.clearCount();
}