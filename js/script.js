
const btn = document.querySelector("#btnNavbar");
const ul = document.querySelector("#navbar");

let isOpen = false;

// mobile navbar 

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
