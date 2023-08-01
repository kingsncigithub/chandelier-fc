// form validation for the contact section
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const message = document.getElementById('message').value;

  
    return false; // Returning false here will prevent form submission for this example
}

const exampleArray = [1, 2, 3, 4, 5];

function getRandomElementFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const randomElement = getRandomElementFromArray(exampleArray);
console.log(randomElement); // This logs a random element from exampleArray
