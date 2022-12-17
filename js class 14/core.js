// var h1 = document.getElementsByTagName("h1")
// console.log(h1[0].innerText)
// console.log(h1[0].hasAttribute("style"))


// var h2 = document.getElementsByTagName("h2")
// h2[0].addEventListener("mouseover".function){
//     h1[0].setAttribute("style","display:none")
// }


// var Btn = document.getElementsByTagName("Button")
// Btn[0].addEventListener("click",function(){
//     i =4
//     btn[0].setAttribute("disabled",true)
//     btn[1].setAttribute("disabled",true)
//     var maindata = btn[1].innerText
//     btn[0].innerText=`wait for this irder $[i] second`
//     setInterval(()=>{
//         i-=1
//         if()
//         btn[0].innerText=`wait for this irder $[i] second`
//         if(i==0){
//             btn[0].removeAttribute("disabled")
//     btn[1].removeAttribute("disabled")
//     btn[1].innerText=maindata
//     clearInterval(timer)
//         }


//     },1000)
// })


// var h1 = document.getElementsByTagName("h1")
// console.log(h1[0].innerText)

// var h2 = document.getElementsByTagName("h2")

// console.log(h1[0].getAttribute("style"))
// h2[0].addA

// var btn = document.getElementsByTagName("button")


// function clicker(index) {

//     i = 4
//     btn[0].setAttribute("disabled", true)
//     btn[1].setAttribute("disabled", true)
//     var data =[]
    
//     // btn[].innerText = `Wait for this order ${i} Second`
//     var timer = setInterval(() => {
//         i -= 1
//         if(i!=0){
//             for (var j = 0; j < btn.length; j++) {
//                 // console.log(btn[j])
                
//                 if (index != j) {
//                     data.push(btn[j].innerText)
//                     btn[j].innerText = `Wait for this order ${i} Second`

//                 }
    
//             }

//         }

      

//         if (i == 0) {
//             btn[0].removeAttribute("disabled")
//             btn[1].removeAttribute("disabled")
//             // console.log(index)
//             for (var j = 0; j < btn.length; j++) {

//                 if(j!=index){
//                     btn[j].innerText =  data[j]
//                     clearInterval(timer)
//                 }
//             }
          
//         }
//     }, 1000)


// }
array = [
    ["ali","asad","asif"],
    ["ali1","asad1","asif1"],
    ["ali2","asad2","asif2"],
]

var div = document.getElementsByTagName("div")
var element = document.createElement("table")

for(var i=0;i < array.length;i++){
    var data = document.createElement("tr")
    element.appendChild(data)
    for(var j=0;j<array[i].length;j++){
        var li = document.createElement("td")
        li.innerText=array[i][j]
        data.appendChild(li)
        li.setAttribute("style","border:1px solid red")
    }
}
div[0].appendChild(element)
element.setAttribute("style","border:1px solid red")

