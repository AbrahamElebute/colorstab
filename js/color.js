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

colorBlur.addEventListener("input",function(){
colorScreen.style.opacity = colorBlur.value+"%"
})

printColor.addEventListener("click",function(){
  var copyOut = printColor.textContent;
  var copyopa = colorBlur.value+"%"

navigator.clipboard.writeText(`background-color:${copyOut}; 
opacity:${copyopa};`);
  Copied.classList.add("clicked")
  setTimeout(function() {
   Copied.classList.remove("clicked")
  },2000)
})
function setColor() {
	colorScreen.style.background = colorInput.value;
  printColor.textContent = colorInput.value;

}