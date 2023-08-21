let header=document.getElementById("playerName")
let squres=document.querySelectorAll("#squregame div")
let arraysqures=Array.from(squres)
 

function number(num1,num2,num3){
  arraysqures[num1].style.background="black"
  arraysqures[num2].style.background="black"
  arraysqures[num3].style.background="black"
  header.innerHTML=`${arraysqures[num2].innerHTML} winner`;
  setInterval(() => {
    header.innerHTML +="."
  }, 1000);
  setTimeout(() =>{
    location.reload()
  },4000)
}

function check(){
 if(arraysqures[0].innerHTML == arraysqures[1].innerHTML
   && arraysqures[1].innerHTML == arraysqures[2].innerHTML 
  && arraysqures[0].innerHTML !=""){

    number(0,1,2)
 }
else if(arraysqures[3].innerHTML == arraysqures[4].innerHTML
   && arraysqures[4].innerHTML == arraysqures[5].innerHTML 
  && arraysqures[4].innerHTML !=""){

   number(3,4,5)
 }
else if(arraysqures[6].innerHTML == arraysqures[7].innerHTML
   && arraysqures[7].innerHTML == arraysqures[8].innerHTML 
  && arraysqures[8].innerHTML !=""){
    
   number(6,7,8)
 }
else if(arraysqures[2].innerHTML == arraysqures[4].innerHTML
   && arraysqures[4].innerHTML == arraysqures[6].innerHTML 
  && arraysqures[2].innerHTML !=""){
   number(2,4,6)

 }
else if(arraysqures[0].innerHTML == arraysqures[4].innerHTML
   && arraysqures[4].innerHTML == arraysqures[8].innerHTML 
  && arraysqures[0].innerHTML !=""){
 number(0,4,8)

 }
else if(arraysqures[0].innerHTML == arraysqures[3].innerHTML
   && arraysqures[3].innerHTML == arraysqures[6].innerHTML 
  && arraysqures[0].innerHTML !=""){
 number(0,3,6)

 }
else if(arraysqures[1].innerHTML == arraysqures[4].innerHTML
   && arraysqures[4].innerHTML == arraysqures[7].innerHTML 
  && arraysqures[1].innerHTML !=""){
 number(1,4,7)

 }
else if(arraysqures[2].innerHTML == arraysqures[5].innerHTML
   && arraysqures[5].innerHTML == arraysqures[8].innerHTML 
  && arraysqures[2].innerHTML !=""){
 number(2,5,8)

 }
}



player="x"
function game(id){
 let element=document.getElementById(id)   

  if(player =="x"  && element.innerHTML ==""){
    element.innerHTML="x"
    header.innerHTML="o"
    player = "o"
  }else if(player == "o" && element.innerHTML ==""){
    element.innerHTML="o"
    header.innerHTML="x"
    player = "x"
  }
  check()
}


