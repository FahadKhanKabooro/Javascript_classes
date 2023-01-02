console.log(firebase.database)
var email = document.getElementById("email")
var password = document.getElementById("password")
var signup = document.getElementById("signup")
var signin = document.getElementById("signin")
var signout = document.getElementById("signout")

signup.addEventListener("click",function(){
    console.log(email.value)
    console.log(password.value)
    firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then((user)=>{
        console.log(user)
        // console.log(user.user.uid)
        localStorage.setItem("email",email.value)
        // this.localName.setItem("uid",user.user.uid)
        signup.setAttribute("style","display:none")
    // signin.setAttribute("style","display:none")
        var obj = {
            name : "khan saab",
            email : email.value,
            password : password.value,
            role : "user",
            
        }
         firebase.database().ref("users/").push(obj)
        //  firebase.database().ref("users/").child(user.user.uid).push(obj)

    })
    .catch((e)=>{
        console.log(e.code)
        console.log(e.message)
    })
})



signin.addEventListener("click",function(){
    console.log(email.value)
    console.log(password.value)
    firebase.auth().signInWithEmailAndPassword(email.value,password.value)
    .then((user)=>{
        console.log(user)
        console.log(user.user.uid)
        // localStorage.setItem("email",email.value)
        // this.localName.setItem("uid",user.user.uid)
        signup.setAttribute("style","display:none")
    signin.setAttribute("style","display:none")
    signout.removeAttribute("style")

    })
    .catch((e)=>{
        console.log(e.code)
        console.log(e.message)
    })
})
var getuid = localStorage.getItem("uid")
// console.log(getuid)
if(getuid!=null){
    signup.setAttribute("style","display:none")
    signin.setAttribute("style","display:none")
    
}
signout.addEventListener("click",function(){
    firebase.auth().signOut()
})