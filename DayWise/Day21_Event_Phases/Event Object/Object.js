
let btn= document.getElementById('btn')

let anchaor =document.getElementById('anchortag')

function updatebtn( event )
{
    console.log("Btn Was Clicked ")
    console.log("Event type : ",event.type)
    console.log("Target Element:", event.target); // Logs the button element that triggered the event
    console.log("Mouse Coordinates:", event.clientX, event.clientY); 
    console.log("Default Work Stopped : " ,    event.preventDefault()) //
}

btn.addEventListener( 'click', updatebtn )
 anchaor.addEventListener( 'click', updatebtn )



