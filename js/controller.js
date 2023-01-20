
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
    this.success()
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

    if (btn != this.btnExp)
      this.btnExp.classList.remove("btnActive")

    else
      this.btnForm.classList.remove("btnActive")

    this.timeline.forEach(container => {

      if (container.classList.contains(type)) {
        container.classList.add("show");
        container.classList.remove("hidden");
        btn.classList.add("btnActive");
      } else {
        container.classList.remove("show");
        container.classList.add("hidden");
        btn.classList.remove("btnActive");
      }
    })
  }


  submit(){

  }

  success(){
    Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
  }
}
