// add event listener to add button
const addButton = document.querySelector('#add');

console.log(addButton);
const addItem = () => {
  const task = document.querySelector('#task').value
  // create a text node of the toDo item
  const toDo = document.createTextNode(task)
  console.log(toDo)
  
  const ul = document.querySelector('ul')

  const li = document.createElement('li')
   // create a checkbox for each li
   const checkbox = document.
   createElement('input')
   checkbox.type = 'checkbox'

   // create a label for each checkbox

   const label = document.createElement('label')

  ul.appendChild(li)
  li.appendChild(checkbox)
  label.appendChild(toDo)
  li.appendChild(label)
  li.classList.toggle('new')
  
 
  

  

}
addButton.addEventListener('click', addItem)
