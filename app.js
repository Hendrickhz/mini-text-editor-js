//selectors
const obj = document.querySelector("#obj");
const color = document.querySelector("#color");
const text = document.querySelector("#text");
const fontSize = document.querySelector("#fontSize");
const fontSelect = document.querySelector("#fontSelect");

const fonts = ["Script MT Bold", "Ravie Regular", "Corbel", "Century Gothic"];

//adding htnml
fontSize.min = parseFloat(window.getComputedStyle(obj).fontSize);
fontSize.max = 100;
fontSize.value = fontSize.min;

//obj.classList.add("border", "p-4", "rounded");

//functions

const changeText = (event) => {
  obj.innerText = event.target.value;
};
const changeFont = (event) => {
  obj.style.fontFamily = event.target.value;
  //console.log(obj.getElementsByClassName.fontFamily);
};
const changeColor = (event) => {
  obj.style.color = event.target.value;
};
const changeFontSize = (event) => {
  obj.style.fontSize = event.target.value + "px";
};

//adding fonts to select box
fonts.forEach((font) => fontSelect.append(new Option(font, font)));

//events
text.addEventListener("keyup", changeText);
fontSelect.addEventListener("change", changeFont);
color.addEventListener("change", changeColor);
fontSize.addEventListener("change", changeFontSize);
