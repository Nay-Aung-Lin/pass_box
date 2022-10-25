'use strict';

const input = document.querySelector('#password');
const toggle = document.querySelector('.fa-eye');

toggle.addEventListener('click',function(){
    if(input.type === "password"){
        input.type = "text";
        toggle.className = "fa-solid fa-eye-slash";
    }else{
        input.type = "password";
        toggle.className = "fa-solid fa-eye";

    }
});

console.log(toggle)