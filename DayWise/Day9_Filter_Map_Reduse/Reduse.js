





let arr = [10,20,30,40]

ans = arr.reduce((previous , current )=>
{
 return previous+ current
})

// console.log(ans)

ans = arr.reduce((previous , current )=>
    {
     return previous*current
    })
    
    // console.log(ans)


    myans = arr.reduce(( p , c )=>{ return (p + c) *2})
    console.log(myans)