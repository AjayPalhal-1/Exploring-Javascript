

let name = "Closure "

function outfunction()
{
    let name = "Ajay"

    function innerfunction()
    {
        // let name = "Palhal"
        console.log(name)
    }

     return innerfunction
}


let ineer = outfunction();
ineer();