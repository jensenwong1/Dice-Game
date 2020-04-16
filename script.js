var ranNum1 = Math.floor(Math.random()*6)+1;
var ranNum2 = Math.floor(Math.random()*6)+1;

var randImage1= "dice" + ranNum1+ '.png';
var randImage2= "dice" + ranNum2+ '.png';

var randomImage="Images/"+ randImage1;
document.querySelectorAll("img")[0].setAttribute('src', randomImage);

var randomImage2="Images/"+ randImage2;
document.querySelectorAll("img")[1].setAttribute('src', randomImage2);

var a=ranNum1;
var b=ranNum2;

if (ranNum1 > ranNum2) {
    document.querySelector('h1').innerHTML='🚩Player 1 wins';
} else if (ranNum2>ranNum1) {
   document.querySelector('h1').innerHTML='Player 2 wins 🚩';
}
   else {
    document.querySelector('h1').innerHTML='Draw';
}
