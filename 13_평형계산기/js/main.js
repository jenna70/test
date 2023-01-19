let inputData1 = document.getElementById('data1')
let inputData2 = document.getElementById('data2')
let outputData1 = document.getElementById('output1')
let outputData2 = document.getElementById('output2')
let btnnum1 = document.getElementById('btn1')
let btnnum2 = document.getElementById('btn2')

function toP(){
    let mToP = Number(inputData1.value) * 0.3025
    outputData1.value = mToP
}
let btnMToP = document.getElementById('btn1')
btnMToP.addEventListener('click',function(){
    toP()
})


function toM(){
    let pToM = Number(inputData2.value) * 3.3058
    outputData2.value = pToM
}
let btnPToM = document.getElementById('btn2')
btnPToM.addEventListener('click',function(){
    toM()
})

inputData1.addEventListener('focus',function(){
    this.value = ''
})
inputData2.addEventListener('focus',function(){
    this.value = ''
})
outputData1.addEventListener('focus',function(){
    this.value = ''
})
outputData2.addEventListener('focus',function(){
    this.value = ''
})