//VARIABLE 
let calcBtn = document.getElementById("calc-btn");
let FirstInput = document.getElementById("input1");
let LastInput = document.getElementById("input2");

let containerE1 = document.getElementById("output");
let allbtn = document.getElementById("all-btn");

// event listener
calcBtn.addEventListener ("click", calcBtnClicked);
allbtn.addEventListener("click",allbtnClicked);
let randomnames = ["the monkey","the cow", "the sloth","the troll","the griefer"];
// INDEX -- >         0             1          2
//library of random functions


//return a random decimal between low(inclusive) and high (exclusive)

function randomDec(low,high) {
   return Math.random() *(high-low) +low;


}
//return a random integer between low and high
function randomInt(low,high) {
   return Math.floor(Math.random() *(high-low)+low);

}
// return a random rgb string
function randomRGB() {
   let r=randomInt(0,256);
   let g=randomInt(0,256);
   let b=randomInt(0,256);

   return "rgb("+ r +", "+g+", " +b+")";
} 

function calcBtnClicked() {
   let firstname = FirstInput.value;
   let lastname = LastInput.value;
   let nickname =  randomnames[randomInt(0,randomnames.length)]

containerE1.innerHTML = `${firstname} "${nickname}" ${lastname}`

}

function allbtnClicked() {
   let firstname = FirstInput.value;
   let lastname = LastInput.value;
   
   divStr ="";
  
   for (let i=0; i < randomnames.length; i++) {
      divStr += firstname + " " + randomnames[i] + " " + lastname + "<br>"
    
   }
   containerE1.innerHTML = divStr;
  

}