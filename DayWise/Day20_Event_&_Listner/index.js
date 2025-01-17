function changetext() {
  let fpara = document.getElementById("fpara");
  fpara.textContent = "Hello Ajay ";
}

let fpara = document.getElementById("fpara");
fpara.addEventListener("click", changetext);

// fpara.removeEventListener('click' ,changetext);why it trated as references
