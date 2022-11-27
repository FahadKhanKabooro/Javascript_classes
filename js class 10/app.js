// function sum (a,b){
//     return a*b
// }

// var a = prompt("Enter a value")
// var b = prompt("Enter b value")
// sum(a,b)
// console.log(sum(a,b))



// LOcal and global Function 

// var a = 10  Global
// function abc(){
//     // var a = 5 local
//     console.log(a)
// }
// abc()
// console.log(a)



// DOM : EVENT : User interaction 

function b1click(){
     return alert("Function Works Fine")
}

function imgclick(e){
    // alert("click me for full size")
    console.log(e.src)
    e.src ="https://th.bing.com/th/id/R.bb42df226d4d6f991398c239937edfb6?rik=L4%2fosSZE66aEVw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f1%2f15%2fFlower-IMG_0314.JPG&ehk=ZTUIYbxCfLePdqTNWgKS66R6NuAmJzUH9JSnY15yKqc%3d&risl=&pid=ImgRaw&r=0"

}
function imgclick2(e){
    // alert("click me for full size")
    console.log(e.src)
    e.src ="https://th.bing.com/th/id/OIP.n5qQs-KoAYoaL9Ac6_2ruAHaFc?pid=ImgDet&rs=1"
}

function head1(e){
    e.style.border="2px solid blue"
    e.style.backgroundColor="white"
    e.style.color="red"
    e.style.fontSize="larger"

}
function head2(e){
        e.style.border="2px solid blue"
    e.style.backgroundColor="white"
    e.style.color="red"
    e.style.fontSize="larger"}
   


function headA(e){
    
    e.style.border=""
    e.style.backgroundColor=""
    e.style.color=""
    e.style.fontSize=""
}

function img1(e){
    var im1 =     e.src ="https://th.bing.com/th/id/R.bb42df226d4d6f991398c239937edfb6?rik=L4%2fosSZE66aEVw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f1%2f15%2fFlower-IMG_0314.JPG&ehk=ZTUIYbxCfLePdqTNWgKS66R6NuAmJzUH9JSnY15yKqc%3d&risl=&pid=ImgRaw&r=0"

}