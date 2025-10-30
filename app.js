const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function setupTaskListeners(listItem, completeButton, deleteButton) {
    completeButton.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });
}

function createTaskElement(taskText) {
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');

    const taskTextSpan = document.createElement('span');
    taskTextSpan.classList.add('task-text');
    taskTextSpan.textContent = taskText;

    const taskActionsDiv = document.createElement('div');
    taskActionsDiv.classList.add('task-actions');

    const completeButton = document.createElement('button');
    completeButton.classList.add('action-btn', 'complete');
    completeButton.textContent = '✔️';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('action-btn', 'delete');
    deleteButton.textContent = '❌';

    taskActionsDiv.appendChild(completeButton);
    taskActionsDiv.appendChild(deleteButton);

    listItem.appendChild(taskTextSpan);
    listItem.appendChild(taskActionsDiv);

    setupTaskListeners(listItem, completeButton, deleteButton);

    return listItem;
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = createTaskElement(taskText);
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});