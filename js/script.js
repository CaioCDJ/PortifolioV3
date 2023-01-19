
const btn = document.querySelector("#btnNavbar");
const ul = document.querySelector("#navbar");

const timeline = document.querySelectorAll(".container");
let btnForm = document.querySelector("#btnFormation");
let btnExp = document.querySelector("#btnExp");


function load(){ 
  hideShow("formation", btnForm);
}

// mobile navbar 

let isOpen = false;

btn.addEventListener("click",()=>{
  
  isOpen = !isOpen;
 
  if(isOpen) {
    ul.style.display = "flex"; 
    ul.classList.add("openMenu");
  }else {
    ul.classList.remove("openMenu");
    ul.style.display = "none"; 
  }
});


// timeline

btnForm.addEventListener("click",()=>hideShow("formation",btnForm));

btnExp.addEventListener("click",()=>hideShow("job",btnExp));


function hideShow(type="job", btn){
  
  timeline.forEach(container=>{

    if(btn != btnExp) btnExp.classList.remove("btnActive")
    
    else btnForm.classList.remove("btnActive")

    if(container.classList.contains(type)){
      container.classList.add("show");
      container.classList.remove("hidden");
      btn.classList.add("btnActive");
    } else{
      container.classList.remove("show");
      container.classList.add("hidden");
      btn.classList.remove("btnActive");
    }
  })
}
// email Sender

