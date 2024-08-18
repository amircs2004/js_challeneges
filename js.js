///first problem
function even() {
    let evenNUM = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] %2 === 0) {
           evenNUM.push(numbers[i])
        }
    }
return evenNUM ;
}

let numbers = [3,2 , 2, 1] 
let evenNUM = even(numbers)

console.log(evenNUM);
///second problem



 function agePERperson() {
     let newarr = []    
    for (let i = 0; i < persons.length; i++) {
       if (persons.age > 30) {
         newarr.push(persons.age[i])
       }
     }
 return newarr ;
    }
    let persons = [ {name : "amir" ,age :30},
        {name:"ahmed",age:35} , 
        {name:"khalid", age:30} ];
    newarr = agePERperson(persons) ;
    console.log(newarr)
//////////////
    /*/*buggggggggggggg/
    ///////////////////////////////
    /*implament a stack data struct in js using an array */

    let stack = [] //lifo

    stack.push("imagine")
    stack.push("amir")
    stack.push("code213")
    stack.push("drips")
    stack.push("regular")
    stack.push("let go")
    stack.push("hoh")
    console.log(stack)
stack.pop() ///the last element was added in the stack will be deleted
console.log(stack)

/*implement a queue data struct in js using an aray */ 

let queue = [] //fifo
queue.push("imagine")
queue.push("amir")
queue.push("code213")
queue.push("drips")
queue.push("regular")
queue.push("let go")
queue.push("hoh")
queue.shift ()
console.log(queue)
///
/*let string = "imagine a world" 
let array = string.split(" ")
console.log(array);
let without = []
function removeVOWELS() {
    //let without = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] != "a")  {
            without.push(array[i])
        }
         if (array[i] != "i") {
            without.push(array[i])
         }
         if (array[i] != "e") {
            without.push(array[i])
         }
         if (array[i] != "u") {
            without.push(array[i])
         }
         if (array[i] != "o") {
            without.push(array[i])
         }
         if (array[i] != "w") {
            without.push(array[i])
         }
         if (array[i] != "y") {
            without.push(array[i])
        }
return without
 }
}
let withOut = removeVOWELS(array)
console.log(withOut) */
//


function removeVOWELS(array) {
    //let without = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "a")  {
            array.splice()
        }
         if (array[i] === "i") {
            array.splice(i)
         }
         if (array[i] === "e") {
            array.splice(i)
         }
         if (array[i] === "u") {
            array.splice(i)
         }
         if (array[i] === "o") {
            array.splice(i)
         }
        
         if (array[i] === "y") {
            array.splice(i)
        }
return array
 }
}
let strinG = "imagine a world" 
let array = strinG.split(" ")
let arraY = removeVOWELS (array)
 console.log(arraY)
/*
function removeVowels(str) {
    const vowels = "aeiouAEIOU";
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        result   
   += str[i];
      }
    }
    return result;
  }
  const inputString = "hello, world!";
const outputString = removeVowels(inputString);
console.log(outputString)*/