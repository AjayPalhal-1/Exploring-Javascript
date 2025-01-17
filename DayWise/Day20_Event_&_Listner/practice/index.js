function textchange() {
  let para = document.getElementById("mypara");
  para.textContent = "Text Changed Succesfully";
}

let para = document.getElementById("mypara");
para.addEventListener("click", textchange);
