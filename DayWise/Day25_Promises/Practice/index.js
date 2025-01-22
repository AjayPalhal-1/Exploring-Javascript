let promis = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise Fulfilled");
  } else {
    reject("Internal Sever Error Vrooo Your Rejected");
  }
});

promis
  .then((msg) => {
    console.log("1st Then Ka msg : ", msg);
    return 10;
  })
  .then((msg) => {
    console.log("2nd  Then Ka msg : ", msg);
    return 20;
  })
  .then((msg) => {
    console.log("3rd  Then Ka msg : ", msg);
    return 30;
  })
  .catch((error) => {
    console.log("Error :", error);
  })
  .finally((msg) => {
    console.log("Finally Block Execute every time  ", msg);
    return 30;
  });




let promis1 = new Promise((resolve, reject) => {
    setTimeout (resolve,1000)
  console.log("1st Promise vroo..........!");
});


let promis2 = new Promise((resolve, reject) => {
    setTimeout (resolve,1000)

  console.log("2nd Promise vroo..........!");


});
let promis3 = new Promise((resolve, reject) => {
    setTimeout (resolve,1000)

  console.log("3rd Promise vroo..........!");
});


let promis4 = new Promise((resolve, reject) => {
    setTimeout (resolve,1000)

  console.log("4th Promise vroo..........!");
});


promis5 = new Promise((resolve, reject) => {
    setTimeout (resolve,1000)

  console.log("5th Promise vroo..........!");
});


Promise.all([promis1,promis2,promis3 ,promis4 , promis5])
.then((msg)=>{
    console.log(msg);

}).catch((error)=>{
    console.log("Error :", error);
}
)
