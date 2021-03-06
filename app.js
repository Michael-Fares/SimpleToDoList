// global variable initializations
const addButton = document.querySelector('#add');

const showCompleteButton = document.querySelector('#show-completed');

const ul = document.querySelector('#toDo')

const completed = document.querySelector('#completed')

const task = document.querySelector('#task')

// functions
const clearInput = () => {
  task.value = '';
}


const addItem = () => {
  // create a text node of the toDo item and point it to the value of the input
  const toDo = document.createTextNode(task.value)
  console.log(toDo)
  
  const li = document.createElement('li')
   // create a checkbox for each li
   const checkbox = document.
   createElement('input')
   checkbox.type = 'checkbox'
   checkbox.classList.add('checkbox')

   // create a label for each checkbox

   const label = document.createElement('label')

   // prevent adding empty tasks 
if (task.value != '') {
  ul.appendChild(li)
  li.appendChild(checkbox)
  label.appendChild(toDo)
  li.appendChild(label)
  li.classList.toggle('new')
  li.classList.toggle('animate__animated')
     li.classList.toggle('animate__fadeIn')
  // clear the input feild after task is added
  clearInput()
}
checkbox.onchange = () => {

  li.classList.toggle('done')
   if (checkbox.checked) {
     setTimeout(function(){ completed.appendChild(li); }, 1000)
     li.classList.toggle('animate__fadeIn')
   } else {
     ul.appendChild(li)
   }
}
}
const hideComplete = () => {
completed.classList.toggle('hidden')
}

// event listeners 
addButton.addEventListener('click', addItem)
showCompleteButton.addEventListener('click', hideComplete)

// allow pressing enter to add a task also
task.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
 addItem() 
  }
})



