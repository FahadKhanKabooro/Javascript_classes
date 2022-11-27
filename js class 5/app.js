// var int = parseInt(prompt("Enter Your DOB"))
// document.write("My Birth year is"+ " "+ int);
// document.write("<br> my declared variable"+ (typeof(int)));





// var array = [45,56,30];
// // unshit add from start
// array.unshift("smit","hello","pls");
// console.log(array);


// shift remove from start
// array.shift();
// console.log(array);

// var arr = ["smit",12,34,56,78];
// data = arr.splice(2,2);
// console.log(data);


// splice removes like (starting index , removing index)
// var a = [1,2,3,4,5,6,7,8,9];
// a.splice(3,2);
// console.log(a);


// slice specipy value from (starting index , ending -1index )
// var a = ["smit",12,34,56,];
// data = a.slice(1,3);
// console.log(data);



// splice adding value from giving index
// var arr = [1,2,3,4,5,6,7,8];
// arr.splice(3,1,"smit",33,22,11);
// console.log(arr);

// var a = [1,2,3,45,35,56,78,45];
// a.push("smit");
// console.log(a);

// a.unshift("new course");
// console.log(a);

// data = a.shift();
// console.log(data);

// data = a.pop();
// console.log(data);
// console.log(a);

// var b = [1,2,3,45,35,56,78,45];
// remo = b.splice(5,1);
// console.log(remo);

// b.splice(3,2,"hello","username")
// console.log(b);

// b.sort();
// console.log(b);

//  chck1 = b.indexOf("hello");
//  console.log(chck1);

// var array1 = [2,3,45,56,45,45,67,45];
// var chck = array1.indexOf(45);
// console.log(chck);
// var chck2 = array1.indexOf(45,chck+1);
// console.log(chck2);
// var chck3 = array1.indexOf(45,chck2+1);
// console.log(chck3);

// var arr = [2,3,45,56,45,45,67,45];
// data = array.includes(45);
// console.log(data);

// var c1 = "Hello World!";
// var data1 = c1.split("");
// console.log(data1);

// var data2 = c1.join("")
// console.log(data2);



// var a = [2,3,45,56,45,45,67,45];
// console.log([a.length-1]);
// console.log(a.length);
// a.lenght=4

// for(var i = 0 ; i < 10 ; i++ ){
//     document.write("value:"+i+"<br>")
// }




// FOR LOOP 



// var num =prompt("enter your value");
// if(num !=0)
// {
//     for(let i = 0; i <=num; i++){
//         document.write("Value:"+i+"<br>")
//     }
// }
// else{
//     for(let i = 0; i <=10; i++){
//         document.write("value:"+i+"<br>")
//     }
// }


// use input and save data in an Array
var array = [];
for(var i =0; i< 10;i++){
    var data = prompt("enter data")
    // array.push(data)
    if(data == ""){
        break;
    }
    else{
        array.push(data)
    }
}
document.write(array)







