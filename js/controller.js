
class Controller {

  constructor() {

    this.navBtn = document.querySelector("#btnNavbar");
    this.ul = document.querySelector("#navbar");

    this.timeline = document.querySelectorAll(".container");
    this.btnForm = document.querySelector("#btnFormation");
    this.btnExp = document.querySelector("#btnExp");

    this.isOpen = false;

    this.navBtn.addEventListener("click", () => { this.hideNavbar() });

    this.btnForm.addEventListener("click", () => { this.hide("formation", this.btnForm) });
    this.btnExp.addEventListener("click", () => { this.hide("job", this.btnExp) });

    this.hide("formation", this.btnForm);
    
    this.intersectionAnimations();
  }

  intersectionAnimations(){
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting ){
        
          entry.target.classList.replace('hiddenEl', 'showEl')
         }
          
      })
      } 
    ) 
    const hiddenElements = document.querySelectorAll('.hiddenEl');

    hiddenElements.forEach((el)=>observer.observe(el))
  }


  hideNavbar() {

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.ul.style.display = "flex";
      this.ul.classList.add("openMenu");
    } else {
      this.ul.classList.remove("openMenu");
      this.ul.style.display = "none";
    }
  }

  hide(type = "job", btn) {

    if (btn != this.btnExp) {
      this.btnExp.classList.remove("btnActive")
      this.btnForm.classList.add("btnActive")
    }
    else {
      this.btnForm.classList.remove("btnActive")
      this.btnExp.classList.add("btnActive")
    }
    this.timeline.forEach(container => {

      if (container.classList.contains(type)) {
        container.classList.add("show");
        container.classList.remove("hidden");
      } else {
        container.classList.remove("show");
        container.classList.add("hidden");
      }
    })
  }
}

