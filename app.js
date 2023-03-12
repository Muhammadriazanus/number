var userinput = document.querySelector('.userinput')
// console.log(userinput)
var checkbutton = document.querySelector('.checkbutton')
var score = document.querySelector('.score')
var highScore = document.querySelector('.highScore')

checkbutton.addEventListener('click', ()=>{
    if(score.textContent > 0){


        var myNumber = Math.round(Math.random() *20)
        console.log(myNumber)
        console.log(userinput.value)
        console.log(score.textContent)
    }
    if(userinput.value == myNumber){
        alert("you win")
        score.textContent = +score.textContent + 1
        if(highScore.textContent < score.textContent){
            highScore.textContent = score.textContent
        }
    }else{
        console.log("you loose")
        score.textContent = + score.textContent -1
    }
})
