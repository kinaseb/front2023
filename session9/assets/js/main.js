// var result = 10>2
// if(result){
//     console.log("success")
// }else {
//     console.log("error")  
// }


// var BD = prompt("BD ?")
// var curent_year = 2023
// var age = curent_year - BD
// if(age >= 20){
//     console.log("audlt")
// }else {
//     console.log("young")
// }


// var oil = prompt("oil ?")
// var l = prompt(" l ?")

// if(oil == 90){
//     console.log(l* 2)
// }else if (oil == 92) {
//     console.log(l* 4)
// }else if (oil == 95){
//     console.log(l* 5)
// }else {
//     console.log("oil not found")
// }



// //  90  => 2
// // 92  => 4 
// // 95 => 5



// var x = []
// console.log( "20" * 10 )

// var replace = prompt("enter replace color ?")
// var c = prompt("enter new  your color ? ")
// //              0     1      2          
// var colors = ['red','green','blue']
// var index =  colors.indexOf(replace)
// if(index == -1){
//     console.log(replace+" not found")
// }else {
//     colors[index] = c
//     console.log(colors)
// }



//  loops
//     while loop 

// var i = 0
// while(10>i){
//     i = i + 1
//     console.log("loop")
// }


// var i = 1
// while(10>=i){
//     if(i == 5){
//         console.log("mohamed amr")
//     }else{
//         console.log(i)
//     }
//     i = i + 1
// }

// var colors = ["red","green"]
// //                  0       1       2       3 
// var usernames = ["mohamed","eslam","ahmed","radwa"]
// var i = 1
// while(4>i){
//     console.log(i)
//     i = i +1
// }



var n = 3
// var n = 5
// var n = 15

// var i =1
// var res = []
// while(n>=i){
//     if(i%3 == 0 && i%5 == 0){
//         res.push("fizzbuzz")
//     }else if (i%5 == 0){
//         res.push("buzz")
//     }else if (i%3 == 0){
//         res.push("fizz")
//     }else {
//         res.push(`${i}`)
//     }
//     i = i+1
// }


// console.log(res)




// var address = "1.1.1.1"
address = "255.100.50.0"
// var i=0
// var res = ""
// while(address.length>i){
//     if(address[i] == "."){
//         res += "[.]"
//     }else {
//         res += address[i]
//     }
//     i = i+1
// }





// var res = "mohamed"
// res += "ahmed"
// res += "amr"
// console.log(res)

// console.log(res)



// nums = [2,2,1]
// nums = [4,1,2,1,2,1]
// [1,1,2,2,4]
// nums = [1]

// nums.sort()
// var i =0
// while(nums.length>i){
//     if(nums[i] == nums[i+1]){
//         i = i + 1
//     }else {
//         console.log(nums[i])
//     }
//     i++
// }

// increment opreators ++
// for(var i=0;i>10;i++){
//     console.log(i)
// }



// var i =0
// do {
//     console.log(i)
//     i++
// }while(10<i)




// var user = ["mohamed",22,"e@e.com",true]


var user = {firstname:"mohamed",age:29,email:"e@e.com"}
console.log(user.firstname)