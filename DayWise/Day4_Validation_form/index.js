



let userid = "AJAY"

let password = "345"

function validate()
{
   let id =  document.getElementById("userid").value
    let pass =document.getElementById("Password").value

    if(id == userid && pass == password)
    {
        alert("Login Succesfully ")
    }
    else 
    {
        alert("Crendential Not Matched\nPls Enter Valid Data  ");



    }

}