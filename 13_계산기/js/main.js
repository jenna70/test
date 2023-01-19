let inputData1 = document.getElementById('data1')
console.log(inputData1)
let inputData2 = document.getElementById('data2')
console.log(inputData2)
let outputData = document.getElementById('output')
console.log(outputData)
let btnPlus = document.getElementById('btn1')
console.log(btnPlus)



function add(){
    let addHap = Number(inputData1.value) + Number(inputData2.value)
    outputData.value = addHap
}
btnPlus.addEventListener('click',function(){
    add()
})


function sub(){
    let minus =  Number(inputData1.value) - Number(inputData2.value)
    outputData.value = minus
}
let btnMinus = document.getElementById('btn2')
btnMinus.addEventListener('click',function(){
    sub()
})

function mtpl(){
    let multiply =  Number(inputData1.value) * Number(inputData2.value)
    outputData.value = multiply
}
let btnMultiply = document.getElementById('btn3')
btnMultiply.addEventListener('click',function(){
    mtpl()
})

function dvd(){
    let devide =  Number(inputData1.value) / Number(inputData2.value)
    outputData.value = devide
}
let btnDevide = document.getElementById('btn4')
btnDevide.addEventListener('click',function(){
    dvd()
})

function left(){
    let left =  Number(inputData1.value) % Number(inputData2.value)
    outputData.value = left
}
let btnLeft = document.getElementById('btn5')
btnLeft.addEventListener('click',function(){
    left()
})

function clear(){
    // ~~.value = '' => ~~의 value값을 텅 비어있게 만드는 것
    inputData1.value = ''
    inputData2.value = ''
    outputData.value = ''
}
let btnClear = document.getElementById('btn6')
btnClear.addEventListener('click',function(){
    clear()
})





// addEventListener('이벤트종류',콜백함수)
// 폼 안에 클릭했을때가 focus 이벤트
inputData1.addEventListener('focus',function(){
    this.value = ''
})
inputData2.addEventListener('focus',function(){
    this.value = ''
})

// outputData.addEventListener('focus',function(){
//     this.value=''
// })