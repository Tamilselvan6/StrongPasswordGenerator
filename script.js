const inputBox = document.getElementById('input');
const generateButton = document.getElementById('generateButton');

const copyButton = document.getElementById('copyButton');

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!#$%^&*()_-@";
const allChar = upperCase + lowerCase + number + symbol;

generateButton.addEventListener('click', (event) => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    inputBox.value = password;
});

copyButton.addEventListener('click', (event) => {
    if (inputBox.value == "") {
        alert("Please Generate the Password before Copying");
    }
    inputBox.select();
    document.execCommand("copy");
});

