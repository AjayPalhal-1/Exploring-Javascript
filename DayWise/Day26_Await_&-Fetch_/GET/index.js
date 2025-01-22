


async function getdata() {
    setTimeout(function()
        {
        console.log("We Are Inside The Timeout Block")
    } ,0);
    
}

let output = getdata();

 


async function mydata() {

    // 1 . get request  async opration  we add await we can add await ifour function is async
 let response =    await fetch('https://jsonplaceholder.typicode.com/photos')
  let data =  await response.json(); // parse  json  this opration will aslo asynch and we need use await herre 
  console.log(data)

    
}

 mydata();
