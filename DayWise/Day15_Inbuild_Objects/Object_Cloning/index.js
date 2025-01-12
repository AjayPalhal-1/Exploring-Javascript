
// first way to cloneing object // 
// Spered Oprator = ...

obj1 = {
     age : 23 ,
     gender : "Male",
     Hometown:"Kanaad"
}


let obj2 = obj1

obj1.Hometown="Pune"


// console.log(obj1)
// console.log(obj2)





obj3 = {
    age : 23 ,
    gender : "Male",
    Hometown:"Kanaad",
    value : 32323,
    id : 123,
    salary : 2324343
}


let obj4 ={...obj3} // ... => spread Oprator is used for cloning this is 1 methode 

obj3.Hometown="Pune"
obj3.age=24

// console.log(obj3)
// console.log(obj4)


// if we use ...(i.e spread oprator)  we are going to make new reference if we do changes in orignal object then this only spply on orignal one 
// coz the new we genrated this the seprate so we cant chnge them by doing changes in orignal one 
// thats callled cloning


// 2 Assign Method object.asssign({blank destination object}, src )

let obj5 = Object.assign({},obj1)  // syntax

obj1.Hometown = "SambhajiNagar"

// console.log(obj1)
// console.log(obj5)



let obj6 = Object.assign({},obj1,obj3) //  we can clone more than 1 object in anothe obj


// console.log(obj6)


// method 3 :  using itration 




// diffrence of Deep Copy And Shaalo Copy 

let obj10 = { 
    name: "Ajay", 
    details: { age: 23 }

 }

let obj20 = { ...obj10 }; // Creates a Deep copy

obj10.details.age = 20;

// console.log("obj10 :  ",obj10)
// console.log("\nObj20 : ",obj20); // Output: 24 (nested object is still shared)



let obj30 = { 
    name: "Ajay", 
    details: { age: 23 }

 }

 let obj40 = structuredClone(obj30); // Creates a eep copy

 
obj30.details.age = 20; 

console.log("obj30 :  ",obj30)
console.log("\nObj40 : ",obj40); // Output: 24 (nested object is still shared)


