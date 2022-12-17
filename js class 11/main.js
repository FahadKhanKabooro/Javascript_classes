/*
(  TODAYS TOPICS  ) 
input , radio , checkbox, slect
.value => property => data
byid => unique
class
tagname
event.prventDefault
onchange event


*/


var email = document.getElementById("email")
var password = document.getElementById("password")
var emailtxt = document.getElementById("emailtxt")
var passwordtxt = document.getElementById("passwordtxt")
var submittxt = document.getElementById("submittxt")
var selectcountry = documen.getElementById()
function getdata(){
    event.preventDefault()//form
    if(email.value==""){
        emailtxt.className="show red"
    }
  else  if(password.value==""){
        emailtxt.className="hide red"
        passwordtxt.className="show red"
    }
    else{
        emailtxt.className="hide red"
        passwordtxt.className="hide red"
        submittxt.className="show"
        console.log(email.value)
        console.log(emailtxt.className)

        setTimeout(()=>{
            email.value=""
            password.value=""
            submittxt.value="hide"
        },2000)
    }
}
function setemail(){
    if(email.value!=""){
        emailtxt.className="hide"
        if(password.value!=""){
            passwordtxt.className="hide"
        }
        else{
            passwordtxt.className="show"
        }

    }
}


function setcountry(){
    console.log(selectcountry.value)
}
