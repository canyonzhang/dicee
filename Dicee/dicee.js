randNum1 =  Math.round(Math.floor(Math.random()*6)+ 1);
randNum2 =  Math.round(Math.floor(Math.random()*6)+ 1);
console.log("rand num 1 is " + randNum1);
console.log("rand num 2 is " + randNum2);

function roll(num1, num2){
  if(randNum1 == 1){
    document.querySelector(".img1").src = "images/dice1.png"
  }
  else if(randNum1 == 2){
    document.querySelector(".img1").src = "images/dice2.png"
  }
  else if(randNum1 == 3){
    document.querySelector(".img1").src = "images/dice3.png"
  }
  else if(randNum1 == 4){
    document.querySelector(".img1").src = "images/dice4.png"
  }

  else if(randNum1 == 5){
    document.querySelector(".img1").src = "images/dice5.png"
  }
  else{
    document.querySelector(".img1").src = "images/dice6.png"
  }

  //dice two
  if(randNum2 == 1){
    document.querySelector(".img2").src = "images/dice1.png"
  }
  else if(randNum2 == 2){
    document.querySelector(".img2").src = "images/dice2.png"
  }
  else if(randNum2 == 3){
    document.querySelector(".img2").src = "images/dice3.png"
  }
  else if(randNum2 == 4){
    document.querySelector(".img2").src = "images/dice4.png"
  }

  else if(randNum2 == 5){
    document.querySelector(".img2").src = "images/dice5.png"
  }
  else{
    document.querySelector(".img2").src = "images/dice6.png"
  }

  if(num1 > num2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if(num2 > num1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩" ;
  }
  else{
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

roll(randNum1, randNum2);
