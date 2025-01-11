


class Human 
{
    age ;   
    #weight ; // private 



    constructor ( newWeight=0, newAge=0)
    {
        this.age = newAge
        this.#weight = newWeight
    }
    details(){
        console.log("Age : ",this.age)
        console.log("Weight : ",this.#weight)
    }

    get getWeight()
    {
        return this.#weight

    }

    get getAge()
    {
        return this.age
        
    }

    set setAge( value)
    {
        this.age = value 
    }

    set setWeight(value )
    {
        this.#weight = value 
    }

}

class Employee
{
    #id ; 
    name ;
    salary ;


    constructor (id = 0 , name = 'Null' , salary =0)
    {
        this.id = id 
        this.name = name 
        this.salary= salary 
    }

    set setId(value )
    {
        this.id= value 
    }
    set setName(value )
    {
        this.name= value 
    }
    set setSalary(value )
    {
        this.salary= value 
    }
    get getId () { return this.id}
    get getName() { return this.name}
    get getSalary() { return this.salary}


    displayDetails()
    {
        console.log("Emp Id :", this.id)
        console.log("Emp Name :", this.name)
        console.log("Emp Salary :", this.salary)

    }
}

let obj = new Human();
obj.setAge=23
obj.setWeight=55

obj.details()

let obj2 = new Human(60 , 24)

obj2.details()


empobj = new Employee()
empobj.setAge= 55
empobj.salary= 500000
empobj.setName= "ABC"

empobj.displayDetails()


empobj2 = new Employee(1 ,"AJAY", 500000)
empobj2.displayDetails()


console.log(empobj2.getId)
console.log(empobj2.name)
console.log(empobj2.id)


