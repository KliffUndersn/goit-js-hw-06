function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const but = document.querySelector('button[class="change-color"]');
const spn = document.querySelector('span[class="color"]');
const bod = document.body;

but.addEventListener("click",() => {
  bod.style.backgroundColor = getRandomHexColor();   
  spn.textContent = `${getRandomHexColor()}`;
})



 