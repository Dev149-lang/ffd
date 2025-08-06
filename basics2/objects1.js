// singleton
//  object liter

const mysym = Symbol("key1") // symbol

const jsuser = {                //object
    name: "dev", // can be written as "name" too
    age: 25 ,
    // mysym : "mykey1" wont work cux no [ ]
    [mysym]: "mykey1",
    location: "jaipur",
    email: "devraj@gamil.com" ,
    isloggedin: false ,
    lastlogindays : ["monday","tuesday"],
}

//  to access
console.log(jsuser.age);
 console.log(jsuser["name"]); //kept name in "" cuz its
                                //  being kept as a string in the back of computer 
                                // like all those variables define within





//  console.log(jsuser.mysym);  // wrong
 console.log(jsuser[mysym]); // correct syntax
 console.log(typeof (jsuser[mysym])); // string cuz the notation is right


//   jsjd ghhh nnbb ......gggn

jsuser.greeeting =  function(){
    console.log("hellow user")
    }
jsuser.greeeting2=  function(){
    console.log(`ellow ${this.location}` ) 
}

  console.log(jsuser.greeeting());
  console.log(jsuser.greeeting2());