function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerText = taskText;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

document.getElementById('taskInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.getElementById('addTaskButton').addEventListener('click', addTask);
