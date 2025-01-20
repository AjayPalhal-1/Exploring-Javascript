
console.log("We Are In Line No. 2")

setTimeout(() => {
    console.log("We Are In Async Function 1 ")
    console.log(" We Are IN Line No. 6")
    
}, 5000);

console.log("We Are In Line no . 10")

setTimeout(() => {
    console.log("We Are In Async Function 2 ")
    console.log("We Are IN Line No. 14 ")
    
}, 2000);

console.log("We are in the line no. 9")

setTimeout(() => {
    console.log("We Are In Async Function 3 ")
    console.log("We Are IN Line No. 22 ")
    
}, 1000);

console.log("We are in the line no. 26")
