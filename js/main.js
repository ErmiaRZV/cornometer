let nextPage = document.querySelector('.npage>span')
let localTime = document.querySelector('.localTime')
let cornometer = document.querySelector('.cornometer')
let times = document.querySelector('.times')
let start = document.querySelector('#start')
let stopp = document.querySelector('#stop')
let save = document.querySelector('#save')
let saves = document.querySelector('.saves')
let reset = document.querySelector('#reset')
let corno = document.querySelector('.corno')

let mSecond = 0
let second = 0
let minute = 0
let hour = 0
let flag = false
let si
let span
nextPage.addEventListener('click',()=>{
    localTime.style.left='0px'
    cornometer.style.left='-100%'
    
})
corno.addEventListener('click',()=>{
    localTime.style.left='100%'
    cornometer.style.left='0px'
    
})



start.addEventListener('click',()=>{
    if (flag == false) {
        si = setInterval(() => {
            mSecond++
            times.children[3].children[1].innerHTML=mSecond
            if(mSecond > 99){
                mSecond=0
                second++
                times.children[2].children[1].innerHTML=second
                if (second>59) {
                    second=0
                    minute++
                    times.children[1].children[1].innerHTML=minute
                    if (minute>59) {
                        minute=0
                        hour++
                        times.children[0].children[1].innerHTML=hour
                    }
                }
            }
        }, 10);
        flag = true
    }
   

    
})

reset.addEventListener('click', ()=>{
    flag=false
    clearInterval(si)
    mSecond = 0
    second = 0
    minute = 0
    hour = 0
    times.children[0].children[1].innerHTML=hour
    times.children[1].children[1].innerHTML=hour
    times.children[2].children[1].innerHTML=hour
    times.children[3].children[1].innerHTML=hour
    saves.innerHTML=''
})

stopp.addEventListener('click',()=>{
    flag=false
    clearInterval(si)
})

save.addEventListener('click',()=>{
    span = document.createElement('span')
    span.innerHTML = times.children[0].children[1].innerHTML+ ":" +times.children[1].children[1].innerHTML + ":"+times.children[2].children[1].innerHTML + ":"+times.children[3].children[1].innerHTML
    console.log(span);
    
    saves.appendChild(span)
})




setInterval(() => {
    let date_ = new Date()
    localTime.children[0].innerHTML=date_.getHours()+" : "+date_.getMinutes()+" : "+date_.getSeconds()
}, 1000);


