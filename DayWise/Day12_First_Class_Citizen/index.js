

// 1 . String in Variable 

// let greet = function ()
// {
//     console.log("Starting The Day ")
// }

// greet();


// 2. Passing as Argument 


// function greet ()
// {
//     console.log("Hi Buddy  I Am Greet")
// }


// function greetMe( greet, fullName)
// {
//     console.log("We Are In GreetMe " , fullName)
//     greet()

// }

// greetMe(greet, "AJAY")



//  3 . returning the Function 


// function solve ()
// {
//     return function (num )
//     {
//         return (num + num);
//     }
// }

// let ans = solve()
// let finalans = ans(5)

// console.log(finalans)


// 4 . Function In DATA Structure 

// arr = [
//      function (a,b) { return a+b},
//      function (a,b) { return a-b},
//      function (a,b) { return a*b },
//      function (a,b) { return a/b}
     
// ]

// let first = arr[0]
// let ans = first (10,5)
// console.log(ans);

// let first1 = arr[1]
// let ans1 = first1 (10,5)
// console.log(ans1);

// let first4 = arr[2]
// let ans4 = first4 (10,5)
// console.log(ans4);

// let first2 = arr[3]
// let ans2 = first2 (10,5)
// console.log(ans2);


// 5 . function in object 

let obj = {
     age : 23,

     greet:()=>{console.log("Now Today Is 9th Jan 2025")},
     night:()=>{console.log("Now We Are night function")}

}

obj.greet()
obj.night()