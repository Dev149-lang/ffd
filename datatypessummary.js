const id = Symbol('1234')

const anotherid = Symbol('1234')

console.log(id === anotherid);
// const bigN = 23333333333333333333333333333n



//  refernce type non primitive

const heros = ["shaktiman","naagraj","doga"]; //array


//  object is always under curly {} 

let myobj = {
    name: "deww",
    age: 20
};

const myFunction = function() {

    console.log("hello world");
    
}


console.log(typeof myobj);


/********************************** */


//  stack (primitive), heap(non-primitive)