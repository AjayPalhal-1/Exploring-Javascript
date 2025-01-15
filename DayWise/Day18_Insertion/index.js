let mydiv = document.querySelector("#mydiv");
let newElement = document.createElement("span");
newElement.textContent = "Ajay Palhal";

// mydiv.insertAdjacentElement("beforebegin", newElement);
// mydiv.insertAdjacentElement("afterbegin", newElement);
mydiv.insertAdjacentElement( "afterend", newElement);
