let score = document.getElementById("score");


let Number = 0
let add = document.getElementById("Add-btn").addEventListener("click" , function() {
     score.textContent = Number++
})

let reset = document.getElementById("Reset-btn").addEventListener("click" , function(){
    location.reload()
})
let down = document.getElementById("Subtract-btn").addEventListener("click" , function(){
    score.textContent = Number--
})