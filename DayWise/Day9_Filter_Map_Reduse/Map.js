


let arr = [1,2,3,4,5,6,78,]

let ansarray = arr.map((value)=> {  return value * 2})
console.log(ansarray)

newarray = arr.map((num)=>{return num +10})
console.log(newarray)


ans = arr.map((num)=>{ return num - num})
console.log(ans)


evnadd = arr.map((value)=> { return (value)%2==0  })
console.log(evnadd)


oddnum = arr.map((num)=>{  
    if( num % 2 !=0)
    {
        return num
    }
    
    })
console.log(oddnum)



