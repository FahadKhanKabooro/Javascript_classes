// var std = {
//     name : "asad",
//     age : 20,
//     salary : 20000,
// }
// console.log(std.name) //object property name 
// console.log(std["age"]) // object property age 

// std.course = "it" // key add with value 
// console.log(std)

// std.age = 34 // update key
// console.log(std.age)

// // get all keys
// var key = Object.keys(std) // call object
// console.log(key)

// // get all value
// var value = Object.values(std) // call object
// console.log(value)

// var alldata = Object.entries(std)
// console.log(alldata[2][1])

var std_data = [
    {
        name : "asad",
    age : 20,
    salary : 20000, 
    },
    {
        name : "ali",
    age : 25,
    salary : 25000, 
    },
    {
        name : "akbar",
    age : 30,
    salary : 30000, 
    }
]
// console.log(std_data[0]["age"])
var table = document.createElement("table")
var dic = document.createElement("div")
var leftrow = document.createElement("tr")

var key = Object.keys(std_data[i])
for(var i=0;i<std_data.length;i++){
    var mainrow = document.createElement("tr") //main heading

    var key = Object.keys(std_data[i])
    for(var j in  key){
        if(i==0){
            var th = document.createElement("th")
            var textnode = document.createTextNode(key[j])
            th.appendChild(textnode)
            mainrow.append(th)

        }
        console.log(`key: ${key[j]} value : ${std_data[i][key[j]]}`)
        
    }
}

