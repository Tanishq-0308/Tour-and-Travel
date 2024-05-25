const bar=document.getElementById('bar');
const navbar=document.getElementById('navbar');

bar.addEventListener("click",()=>{
    if((navbar.style.right)=='10px')
    navbar.style.right='-300px';
    else
    navbar.style.right='10px';
})
const slide= document.querySelectorAll('.slide');
const button1=document.querySelector('.button1');
let counter=0;
// button1.disabled=true;

slide.forEach(
    (slide,index)=>{
        slide.style.left=`${index * 100}%`;
    },
    setInterval(() => {
        next()
    }, 3000)
)

function previous(){
    if(counter!=0){
        // button1.disabled=true;
        counter--;   
    slideImage()
    }
    console.log(counter);
    
}
function next(){
    if(counter<slide.length-1){
        counter++;
    slideImage()
    }
    else if(counter==slide.length-1){
        counter=-1;
    }
}
const slideImage=()=>{
    slide.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter * 100}%)`
        }   
    )
}