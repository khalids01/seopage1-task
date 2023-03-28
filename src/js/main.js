// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import {tasks} from './api'

const TASK_ELEMENTS = Array.from(document.querySelectorAll('.task'))

const getTasks = async () => {
    const {data} = await tasks()
    return data?.tasks
}

showTasks(getTasks())

TASK_ELEMENTS.map((t, i)=>{
    const itemsToShow = t.querySelector('.card-body');
    if (itemsToShow) {
      const Item = document.createElement('div');
      Item.classList.add('item');
      Item.innerHTML = `<h1>inner html</h1>`;

      t.appendChild(Item)
      // do something with Item
    } else {
      console.error('Element with class "card-body" not found');
    }

})

async function showTasks (tasksArr){
    const arr = await tasksArr

    arr.map((t, i)=>{
        console.log()
    })
} 