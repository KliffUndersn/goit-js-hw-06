let counterValue = 0;
const dec = document.querySelector('button[data-action="decrement"]');
const inc = document.querySelector('button[data-action="increment"]');
const span = document.querySelector("#value");
dec.addEventListener("click",() => {
    span.textContent = --counterValue ;

})
inc.addEventListener("click",() => {
    span.textContent = ++counterValue;
    
})
console.log(dec);
console.log(counterValue);