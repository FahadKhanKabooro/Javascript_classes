

// get element by id

// var a = document.getElementById("h1")
// console.log(a)

// get element class name 
// var b = document.getElementsByClassName("h2")
// console.log(b[0].innerHTML)

// Gett element By iD or TAg name 

// var id1 = document.getElementById("id1")
// console.log(id1)
// var h1 = id1.getElementsByTagName("b")
// console.log("b")
// h1[0].innerHTML+=" hello Faddy<br>"
// h1[1].style.color="red"
// h1[1].style.fontSize='3rem'
// h1[0].style.backgroundColor='yellow'
// h1[0].style.fontSize='2rem'

// TO DO LIST

// var list = document.getElementById("list")
// var inp = document.getElementById("text")
// var getlist = list.getElementsByTagName('li')
// console.log(getlist.length)
// for(var i in getlist){
//     getlist[i].className="none"
// }
// i = 0
// var btn = document.getElementById("btn")
// btn.addEventListener("click",function(){
//     var inpdata = inp.value
//     if(i >= getlist.length){
//         alert("not entered")
//     }
//     else{
//     if(inpdata != null && inpdata != ""){
//         getlist[i].innerText = inpdata
//         getlist[i].className=""
//         i += 1
//     }}
// })

// Set attribute , get attribute and remove attributes

// var h1 = document.getElementsByTagName("h1")
// console.log(h1)
// setTimeout(()=>{
// h1[0].setAttribute("style",`
// color:red;
// background-color:yellow;
// font-size:40px;`)
// console.log(h1[0])},5000)

// setTimeout(()=>{
//     console.log(h1[0].getAttribute("style"))
//     h1[0].removeAttribute("style")
// }, 9000)


// var btn1 = document.getElementById("btn1")
// var class1 = document.getElementsByTagName("h1")
// btn1.addEventListener("click",function (){

// if(btn1.innerText!="hide"){
//     class1[0].removeAttribute("class")
//     btn1.innerText="show"
// }
// else{
//     class1[0].setAttribute("class", "none")
//     btn1.innerText= "hide"
// }
// })


function next(){
if(i == 0){
    img1.src=array[]
}
}