// var email1 = document.getElementById("email1")
// var userName = document.getElementById("name1")

// var data = localStorage.getItem("uid")
// console.log(data)
// firebase.database().ref("users/").child(data).once("value",(snapshot)=>{
//     console.log(snapshot.toJSON())
//     var data = snapshot.toJSON()
//     var email1 = data["email1"]
//     console.log(email1)
//     email.innerText += `: ${email1}`

//     var name1 = data("name")
//     console.log(name1)
//     userName.innerHTML += `: ${name1}`
// })


// get all ref data
// var email = document.getElementById("email1")
// var username = document.getElementById("name1")
// var table = document.getElementsByTagName("table")
// var btn = document.getElementsByTagName("button")


// var data = localStorage.getItem("uid")
// console.log(data)//current user uid 
// // firebase.database().ref("users/").child(data).once("value",(snapshot)=>{
//     firebase.database().ref(`users/${data}`).once("value",(snapshot)=>{    
// console.log(snapshot.toJSON())
    
//     var data = snapshot.toJSON()

//     var email1 = data["email"]
//     console.log(email1)
//     email.innerText += `: ${email1}` 

//     var name1 = data["name"]
//     console.log(name1)

//     username.innerText += ` : ${name1}`
// })
// console.log(table[0])
// firebase.database().ref("users/").once("value",(snapshot)=>{
//     console.log(snapshot.toJSON())

//     var data =snapshot.toJSON()
//     // var key = Object.keys(data)
//     // console.log(key)
//     var value = Object.values(data)
//     console.log(value)

//     value.map((v,i)=>{
//         console.log(v)
//         console.log(i)
//         table[0].innerHTML += `
//     <tr>
//     <td>${i+1}</td>
//             <td>${v.name} </td>
//             <td>${v.email}</td>
//             <td>${v.password}</td>
//             <td>${v.role}</td>
//             <td>view</td>
//             <td><button id='${v.Current_key}' onclick""></button></td>
            
//         </tr>
//         `
//     })
    
// })
// btn[0].addEventListener("click",function(){
//     window.location.href="add_con.html"
// })

// get all ref data
var email = document.getElementById("email")
var username = document.getElementById("name")

var table = document.getElementsByTagName("table")

var btn = document.getElementsByTagName("button")
var container = document.getElementsByClassName("row")


var data = localStorage.getItem("uid")//get current user 
console.log(data)//current user uid 
// firebase.database().ref("users/").child(data).once("value",(snapshot)=>{

// get current user data 

    firebase.database().ref(`users/${data}`).once("value",(data1)=>{    
console.log(data1.toJSON())
    
    var data = data1.toJSON()

    var email1 = data["email"]
    console.log(email1)
    email.innerText += `: ${email1}` 

    var name1 = data["name"]
    console.log(name1)

    username.innerText += ` : ${name1}`
})

console.log(table[0])

// firebase.database().ref("users/").once("value",(snapshot)=>{
//     console.log(snapshot.toJSON())
//     var data = snapshot.toJSON()
//     var value = Object.values(data)//object to array 
//     value.map((v,i)=>{
//         console.log(v)
//         console.log(i)
//     // table[0].innerHTML += `
//     // <tr>
//     // <td>${i+1}</td>
//     //         <td>${v.name}</td>
//     //         <td>${v.email}</td>
//     //         <td>${v.password}</td>
//     //         <td>${v.role}</td>
//     //         <td>View</td>
//     //     </tr>
//     // `

//         //show html table

//     })

// })


var data = localStorage.getItem("uid")//get current user 
console.log(data)//current user uid 

firebase.database().ref(`users/${data}/contact`).once("value",(snapshot)=>{
    console.log(snapshot.toJSON())
    var data = snapshot.toJSON()
    console.log(data)
    if(data !=null){
    var value = Object.values(data)//object to array =>key,values 
    // map aaray method =>
    value.map((v,i)=>{
        console.log(v)
        console.log(i)
    table[0].innerHTML += `
    <tr >
    <td>${i+1}</td>
            <td>${v.name}</td>
            <td>${v.address}</td>
            <td>${v.contact}</td>
         
            <td>View</td>
            <td ><button id='${v.contact_key}' onclick='edit(this)'>edit</button>
          <button id='${v.contact_key}' onclick='del(this)'>delete</button></td>
        </tr>
    `

        //show html table

    })

}
else{
    table[0].innerHTML="<h1>No data </h1>"
}

})

function edit(data){
    console.log(data.id)
    localStorage.setItem("Current_Key",data.id)
    window.location.href="edit_contact.html"

}

function del(e){
    
var uid = localStorage.getItem("uid")//get current user 
console.log(uid)//current user uid 
    firebase.database().ref("users/").child(uid+"/").child("contact/").child(e.id).remove()

    window.location.reload();


}


btn[0].addEventListener("click",function(){
    window.location.href="add_contacts.html"
})
firebase.database().ref("Dishes").once("value", (snapshot) => {
    // console.log(snapshot.toJSON())
    var data = Object.values(snapshot.toJSON())//object to array 
    // console.log(data)

    data.map((v, i) => {
        // console.log(v)
        container[0].innerHTML += `
    <div class="col col-lg-3 col-md-4 col-sm-6 col-12 mt-2 mx-4" style="height:400px">
    <div class="card" >
        <img src=${v.imgUrl} class="card-img-top" alt="..." style="width:100%;height:200px">
        <div class="card-body">
       
          <h5 class="card-title">${v.Dish_Name==""  ?"No title" :v.Dish_Name  }
          
          </h5>
          <p class="card-text">${v.Price==""  ?"100" :v.Price  }</p>
          <a href="#" class="btn btn-primary">Order</a>
        </div>
      </div>
</div>
    `

    })

})