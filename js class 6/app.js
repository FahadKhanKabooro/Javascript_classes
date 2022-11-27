// for(var i = 0 ; i<=5; i++){
//     for(var j =0; j<= i ; j++){
//         document.write("<br>"+ i);
//     }
// }

// for(var i =0 ; i<= 5; i++){
//     for(var j =0 ; j<=i ; j++){
//         document.write(i);
//     }
// }

// var array = [
//     [1,2,3,4,5],
//     [2,3,4],
//     [2,3,4,5]
// ]
// for(var i =0; i <array.length;i++){
//     // document.write(array[i]+"<br>")
//     for( var j = 0; j <array[i].length; j++){
//         // document.write(array[i][j]+"<br>"); 
//         {
//         if(array[i][j]==4){
//             array[i].splice(j,1)
//             j = j-1
            
//         }
        
//         }
//         document.write(array[i]+"<br>");
//     }
    
// }

// arr = [
//     ["asad","ali","amir"],
//     ["babar","ali","bakthali","bablo","ali","burhan"],
//     ["fahad","furqan","ali","faheem"],
// ]
// var deletval = prompt("Enter value");

// for(var i = 0; i<arr.length; i++){
//     // document.write(arr[i]+"<br>")
//     for(var j = 0; j<arr[i].length; j++){
//         if(deletval.toLocaleLowerCase()==arr[i][j].toLocaleLowerCase()){
//             arr[i].splice(j,1)
//             j=j-1
//         }

            
//     }
//     document.write(arr[i]+"<br>")
//     {
        
//     }
// }

var arr = []
 var row = parseInt(prompt("ENter ROws"))
 for( var i =0; i < row; i++){
    arr.push([])
 }
 for(var i = 0; i < row ; i++){
    var col = parseInt(prompt("Enter Col"))
    for(var j = 0; j < col; j++){
        var inp = prompt("Enter Data")
        arr.push(inp)
    }
 }
 console.log(arr)
