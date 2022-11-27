// var visit = 13
// alert("you visit" + (visit + 1)+ "times" )
// var inp= parseInt(prompt("Enter DOB"))
// document.write("birth year"+ inp)
// document.write("<br> type of birth year"( typeof(inp)))

// var table = prompt("Enter Table")
// document.write("<br>"+table+"*"+1+"="+table*1)
// document.write("<br>" +table+"*"+2+"="+table*2)
// document.write("<br>"+table+"*"+3+"="+table*3)
// document.write("<br>"+table+"*"+4+"="+table*4)
// document.write( "<br>"+table+"*"+5+"="+table*5)
// document.write("<br>"+table+"*"+6+"="+table*6)
// document.write("<br>"+table+"*"+7+"="+table*7)
// document.write("<br>"+table+"*"+8+"="+table*8)
// document.write("<br>"+table+"*"+9+"="+table*9)
// document.write("<br>"+table+"*"+10+"="+table*10)






// var tabel = prompt("Enter table")
// document.write(tabel +" * "+1+"="+tabel*1)
// document.write("<br>"+tabel +" * "+2+"="+tabel*2)



// var tabel1 = parseInt(prompt("Enter table"))
// if ( table1 =="" ||table1 == "null"){
    
//     document.write("<br>"  +tabel +" * "+1+"="+tabel*1)
//     document.write("<br>" +tabel +" * "+2+"="+tabel*2)
//     document.write("<br>" +tabel +" * "+3+"="+tabel*3)
//     document.write("<br>" +tabel +" * "+4+"="+tabel*4)
//     document.write("<br>" +tabel +" * "+5+"="+tabel*5)
//     document.write("<br>" +tabel +" * "+6+"="+tabel*6)
//     document.write("<br>" +tabel +" * "+7+"="+tabel*7)
//     document.write("<br>" +tabel +" * "+8+"="+tabel*8)
//     document.write("<br>" +tabel +" * "+9+"="+tabel*9)
//     document.write("<br>" +tabel +" * "+10+"="+tabel*10)
// }
// else {
//     document.write("<br>" +5 +" * "+1+"="+tabel*1)
//     document.write("<br>" +5 +" * "+2+"="+tabel*2)
//     document.write("<br>" +5 +" * "+3+"="+tabel*3)
//     document.write("<br>" +5 +" * "+4+"="+tabel*4)
//     document.write("<br>" +5 +" * "+5+"="+tabel*5)
//     document.write("<br>" +5 +" * "+6+"="+tabel*6)
//     document.write("<br>" +5 +" * "+7+"="+tabel*7)
//     document.write("<br>" +5 +" * "+8+"="+tabel*8)
//     document.write("<br>" +5 +" * "+9+"="+tabel*9)
//     document.write("<br>" +5 +" * "+10+"="+tabel*10)
// }




// var num = parseInt(prompt("Enter Table Number"))
// if ( num == "" || num == "null"){
//     document.write(num +" * "+1+"="+num*1 )
//     document.write("<br>" + num +" * "+1+"="+num*2)
//     document.write("<br>" +num +" * "+1+"="+num*3)
//     document.write("<br>" +num +" * "+1+"="+num*4)
//     document.write("<br>" +num +" * "+1+"="+num*5)
//     document.write("<br>" +num +" * "+1+"="+num*6)
//     document.write("<br>" +num +" * "+1+"="+num*7)
//     document.write("<br>" +num +" * "+1+"="+num*8)
//     document.write("<br>" +num +" * "+1+"="+num*9)
//     document.write("<br>" +num +" * "+1+"="+num*10)
// }
// else{
//     document.write(5 +" * "+1+"="+5*1 )
//     document.write("<br>" + 5 +" * "+1+"="+5*2)
//     document.write("<br>" + 5 +" * "+1+"="+5*3)
//     document.write("<br>" + 5 +" * "+1+"="+5*4)
//     document.write("<br>" + 5 +" * "+1+"="+5*5)
//     document.write("<br>" + 5 +" * "+1+"="+5*6)
//     document.write("<br>" + 5 +" * "+1+"="+5*7)
//     document.write("<br>" + 5 +" * "+1+"="+5*8)
//     document.write("<br>" + 5 +" * "+1+"="+5*9)
//     document.write("<br>" + 5 +" * "+1+"="+5*10)

// }

var eng = parseInt(prompt("Enter Eng marks"))
if(eng>=0 && eng<=100){
    var urdu =parseInt(prompt("Enter urdu marks"))
    if(urdu>=0 && urdu<=100){
       var math =parseInt( prompt("Enter urdu marks"))

       if(math>=0 && math<=100){
        console.log("all good")

        var res = eng+urdu+math
        var per = res/300*100

        console.log(res)

        document.write("<table  class='c1'>")
        document.write("<tr class='c2'><th class='c2'>Subject</th>")
        document.write("<th class='c2'>Total marks</th>")
        document.write("<th class='c2'>Obt marks</th>")
        document.write("<th>Percentage</th>")
        document.write("</tr>")

        document.write("<tr><th>Eng</th>")
        document.write("<th>100</th>")
        document.write("<th>"+eng+"</th>")
        document.write("<th>"+eng+"%</th>")
        document.write("</tr>")

        document.write("<tr><th>Urdu</th>")
        document.write("<th>100</th>")
        document.write("<th>"+urdu+"</th>")
        document.write("<th>"+urdu+"%</th>")
        document.write("</tr>")

        document.write("<tr><th>Math</th>")
        document.write("<th>100</th>")
        document.write("<th>"+math+"</th>")
        document.write("<th>"+math+"%</th>")
        document.write("</tr>")

        document.write("<tr><th></th>")
        document.write("<th>300</th>")
        document.write("<th>"+res+"</th>")
        document.write("<th>"+per+"%</th>")
        document.write("</tr>")



        document.write("</table>")







       }
       else{
        document.write("Enter math correct number")

       }

    }
    else{
        document.write("Enter urdu correct number")

    }
}
else{
    document.write("Enter eng correct number")
}