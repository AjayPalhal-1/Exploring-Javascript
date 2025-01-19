


const t1 = performance.now()

function alertpara(event) {
  if (event.target.nodeName === 'SPAN') {
    alert("You Have Clicked On : " + event.target.textContent);
  }
}

let div = document.getElementById("mydiv");

// document.addEventListener('click',alertpara)
div.addEventListener("click", alertpara);


const t2 = performance.now()
console.log("Total Time Taken By Code : ", t2-t1)