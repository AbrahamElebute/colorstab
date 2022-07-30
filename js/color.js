const colorBtn = document.querySelector("#color-btn")
const colorScreen = document.querySelector("#color-screen")
const printColor = document.querySelector("#print-color")
const colorInput = document.querySelector("#color-input"); 
const colorBlur = document.querySelector("#color-blur"); 

const Copied = document.querySelector(".Copied")
 
window.addEventListener("load", setColor);
colorInput.addEventListener("input", setColor);



var arrColor= ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f",];

colorBtn.addEventListener("click",function(){
    let hex = "#";
    for(let i = 0 ; i < 6; i++) {
        hex += arrColor[getRandomNumber()] 
    }
    printColor.textContent = hex;
    colorScreen.style.backgroundColor = hex;
    function getRandomNumber() {
      return  Math.floor(Math.random()*arrColor.length)
    }
})


printColor.addEventListener("click",function(){
  var copyOut = printColor.textContent;
  // var copyopa = colorBlur.value+"%"

navigator.clipboard.writeText(`${copyOut}`);
  Copied.classList.add("clicked")
  setTimeout(function() {
   Copied.classList.remove("clicked")
  },2000)
})
function setColor() {
	colorScreen.style.background = colorInput.value;
  printColor.textContent = colorInput.value;

}
// ---------------------------
const rangeSliders  = document.querySelectorAll('input');
const red = document.querySelector('.red');
const green = document.querySelector('.green')
const blue = document.querySelector('.blue')

rangeSliders.forEach(rangeSlider => 
                     rangeSlider.addEventListener('input', displayValue))

rangeSliders.forEach(rangeSlider => 
                     rangeSlider.addEventListener('click', changeColor))


                 
                    
function rgbToHex(R,G,B) {
  const hexDigit = [R, G, B].map( item => {
    return Number(item).toString(16).padStart(2, '0')
  }).join('')
  
  return '#'+ hexDigit;
}

function displayValue(e) {
  let currentValue = e.target.value
  if(e.target.classList.contains('alpha')) {
    const alphaValue = currentValue / 100;
    e.target.nextElementSibling.innerHTML = alphaValue;
  } else {
  e.target.nextElementSibling.innerHTML = currentValue;
  }
  
  const hexValue = (rgbToHex(red.value, green.value, blue.value)).toUpperCase();
  
  printColor.innerHTML = hexValue;
}
function changeColor() {
  colorScreen.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
}

