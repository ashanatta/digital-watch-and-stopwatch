// let info={
//      name:'ashan',
//      age : 22,
//      boolean:false,
//      undefine:undefined,
//      colore : null
// }
//     console.log (info);
// let Array =[
//     'ashan',
//      22,
//     false,
//     'undefined',
//      'null'
// ]

// console.log(Array)
// // //////
// function gernal(name){
//     console.log("hello mr."+name)
// }
// gernal('ashan')

// ////////
// function squre(number){
//     return number*number;
// }
// let number=squre(2);
// console.log(number)

// console.log("ashan")
 
// let a="ashan"
// console.log(a);

// console.log("calculation:");
// p=22;
// i=33;
// console.log(p+i);
// console.log(p-i);
// console.log(p/i);
// console.log(p*i);
// console.log(p**i);

// com=22;
// web =22;

// console.log(com==web)
// console.log(com!=web)

// let w=prompt("enter your age:");
// w=Number.parseInt(w);
// if (w<10){
// alert("your kid know.")
// }
// else if(w>100){
// alert("your too old for this ")
// }
// else{
//     alert("your adult now.")
// }

// let age=prompt("enter your age :");
// switch(age){
//     case "11":
//         console.log("your age is 11.")
//         break
//         case "12":
//             console.log("your age is 12.")
//             break
//             case "13":
//                 console.log("your age is 13.")
//                 break
//                 case "14":
//                     console.log("your age is 14.")
//                     break
//                     default:
//                         console.log("your under age.")
// }

// a=prompt("enter number.");
// if(a%2==0 && a%3==0){
//     console.log("a/2 and a/3 =")
// }
// else{
//     console.log("not")
// }
// a=prompt("enter number.");
// if(a%2==0){
//     console.log("devisible 2 ")
// }
// else if(a%3==0){
//     console.log("devisible 3")
// }
// else{
//     console.log("not")
// }
// let age =12;
// let g=age>18?"you can drive":"not "
// console.log(g)

// let n=prompt("enter number:");//3
// let sum=0//0
// n=Number.parseInt(n)
// for (let i=0 ; i<n;i++){ //
//     sum +=(i+1)
//     // console.log(i+1)
// }
// console.log(n+sum)

// var l = "3";
// var b = "8";

// var temp = l;
// l = b;
// b = temp;

// console.log("a is:",l); // "8"
// console.log("b is:",b); // "3"

// var txt = prompt("enter your message:");
// var txtcount =txt.length;
// alert("your txt count is "+txtcount+"remaining world is"+(150-txtcount));

// var na="ashan";
// console.log(na.slice(1,2));

// var tweet=prompt("enter tweet:");
// var tweetunder100 =tweet.slice(0,101);
// alert(tweetunder100);

// function avg(a,b){
//     return (a+b)/2;
// }
// c1=avg(2,4)
// c2=avg(22,3);
// console.log(c1)
// console.log(c2)

document.addEventListener("click",function click() {
    console.log("click")
    let conf=confirm("are you ok ");
    console.log(conf)
})