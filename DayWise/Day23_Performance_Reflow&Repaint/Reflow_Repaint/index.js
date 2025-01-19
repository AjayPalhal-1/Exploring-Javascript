console.log("Measuring Reflow and Repaint Timings");

// Measuring time for reflow
const t1 = performance.now();
function triggerReflow() {
  const box = document.getElementById("box");
  box.style.width = "200px"; // Changing width causes reflow
  const t2 = performance.now();
  console.log("Reflow Time: ", t2 - t1, "ms");
}

// Measuring time for repaint
function triggerRepaint() {
  const t4 = performance.now();
  const box2 = document.getElementById("box2");
  box2.style.backgroundColor = "lightgreen"; // Changing color causes repaint
  const t5 = performance.now();
  console.log("Repaint Time: ", t5 - t4, "ms");
}
