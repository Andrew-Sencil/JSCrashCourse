/*Protoype are powerful and very flexible feature
of javascript, making it possible to reuse code 
and combine objects
Person.prototype.getBirthYear = function()
{
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function()
{
    return `${this.lastName} ${this.firstName}`;
}*/

class Person
{
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear()
    {
        return this.dob.getFullYear();
    }

    getFullName()
    {
        return `${this.lastName} ${this.firstName}`;
    }
}

//Instantiate Object
const person1 = new Person('John', 'Doe', '11-28-2001')
const person2 = new Person('Minjeong', 'Kim', '01-01-2001')

console.log(person2);
console.log(person2.getBirthYear())
console.log(person2.getFullName())