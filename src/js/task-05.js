const input = document.querySelector("#name-input")
const span = document.querySelector("#name-output")
input.addEventListener("input",(e) => {
    if (e.target.value === "") {return span.textContent= `Anonymous`}
    span.textContent = e.target.value        
})
