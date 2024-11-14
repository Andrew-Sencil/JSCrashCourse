const name = 'John';
const age = 30;

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);
//Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = 'Hello World';
//A property that retrieves the length of the string
console.log(s.length);
//This starts from 0 and ends with 5 (basically, 5 - 1)
console.log(s.substring(0, 5));
//This splits the word then turns it into an array
/*takes a pattern and divides this string into an 
ordered list of substrings by searching for the pattern, 
puts these substrings into an array, and returns the 
array.*/
console.log(s.split('l'));

//Arrays

const num = new Array(1, 2, 3, 4, 5);
console.log(num);

const fruits = ['apple', 'banana', 'orange'];
//.push adds a new element in the end of the array 
fruits.push('mango');
//.unshift adds a new element in the beginning of the array
fruits.unshift('strawberry');
//this takes the last element of the array
fruits.pop();

console.log(fruits);

//Object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: 
    [
        'music',
        'movies',
        'sports'
    ],
    address:
    {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.hobbies[1])

//Destructuring
const { firstName, lastName, address: { city } } = person;

console.log(city);

//Adding into the object
person.email = 'johndoe@email.com';

for(let i = 1; i <= 10; i++)
    {
        console.log(i);
    }