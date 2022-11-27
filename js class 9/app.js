// for(let i = 0;i < 10;i++){
//     for(j = 0;j < i;j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// FUNCTION : DEFINE AND CALL
//  1 Types
// 1) Predefine => build in
// 2) user define => define or call

// function hello(){
//     console.log("Hello world!")
//     return "Hello world hello user"
// }
// // hello()
// var data = hello()
// console.log(data)

// function user_inp(){
//     A = prompt("Enter user name")
//     return A
// }
//  user_inp()
// var  data = user_inp()
// console.log(data) 

// function user_inp(){
//     A = prompt("Enter your name ")
//     return A
// }

// user_inp()
// var data = user_inp()
// console.log(data)


// function even_odd(){
//     if(inp%2 == 0){
//         return console.log("Even "+inp)
//     }else{
//         return console.log("Odd "+inp)
//     }

// }
// var inp = prompt("Enter a number")
// even_odd()
// var data = even_odd()
// console.log(data)

// function even_odd(){
//     if(inp%2 == 0){
//         return console.log("Even "+inp)
//     }else{
//         return console.log("Odd "+inp)
//     }
// }

// var inp = prompt("Enter a number")
// even_odd()
// var data = even_odd()
// console.log(data)

// function even_odd(){
//     if(inp%2 == 0){
//         return console.log("Even "+inp)
//     }else {
//         return console.log("Odd "+inp)
//     }

// }
// var inp = prompt("Enter a number")
// even_odd()
// var data = even_odd()
// console.log(data)

// function sum(a,b){
//     return a+b
// }

// var res = sum(3,6)
// console.log(res)


// function getname(){
//     var inp = prompt("Enter user name ")
//     checkValidate(inp)
// }

// function checkValidate(data){
//     var chck = true
//     for(var i = 0; i<data.length;i++){
//         if(data.charCodeAt(i)==32||
//             data.charCodeAt(i)>=48 &&
//                 data.charCodeAt(i)<=57){
//                     chck = false
//     break
// }
//     }
//     if(chck == true){
//         console.log("Valid data")
//     }else{
//         console.log("Invalid data")
//     }

// }

// getname()


function getname(){
    var inp = prompt("Enter user name ")
    checkValidate(inp)
}
var array = ["asad" , "ali123" , ""]

function checkValidate(data){
    var chck = true
    for(var i = 0; i<data.length;i++){
        if(data.charCodeAt(i)==32||
            data.charCodeAt(i)>=48 &&
                data.charCodeAt(i)<=57){
                    chck = false
    break
}
    }
    if(chck == true){
        console.log("Valid data")
        checkusernamedb(data)
    }else{
        console.log("Invalid data")
    }

}
function checkusernamedb(data){
 var chck = true
 for(var j = 0;j < array.length;j++){
    if(data == array[j]){
        chck = false
        break
    }
 }
 if(chk==true ){
    console.log("you use this username")

}
else{
    console.log("already use with other ")
}
}

getname()