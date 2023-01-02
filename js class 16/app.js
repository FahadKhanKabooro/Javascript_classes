console.log(firebase.database())
var email = document.getElementById("email")
var password = document.getElementById("password")
var signup = document.getElementById("signup")
var signin = document.getElementById("signin")

signup.addEventListener("click",function(){
    console.log(email.value)
    console.log(password.value)
    firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then((user)=>{
        console.log(user.user)
        var obj = {
            name: "Haseeb khan",
            email: email.value,
            password: password.value,
            role: "user",
            country : "Pakistan",
            uid: user.user.uid,
        }
        // firebase.database().ref("users/").push(obj)
        firebase.database().ref("users/").child(user.user.uid).push(obj)
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
        console.log(user.user.uid)
        console.log(user.user.displayName)
        console.log(user.user.password)
    })
    .catch((e)=>{
        console.log(e.code)
        console.log(e.message)
    })
})