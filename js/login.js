const username=document.getElementById('username');
const password= document.getElementById('password');
const show=document.getElementById('visible');
const login=document.getElementById('login');
const linker=document.getElementById('linker');
const bar=document.getElementById('bar');
const navbar=document.getElementById('navbar');

bar.addEventListener("click",()=>{
    if((navbar.style.right)=='10px')
    navbar.style.right='-300px';
    else
    navbar.style.right='10px';
})

show.addEventListener('click',()=>{
    if(show.checked){
        password.type="text";
    }
    else{
        password.type="password";
    }
})

login.addEventListener('click',(e)=>{
    validateMail(username,password);
    storeData(username,password);
})

function validateMail(username,password){
    const val=password.value;
    const user=username.value;
    if(user==="" && val===""){
        alert("Enter the details");
    }
    else if(val.length<=7){
        alert("length should be 8");
    }
    if(user=="Admin"){
        if(val=="password"){
            linker.setAttribute("href","index.html");
        }
    }
   

}

function storeData(username,password){
    localStorage.setItem("user",username.value);
    localStorage.setItem("pass",password.value);
}