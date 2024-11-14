const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => 
{
    e.preventDefault();
    //This retrieves the class name of the attribute
    // console.log(e.target.className);
    // document.querySelector('#my-form').style.background = '#ccc';
    // document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML
    = '<h1>Hello</h1>';
});