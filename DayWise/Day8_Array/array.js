

// console.log(arr)






// let brr = new Array(1,"AJAy",55,12,75,"Ap","Chai Copy ");

// console.log(brr);
// console.log(brr.length)
// console.log(brr.at(6));
// // console.log(brr.fill(2));
// console.log(brr.pop(6));
// console.log(brr.push(999));
// console.log(brr.slice(2,4));
// console.log(brr.slice(2,4));

let arr = [1,2,3,4,5]


let ansarray = arr.map((num) =>
{
    return num * num;
})



console.log(ansarray);


let brr =[5,4,3,2,1]

let ansbrr = brr.map( (num) =>
{
     return num*2;
}

)

console.log(ansbrr)



let crr = [9,8,7,6,5,4,3]

anscrr = crr.map(
    (mynum)=>
    {
         return mynum-1;
    }
)

console.log(anscrr)



drr = crr.map(
    (num)=>
    {
        return num -num
    }
)

console.log(drr)

err = crr.map(
    (num)=>{
         return num + 100
    }
)
console.log(err)
