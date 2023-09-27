'use strict';

const inputRef = document.getElementById("name-input");
const spanNamRef = document.getElementById('name-output');

const greetByName = (e) => {
    if (e.target.value.length !== 0) {
        spanNamRef.textContent = e.target.value;
        return;
    }

    spanNamRef.textContent = 'Anonymous';
}

inputRef.addEventListener('input', greetByName);