// javascript.js

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting the traditional way

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;

        const generation = getGeneration(age);

        // Show the custom popup
        showPopup(`I'm "${name}" and I'm "${generation}".`);
    });
});

function getGeneration(age) {
    if (age >= 6 && age <= 24) {
        return 'Gen Z';
    } else if (age >= 25 && age <= 40) {
        return 'a Millennial';
    } else if (age >= 41 && age <= 56) {
        return 'Gen X';
    } else if (age >= 57 && age <= 75) {
        return 'a Boomer';
    } else if (age > 75) {
        return 'the Silent Generation';
    } else {
        return 'undefined';
    }
}

function showPopup(message) {
    // Create the popup element
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.innerText = message;

    // Style the popup
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.backgroundColor = '#000000';
    popup.style.color = 'white';
    popup.style.padding = '15px';
    popup.style.zIndex = '1000';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    popup.style.borderBottomLeftRadius = '5px';
    popup.style.borderBottomRightRadius = '5px';
    popup.style.fontSize = '16px';

    // Append the popup to the body
    document.body.appendChild(popup);

    // Remove the popup after 5 seconds
    setTimeout(() => {
        document.body.removeChild(popup);
    }, 5000);
}
