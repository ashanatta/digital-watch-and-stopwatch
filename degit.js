const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();


function bmiCalculater (weight , hight){
  var bmi = weight/(hight*hight);
  return (Math.round(bmi));
  }
  var bmi = bmiCalculater (591,1.8);
  if(bmi<18.5){
    console.log(bmi+"you are underweight.")
  }
  if(bmi===18.8 && 24.9){
    console.log(bmi+"you have a normal weight.")
  }
  if(bmi >24.5){
    console.log(bmi+"your overweight")
  }

  // alertBox("hello")

// prompt("enter your name: ")
// prompt("enter your patner name: ")
// let num=Math.random();
// num=num*100;
// num=Math.floor(num)+1;
// if(num >90 ){
//   alert(num+"you love each other")
// }
// else{
//   alert(num + "sorry your not made for each other")
// }
var coder=['ashan','bhatti','aqib','asif','atif']
var x=prompt("enter your name and add them:")
coder.push('ashnnn');

if(coder.includes(x)){
  console.log("welcome")
}
else{
  console.log("oh sorry baby")
}



  function fib(n){
    const fibArry=[0,1];
    for (var i=2; i<10; i++){
      fibArry.push(fibArry[i-2]+fibArry[i-1]);
    }
    return fibArry
  }
  
console.log(fib(10));
