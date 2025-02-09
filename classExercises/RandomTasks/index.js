
// function generateRandomTask() {
//   return {
//     text: `Texto aleatorio número ${getRandomInt(1, 1000)}`,
//     isCompleted: getRandomInt(0, 1) === 1,
//     isFav: getRandomInt(0, 1) === 1
//   };
// }

// function getRandomArray() {
//   const randomTasks = [];
//   for (let i = 0; i < 10; i++) {
//     randomTasks.push(generateRandomTask());
//   }
//   return randomTasks;
// }

// Estas funciones serán las que iremos cambiando con los ejemplos
// function regenerateArray() {
//   const tasks = getRandomArray();
//   document.querySelector('#tasks').innerHTML = '';

//   tasks.forEach((task) => {
//     createTaskNode(task, true);
//   });

//   customTasks.forEach((task) => {
//     createTaskNode(task, true);
//   });
// }

// MANAGE RETRIEVAL AND STORING OF DATA
function getLocalStorageData() {
  if (localStorage.length) {
    const entries = Object.entries(localStorage).sort((a, b) => Number(a[0]) - Number(b[0])); // [[CLAVE,VALOR]]
    entries.forEach((entry) => {
      console.log(entry);
      const customTask = JSON.parse(entry[1]);
      createTaskNode(customTask, true);
    });
  }
}

function setLocalStorageData() {
  let tasks = document.querySelectorAll('.task');
  tasks.forEach((task) => {
    customTask = {
      id: task.id,
      text: task.querySelector('span').innerText,
      isCompleted: task.querySelector('.status').innerHTML === 'completed',
      isFav: task.querySelector('button').classList.contains('fav')
    };
    localStorage.setItem(task.id, JSON.stringify(customTask));
  });
}

// UTILITIES FOR THE CREATION OF THE TASKS
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCustomTask() {
  let customTask = {
    id: `${Date.now()}`,
    text: document.querySelector('#create-task input').value,
    isCompleted: false,
    isFav: false
  };

  return customTask;
}

function createTaskNode(task, addToEnd) {
  const taskNode = document.createElement('div');
  taskNode.id = task.id;
  taskNode.className = 'task';

  taskNode.innerHTML = `
    <span class="${task.isCompleted ? 'completed' : ''}">${task.text}</span> -
    <span class="status">${task.isCompleted ? 'completed' : 'pending'}</span>
    <button class="${task.isFav ? 'fav' : ''}">${task.isFav ? '💝' : '💔'}</button>
    `;

  const tasksNode = document.querySelector('#tasks');

  if (addToEnd) {
    tasksNode.appendChild(taskNode);
  } else {
    tasksNode.prepend(taskNode);
  }

  taskNode.addEventListener('click', function () {
    const taskTextNode = taskNode.querySelector('span');
    const isCurrentlyCompleted = taskTextNode.classList.contains('completed');
    taskTextNode.classList.toggle('completed');
    taskNode.querySelector('.status').innerText = isCurrentlyCompleted ? 'pending' : 'completed';
    setLocalStorageData();
  });

  const button = taskNode.querySelector('button');
  button.style.display = 'none';

  button.addEventListener('click', (event) => {
      event.stopPropagation();
      const isCurrentlyFav = taskNode.querySelector('button').classList.contains('fav');
      button.classList.toggle('fav');
      button.innerText = isCurrentlyFav ? '💔' : '💝';
      setLocalStorageData();
  });

  taskNode.addEventListener('mouseover', function () {
      button.style.display = 'inline-block';
  });

  taskNode.addEventListener('mouseout', function () {
      button.style.display = 'none';
  });
}

// function addTask(addToEnd) {
//   const task = generateRandomTask();
//   createTaskNode(task, addToEnd);
// }

function addCustomTask() {
  if (!document.querySelector('#create-task input').value.includes('furro')) {
    const task = generateCustomTask();
    createTaskNode(task, true);
    setLocalStorageData();
  } else {
    alert('Furro muerto abono pa mi huerto')
  }
} 

document.querySelector('#create-task').addEventListener('submit', (event) => {
  event.preventDefault();
  addCustomTask();
  document.querySelector('#create-task input').value = '';
  document.querySelector('#create-task button').disabled = true;
});

document.querySelector('#create-task input').addEventListener('input', () => { 
  if (document.querySelector('#create-task input').value) {
    document.querySelector('#create-task button').disabled = false;
  } else {
    document.querySelector('#create-task button').disabled = true;
  }
});

// event listeners para que los botones llamen a las funciones anteriores
// document.querySelector('#regenate').addEventListener('click', () => {
//   regenerateArray();
// });

// document.querySelector('#add-first').addEventListener('click', () => {
//   addTask(false);
// });

// document.querySelector('#add-last').addEventListener('click', () => {
//   addTask(true);
// });

getLocalStorageData();

