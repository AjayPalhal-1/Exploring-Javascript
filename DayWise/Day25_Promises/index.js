let  firstpromise = new Promise((resolve , reject)=>
    {
        console.log("Ajay Palhal");
         reject(new Error("Internal Error Bro !!!"));
    });


    function printmyName()
    {
        console.log("Call Me AJay Vrooo!!!!")
    }



    let  firstpromise1 = new Promise((resolve , reject)=>
        {
            setTimeout(printmyName, 10000);
        

        });
    