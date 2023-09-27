'use strict';

let counterValue = 0;

const increment = () => counterValue += 1;
const decrement = () => counterValue -= 1;


const spanValueRef = document.getElementById('value');

const showCurrentValue = () => spanValueRef.textContent = counterValue;

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

incrementBtn.addEventListener('click', increment);
incrementBtn.addEventListener('click', showCurrentValue);
decrementBtn.addEventListener('click', decrement);
decrementBtn.addEventListener('click', showCurrentValue);

decrementBtn.style.marginRight = '10px';
decrementBtn.style.borderRadius = '10px';
decrementBtn.style.backgroundColor = 'red';
decrementBtn.style.color = 'white';
incrementBtn.style.marginLeft = '10px';
incrementBtn.style.borderRadius = '10px';
incrementBtn.style.backgroundColor = 'green';
incrementBtn.style.color = 'white';
spanValueRef.style.fontWeight = 'bold';