var wins= 0;
var losses= 0;
var guessleft= 9;

/* var wins= document.getElementById("wins");
var losses= document.getElementById("losses");
var guessleft_=document.getElementById("guessleft");
var yourguessessofar=document.getElementById("yourguessessofar"); */

var winDiv = document.querySelector(".wins");
var lossesDiv = document.querySelector(".losses");
var guessesleftDiv = document.querySelector(".guessesleft");
var yourguessessofar_ = document.querySelector(".yourguessessofar");

var userInput = document.getElementById("guesses");

userInput.addEventListener('keyup', function(){
console.log("whatever.");
});

/* userInput.addEventListener('change', function(){
    console.log("whatever.");
}); */

guessesleftDiv.innerHTML = 9;

function generateRandom(){
    yourguessessofar_.innerHTML=''
    var alpaphet= "abcdefghijklmnopqrstuvwxyz";
    var ranletternum= Math.floor((Math.random() * 25) + 0);
    var secretletter= alpaphet[ranletternum];
    
    //salert(secretletter);
    userInput.focus();

    return secretletter;
}

var myGuess = generateRandom();

//alert(myGuess);




var yourguessessofar = [];

function guess () {
    //alert("This should work......");
 var userguess= document.getElementById("guesses").value;
  //alert(userguess.value); 
  yourguessessofar.push(userguess);
  yourguessessofar_.innerHTML=yourguessessofar;

  console.log(yourguessessofar);


  userInput.value='';
  userInput.focus();
  //alert(guesses);

  guessleft--;
  guessesleftDiv.innerHTML = guessleft;

  //guessleft_.appendChild(guessleft);

  if(userguess===myGuess){
    wins++;
    console.log("You are a winner");
    console.log(wins);
    guesses.length = 0;
    yourguessessofar.length =0;
    yourguessessofar_.innerHTML='';
    guessleft = 9; 
    myGuess = generateRandom();
   //alert(myGuess);
    console.log(guesses);

    //console.log(winDiv);
    winDiv.innerHTML = wins;
  }

  if(guessleft === 0){
    losses++;
    console.log("You lost :( ");
    console.log(losses);
    guesses.length = 0;
    guessleft = 9;  
    myGuess = generateRandom();
    //console.log(lossesDiv);
    lossesDiv.innerHTML = losses;
    yourguessessofar.length =0;
    yourguessessofar_.innerHTML='';
  }
}