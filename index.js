/* -- I set the variables that are going to be used to manipulate the dom ---*/
const container = document.querySelector('#container');
const p = document.createElement('p');
const h3 = document.createElement('h3');
const content = document.createElement('div');
const h1 = document.createElement('h1');

/*-- Choosing the variable and adding text and CSS Style on the webpage using javascript --*/
p.style.color = 'red';
p.textContent = 'Hey Im red!'; 
container.appendChild(p)

h3.style.color = 'blue';
h3.textContent = 'Hey Im blue!'; 
container.appendChild(h3)

/* --  Here we create a div and add child elements within the div (I declared it in Line 5) --*/
content.style.border = "2px solid rgb(0,0,0)"; 
content.style.backgroundColor = "pink";

h1.style.color = 'red';
h1.textContent = 'Hey Im in the div'; 
content.appendChild(h1);

p.style.color = 'red';
p.textContent = 'Me Too'; 
content.appendChild(p);

/* -- Notice I added appended the h1 and p values in the content 
variable then appended the content variable to the container variable, 
this way I want to have the the h1 and p inside the div border. --*/
container.appendChild(content);