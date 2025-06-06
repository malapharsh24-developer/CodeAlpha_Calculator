const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btns');
const ans = document.querySelector('#equal-btn');
const reset = document.querySelector('#reset-btn');

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log(e.target.value);
        display.value += e.target.value;
    });
});

reset.addEventListener('click',(e)=>{
    display.value = 0;
})

ans.addEventListener('click',(e)=>{
    display.value = eval(display.value);
})