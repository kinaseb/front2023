// crud
// create , read , update , delete

var saveBtn = document.getElementById("save")
var updateBtn = document.getElementById("update")

var task  = document.getElementById("task")
var result = document.getElementById("result")
var taskStore = []

saveBtn.onclick = function(){

    taskStore.push({task:task.value,status:0})
    console.log(taskStore)
    task.value = ""
    read()
}

function read(){
    var text = ""
    for(var i=0;i<taskStore.length;i++){
        if(taskStore[i].status == 0){
            text   += `<li>${taskStore[i].task}</li> <button onclick='destroy(${i})'>delete</button> <button onclick='edit(${i})'>edit</button> <button onclick='done(${i})'>done</button>`
        }else {
            text   += `<li style='text-decoration: line-through'>${taskStore[i].task}</li> <button onclick='destroy(${i})'>delete</button> <button onclick='edit(${i})'>edit</button> <button onclick='done(${i})'>done</button>`
        }
    }
    result.innerHTML = text
    // text = taskStore.map(function(task){return`<li>${task}</li>`})
    // result.innerHTML = text
}


function destroy(index){
    taskStore.splice(index,1)
    read()
}

var i;

function edit(index){
    i = index
    task.value = taskStore[index].task
    // console.log()
    saveBtn.style.display = "none"
    updateBtn.style.display = "block"
}

function done(index){
    taskStore[index].status = 1
    console.log(taskStore)
    read()
}

updateBtn.onclick = function(){
    taskStore[i].task = task.value
    read()
}


// var text = "mohamed"
// text += "eslam"
// text += "amr"
// console.log(text)