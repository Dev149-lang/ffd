// const tindersuer = new object()

const tinderuser= {}

tinderuser.id = "123adb"
tinderuser.name = "dev"
tinderuser.isloggedin = false

console.log(tinderuser);

const anotheruser = {
    name: {
        fullname:{
            firstname: "dev",
            lastname: "kish"
        }
    }
}

console.log(anotheruser.name.fullname.firstname);
// console.log(anotheruser.name.fullname?.firstname); ? is for special case when maybe full name is not mentioned

