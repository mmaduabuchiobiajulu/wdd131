// This script will dynamically populate the current year and last modified date.

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Set last modified date in the footer
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified on: ${lastModified}`;
});


