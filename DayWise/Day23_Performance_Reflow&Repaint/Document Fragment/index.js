
  
  // function 1 with fragment 


  function withFragment() {
    const list = document.getElementById("myList");
    // list.innerHTML = ""; // Clear the lst

    const start = performance.now();

    const fragment = document.createDocumentFragment();
    for (let i = 1; i <= 5000; i++) {
      const li = document.createElement("li");
      li.textContent = "Item " + i; // Assign text content using string concatenation
      fragment.appendChild(li);
    }
    list.appendChild(fragment); // Update the DOM once

    const end = performance.now();
    console.log("With Fragment: " + (end - start) + " ms");
  }

// function 2 without fragment 


  function withoutFragment() {
    const list = document.getElementById("myList1");
    list.innerHTML = ""; // Clear the list

    const start = performance.now();

    for (let i = 1; i <= 5000; i++) {
      const li = document.createElement("li");
      li.textContent = `Item ${i}`;
      list.appendChild(li); // Update the DOM in every iteration
    }

    const end = performance.now();
    console.log("Without Fragment: " + (end - start) + " ms");
  }

