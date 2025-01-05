




let arr = [1,2,3,4,5,6,7,8,];

let ans = arr.filter((num) =>
{
    return num%2==0

})

// console.log(ans)


let brr = [1 ,2,"Ajay" , "ANKUSH " , 6,"AMOL" ,"PK","BM" ,"Today We Have Uploaded Our First Vlog On Youtube "]


let brrans = brr.filter((name)=>
{
   if(typeof(name)==="string")
   {
    // console.log(name)
   }
   else if( typeof(name)=== "number")
   {
    // console.log(name)
   }
})




let myarray = [12,43,4,47,776778,["a","b","c"]]

 ansarray = myarray.filter( (value)=>
 {
    if(typeof(value)==="object")
    {
        // console.log(value)
    }
    else if(typeof(value)==="number" && value %3==0 )
    {
        // console.log(value)
    }
 }

 )


 arrr = myarray.filter((num)=>{ return num< 100 && num%2==0 })
 console.log(arrr)




