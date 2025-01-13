try {
  console.log("We Are In Try Block");
  console.log(12);
  console.log("Line After printitnf line  of x");
} catch (e) {
  console.log("We Are In Catch Block");
  console.log("Our Error : ", e);
} finally {
  console.log("We Are In Finally Block And Its Excute EveryTime !!! ");
}

// Custome Error Using throws

try {
  console.log(x);
} catch (e) {
  throw new Error("\n\n\nPehle X Declare to kro ");
}
