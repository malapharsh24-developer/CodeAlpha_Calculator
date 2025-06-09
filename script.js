const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btns');
const ans = document.querySelector('#equal-btn');
const reset = document.querySelector('#reset-btn');

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log(e.target.value);
        if(display.value == 0){
            display.value = "";
        }
<<<<<<< HEAD
        display.value +=  e.target.value;
=======
        display.value += e.target.value;
>>>>>>> 4136bf0cf5e63ef6f3b541f14d6d1bef4c4f2a8b
    });
});

reset.addEventListener('click',(e)=>{
    display.value = 0;
})

ans.addEventListener('click',(e)=>{
    display.value = eval(display.value);
})
