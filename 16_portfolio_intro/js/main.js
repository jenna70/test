let today = new Date()
let todayDate = () => {    

    let year = today.getFullYear()
    console.log(year)

    let month = today.getMonth() + 1
    console.log(month)

    let date = today.getDate()
    console.log(date)

    let arr = ['일','월','화','수','목','금','토' ]

    let day = (arr[today.getDay()])
    console.log(day)

document.getElementById('jy_year').innerHTML= (`${year}년`)
document.getElementById('jy_month').innerHTML= (`${month}월`)
document.getElementById('jy_date').innerHTML= (`${date}일`)
document.getElementById('jy_day').innerHTML= (`${day}요일`)
}



let time = () => {
    let time = new Date()

    let hour = time.getHours()
    console.log(hour)
    let min = time.getMinutes()
    console.log(min)
    let sec = time.getSeconds()
    console.log(sec)
    let msec = time.getMilliseconds()
    msec = Math.floor(msec/10)
    console.log(msec)

    // 자릿수 맞추는 함수
    let digit = (n) => {
        if(n < 10){
            return '0' + n
        }else{
            return n
        }
    }

document.getElementById('whour').innerHTML= digit(hour)
document.getElementById('wmin').innerHTML= digit(min)
document.getElementById('wsec').innerHTML= digit(sec)
document.getElementById('wms').innerHTML= digit(msec)
}

// 형식: setInterval(콜백함수(){},시간)
let tm = setInterval(()=>{
    time()
},10)

todayDate()

// let tD = setInterval(()=>{
//     todayDate()
// },100)
