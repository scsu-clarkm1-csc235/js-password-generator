"use strict";

/**
 * Register callback to respond to the form submit event
 */
const form = document.querySelector('#passwordGenerator');
form.addEventListener('submit', onPasswordFormSubmit);

/**
 * Register callback to respond to click on the clipboard button
 */
const clipboardButton = document.querySelector('#clipboardBtn');
clipboardButton.addEventListener('click', onClipboardBtnClick);

/**
 * Invoked when the user sumbits the password form (return or click submit).
 * This function should ...
 * 1. Extract the user supplied password options from the form
 * 2. Invoike the generatePassword() method
 * 3. Display the generated password 
 */
function onPasswordFormSubmit(event) {
    // Prevent the form from actually submitting to the server
    event.preventDefault();

    // Get values for the password generation options (length, uppercase, etc.)


    // Generate the password with supplied options (invoke generatePassword)


    // Display the password in the text input (used for output in this case)

}

/**
 * Copy the generated to the system clipboard so that it can be pasted.
 * See https://www.w3schools.com/howto/howto_js_copy_clipboard.asp for API reference.
 */
function onClipboardBtnClick() {

}

/**
 * Returns a randomly generated password of size "length" as a string. Each of the supplied
 * options (uppercase, numbers, symbols) should have an equal chance of occuring in each character position.
 */
function generatePassword(length, uppercase, numbers, symbols) {

}

// Returns a single, random lowercase character a-z
function getRandomLowercase() {

}

// Returns a single, random uppercase letter A-Z
function getRandomUppercase() {

}

// Returns a single, radom digit 0-9
function getRandomDigit() {

}

// Returns a single, random symbol from the following symbols ... !, #, $, %, &, ), (
function getRandomSymbol() {

}
