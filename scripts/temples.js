// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const hamButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamButton.classList.toggle('active');
})
/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/




// This script will dynamically populate the current year and last modified date.

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Set last modified date in the footer
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified on: ${lastModified}`;
});

