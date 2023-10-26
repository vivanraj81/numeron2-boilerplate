// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
// Iteration 3: Creating variables required to make the game functional
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number"
// Iteration 5: Creating a ranran function to make the game functional
// Iteration 6: Making the Operators (button) functional
// Iteration 7: Making Timer functional


const number1box=document.getElementById("number1")
const number2box=document.getElementById("number2");
const number3box=document.getElementById("number3");

var number1=Math.round(Math.random()*100);
var number2=Math.round(Math.random()*100);


var operator;
var number3;

function ranran(){
operator=Math.round(Math.random()*5)
switch(operator){
case 1:
number3=number1+number2;
break;
case 2:
number3=number1-number2;
break;
case 3:
number3=number1*number2;
break;
case 4:
number3=Math.floor(number1/number2);
break;
case 5:
number3=number1%number2;
break;
case 0:
ranran();
}
number1box.innerHTML=number1;
number2box.innerHTML=number2;
number3box.innerHTML=number3;
}

ranran();

score=parseInt(sessionStorage.getItem("score")) || 0 ;

const btns = document.getElementById("buttons")

btns.addEventListener("click",(event)=>{
    if (number1+number2 == number3  && event.target.id=="plus"){
        console.log("win")
        score+=1
        window.location.reload()
        sessionStorage.setItem("score",score)  
    }
    else if (number1-number2 == number3 && event.target.id=="minus"){
        console.log("win")
        score+=1
        sessionStorage.setItem("score",score)   
        window.location.reload()
    }
    else if (number1*number2 == number3  && event.target.id=="mul"){
        console.log("win")
        score+=1
        sessionStorage.setItem("score",score)
        window.location.reload()
    }
    else if (number1/number2 == number3  && event.target.id=="divide"){
        console.log("win")
        score+=1
        sessionStorage.setItem("score",score)
        window.location.reload()
    }
    else if (number1%number2 == number3  && event.target.id=="modulus"){
        console.log("win")
        score+=1
        sessionStorage.setItem("score",score)
        window.location.reload()
    }

    else{
        window.location.href="gameover.html"
    }
})
console.log(score)


const timer=document.getElementById("timer")
let timeLeft = 20;

timer.textContent = timeLeft;
const timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = `${timeLeft}`;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        window.location.href="gameover.html"
    }},1000)


























