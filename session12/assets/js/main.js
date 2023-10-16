// document.getElementById("mohamed").innerText = "test ahmed"
// dom 
// getElementById -> single element by id
// getElementsByClassName ->multi elements by class name
    //- get (by id , class , tag)
    // - set ( text , html )
    // event

    // var elemnts = document.getElementsByClassName("bg-red") 
    // elemnts[0].innerText = "awdwadaddwad"
    // elemnts[1].innerText = "hamada"
    // console.log()


    // var btn = document.getElementById("btn")
    // var password = document.getElementById("password")
  
    // btn.onclick =   function (){
    //     if(password.type == "password"){
    //         btn.innerText = "hide"
    //         password.type = "text"
    //     }else {
    //         btn.innerText = "show"
    //         password.type = "password"
    //     }
    // }



//   var tags =   document.getElementsByTagName("div")

//   tags[0].innerText = "<h1>hi</h1>"

// var text = "mohamed amr"

// console.log(text.length)

// var text = document.getElementById("text")
// var res = document.getElementById("res")
// text.onkeyup = function(){
//     if(text.value.length >= 20){
//         text.style.cssText = "border:1px solid red;outline:1px solid red"
//     }else {
//         text.style.cssText = "border:1px solid black;outline:1px solid black"
//     }
//     res.innerText = "count is :"+text.value.length
// }



// document.querySelector("#login").onclick = function(){
//     var username = document.querySelector("#username").value
//     var password = document.querySelector("#password").value
//      if(username == "mohamed" && password == 123){
//         alert("success")
//      }else {
//         alert("error")
//      }   
// }



// document.getElementById("red").onclick = function(){
//     document.body.style.background = "red"
// }

// document.getElementById("blue").onclick = function(){
//     document.body.style.background = "blue"
// }

// document.getElementById("green").onclick = function(){
//     document.body.style.background = "green"
// }

// function changecolor(color){
//     document.body.style.background = color
// }


// document.getElementById("color").onclick = function(e){
//     document.body.style.background = e.target.id
// }


// document.querySelector(".imgs").onclick = function(e){
//     if(e.target.src != undefined){
//         document.querySelector(".container img").src =e.target.src 
//     }
// }
var imgs = [
    "assets/img/g3.webp",
    "assets/img/g2.webp",
    "assets/img/g1.webp"
]
var i = 0;
document.getElementById("next").onclick = function(){
    if(i == 3){
        i = 0
    }
    document.querySelector(".container img").src = imgs[i]
    i++
}

document.getElementById("prev").onclick = function(){
    i--;
    if(i  < 0){
        i = imgs.length - 1
    }
    document.querySelector(".container img").src = imgs[i]
}