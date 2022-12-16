let input = document.querySelector('input');
let button = document.querySelector('.eye');
let myRemove = document.getElementById('myRemove');
button.addEventListener('click',()=>{
    if(input.type=='password'){
        input.type='text';
        myRemove.style.display='block';
    }else{
        input.type='password'
        myRemove.style.display='none';
    }
})