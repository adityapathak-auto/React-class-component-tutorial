

var a =4 ;

let square = ()=>{
  return a*a;
  
}

console.log(square());



// <p >Arrow function dont have their own this they use their parents this  binds it to themselves that why in class components we have to find normal functions  </p>


// To Pass number of arguments in arrow function we use spread operator.
var fun = (...n)=>{
  console.log(n[0])
}

fun(1,2,3)



var funOld = function(){
  console.log(arguments[0]);
}

funOld(1,2,3);



// Rest Operator


var arr2 = [1,2,3,4,5];

let [c,b,...arr]=arr2;

console.log(c,b,arr);



/// Enhanced Object Literal 

let name = "Aditya";
let city = "Rewa";

let obj = {
  name,
  city,
  display(){
    console.log(this.name);
  }
}

console.log(obj);
console.log(obj.display());