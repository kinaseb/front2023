// crud
// create , read , update , delete

var saveBtn = document.getElementById("save")
var task  = document.getElementById("task")
var result = document.getElementById("result")
var taskStore = []

saveBtn.onclick = function(){

    taskStore.push(task.value)
    task.value = ""
    read()
}

function read(){
    var text = ""
    for(var i=0;i<taskStore.length;i++){
        text   += `<li>${taskStore[i]}</li> <button onclick='destroy(${i})'>delete</button> <button onclick='edit(${i})'>edit</button>`
    }
    result.innerHTML = text
    // text = taskStore.map(function(task){return`<li>${task}</li>`})
    // result.innerHTML = text
}


function destroy(index){
    taskStore.splice(index,1)
    read()
}


function edit(index){
    console.log(index)
}

// var text = "mohamed"
// text += "eslam"
// text += "amr"
// console.log(text)