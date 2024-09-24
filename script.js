


let ball3 =document.querySelector("#ball");
let bat = document.querySelector('#bat');
let stamp = document.querySelector('#stamp');
let message = document.querySelector('.para');
let message2 = document.querySelector('.para2');
let win = document.querySelector(".winResult");
let loss =document.querySelector(".lossResult")

 let randomNumber = () => Math.floor((  Math.random()*3 ));


let userChoise;

let score=0;
let comScore = 0;


ball.addEventListener("click",  function (){
  let random = randomNumber() ;
  userChoise = ball;
  if(random == 0 && userChoise == ball){
   
    message.innerHTML ="draw"
   
    message2.innerHTML = "computer choise ball ";
    setTimeout (function(){
      message.innerHTML =""
   
      message2.innerHTML = "";
    },1500)
  
  }else if(random == 1) {
  
     message.innerHTML ="You loss"
   
    message2.innerHTML = "computer choise bat ";
    setTimeout (function(){
      message.innerHTML =""
   
      message2.innerHTML = "";
    },1500)
    comScore++;
    loss.innerHTML =`${comScore}`

 
  }else{
   
     message.innerHTML ="You win"
  
    message2.innerHTML = "computer choise stamp ";
    setTimeout (function(){
      message.innerHTML =""
   
      message2.innerHTML = "";
    },1500)

    score++
    console.log(score);
  win.innerHTML = `${score}`
    
  }


});
bat.addEventListener("click",  function (){
  let random = randomNumber() ;
  userChoise = bat;
  if(random == 0 && userChoise == bat){
   
      message.innerHTML ="You win"
   
    message2.innerHTML = "computer choise ball ";
    setTimeout (function(){
      message.innerHTML =""
   
      message2.innerHTML = "";
    },1500)
    score++
    console.log(score);
     win.innerHTML = `${score}`
  }else if(random == 1) {
   
   
      message.innerHTML ="draw"
    message2.innerHTML = "computer choise bat ";
    setTimeout (function(){
      message.innerHTML =""
   
      message2.innerHTML = "";
    },1500)
  
  }else{
 
 
    message.innerHTML = "You loss"
    message2.innerHTML = "computer choise stamp ";
    setTimeout (function(){
      message.innerHTML =""
   
      message2.innerHTML = "";
    },1500)
    comScore++;
    loss.innerHTML =`${comScore}`
    
  }


})
stamp.addEventListener("click",  function (){
  let random = randomNumber() ;
  userChoise = stamp;
  if(random == 0 && userChoise == stamp){
  
     message.innerHTML = "You loss"
    message2.innerHTML = "computer choise ball ";
    setTimeout (function(){
      message.innerHTML =""
   
      message2.innerHTML = "";
    },1500)
     comScore++;
    loss.innerHTML =`${comScore}`
  }else if(random == 1) {
  
     message.innerHTML = "You win"
  
    message2.innerHTML = "computer choise bat ";
    setTimeout (function(){
      message.innerHTML =""
   
      message2.innerHTML = "";
    },1500)
    score++
    console.log(score)
     win.innerHTML = `${score}`
  }else{


     message.innerHTML = "draw"
   
    message2.innerHTML = "computer choise stamp ";
    setTimeout (function(){
      message.innerHTML =""
   
      message2.innerHTML = "";
    },1500)
    
  }


})

