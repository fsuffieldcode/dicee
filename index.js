let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let h1 = document.querySelector("h1");
let p1Score = randomDie();
let p2Score = randomDie();

function randomDie() {
    let randomNum = Math.floor(Math.random() * Math.floor(6)) + 1;
    return randomNum;
}

let p1ScoreText = "images/dice" + p1Score + ".png";
img1.setAttribute("src", p1ScoreText);

let p2ScoreText = "images/dice" + p2Score + ".png";
img2.setAttribute("src", p2ScoreText);


if(p1Score > p2Score){
    h1.textContent = "🚩 Player 1 Wins!";
} else if(p1Score < p2Score){
    h1.textContent = "🚩 Player 2 Wins!";
} else {
    h1.textContent = "Draw!";
}