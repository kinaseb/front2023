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

var text = document.getElementById("text")
var res = document.getElementById("res")
text.onkeyup = function(){
    if(text.value.length >= 20){
        text.style.cssText = "border:1px solid red;outline:1px solid red"
    }else {
        text.style.cssText = "border:1px solid black;outline:1px solid black"
    }
    res.innerText = "count is :"+text.value.length
}