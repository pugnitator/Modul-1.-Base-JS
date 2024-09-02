// код из модуля 14
const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

const body = document.querySelector('body');
const tasksCard = tasks.map((element) => convertTaskToHTML(element));

tasksCard.forEach((element) => {
    body.insertAdjacentHTML('beforeend', element)
})

// новый код <----
const createTaskBlockForm = document.querySelector('.create-task-block');

createTaskBlockForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = event.target.taskName.value;
    const newTaskId = String(Number(tasks[tasks.length - 1].id) + 1)

    const newTask = {
        id: `${newTaskId}`,
        completed: false,
        text: `${taskText}`
    };
    tasks.push(newTask);
    // console.log(newTask);

    body.insertAdjacentHTML('beforeend', convertTaskToHTML(newTask))
})


// код из модуля 14
function convertTaskToHTML(task) {
    return `
        <div class="task-item" data-task-id="${task.id}">
            <div class="task-item__main-container">
                <div class="task-item__main-content">
                    <form class="checkbox-form">
                        <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}">
                        <label for="task-${task.id}"></label>
                    </form>
                    <span class="task-item__text">
                        ${task.text}
                    </span>
                </div>
                <button class="task-item__delete-button default-button delete-button">
                    Удалить
                </button>
            </div>
        </div>
        
        `
}