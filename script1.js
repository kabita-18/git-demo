let divcontainer = document.getElementById("divcontainer");
let counterValue = document.getElementById("CounterValue");
let dbtn = document.getElementById("DBtn");
let rbtn = document.getElementById("RBtn");
let ibtn = document.getElementById("IBtn");

let counter = 0;
ibtn.addEventListener('click', (e)=>{
  if(counter % 2 === 0){
    counter = counter+5;
    counterValue.textContent = counter;   
  }
  else if(counter % 2 !== 0){
    counter = counter+1;
    counterValue.textContent = counter;
  } 
})
function onIncrement(){
  let counterValue = document.getElementById("CounterValue");
  if(counter % 2 === 0){
    counter = counter+5;
    counterValue.textContent = counter;   
  }
  else if(counter % 2 !== 0){
    counter = counter+1;
    counterValue.textContent = counter;
  }  
}

function onReset(){
  counter=0;
  counterValue.textContent=counter;
  
}

function onDecrement(){
  if(counter % 2 === 0){
    counter = counter-2;
    counterValue.textContent = counter;
  }else if(counter %2 !== 0){
    counter = counter-2;
    counterValue.textContent = counter;
  }
}