var randomNumber1 =  Math.floor(Math.random()*6+1); //1-6
var randomPic1 = "images/dice" + randomNumber1 + ".png"; //images/dice*.png
document.querySelector(".img1").setAttribute("src",randomPic1); //changing img src to random src in images/

var randomNumber2 = Math.floor(Math.random()*6+1);
var randomPic2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomPic2);
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "DRAW!!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "🚩Player 1 WINS";
}
else{document.querySelector("h1").innerText = "Player 2 WINS🚩";}