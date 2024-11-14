const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    }
];

//for of
// for(let todo of todos)
//     {
//         console.log(todo.text);
//     }
//This transforms the object above into a json ready format
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

// todos.forEach(function(todo)
// {
//     console.log(todo.text);
// })

//This returns the retrieved values as an array
// const todoText = todos.map(function(todo)
// {
//     return todo.text;
// })

// console.log(todoText)

//This return based on the condition inside
const todoCompleted = todos.filter(function(todo)
{
    return todo.isCompleted === true;
});

const todoCompleted1 = todos.filter(function(todo)
{
    return todo.isCompleted === true;
}).map(function(todo)
{
    return todo.text;
})

console.log(todoCompleted1);

const x = 11;

const color = x > 10 ? 'red' : 'blue';

console.log(color);