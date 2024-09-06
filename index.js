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
const taskListBlock = body.querySelector('.tasks-list');
const tasksCard = tasks.map((element) => convertTaskToHTML(element));
const taskBlockForm = document.querySelector('.create-task-block');

tasksCard.forEach((element) => {
    taskListBlock.insertAdjacentHTML('beforeend', element)
})

body.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'tab') changeTheme(body);
})

taskBlockForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const errorBlock = document.querySelector('.error-message-block');
    if (errorBlock != null) errorBlock.remove();
    
    const taskText = event.target.taskName.value;
    if(taskText === '') {
        addErrorToForm('Название задачи не должно быть пустым');
    } else if(tasks.some((element) => element.text === taskText)) {
        addErrorToForm('Задача с таким названием уже существует');
    } else {
        const newTaskId = tasks.length === 0 ? '100' : String(Number(tasks[tasks.length - 1].id) + 1);
        const newTask = {
            id: `${newTaskId}`,
            completed: false,
            text: `${taskText}`
        };
        tasks.push(newTask);

        taskListBlock.insertAdjacentHTML('beforeend', convertTaskToHTML(newTask))
    }
})

taskListBlock.addEventListener('click', (event) => {
        if(event.target.className === 'task-item__delete-button default-button delete-button') {
            const task = event.target.closest('.task-item');
            const deleteModal = displayDeleteModal();
            useDeleteModal(deleteModal, task);
        }
    }
);

function displayDeleteModal(){
    const deleteModalHTML = `
        <div class="modal-overlay">
            <div class="delete-modal">
                <h3 class="delete-modal__question">
                    Вы действительно хотите удалить эту задачу?
                </h3>
                <div class="delete-modal__buttons">
                    <button class="delete-modal__button delete-modal__cancel-button">
                        Отмена
                    </button>
                    <button class="delete-modal__button delete-modal__confirm-button">
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    `
    body.insertAdjacentHTML('beforeend', deleteModalHTML);
    return body.querySelector('.modal-overlay');
}

function useDeleteModal(deleteModal, task) {
    deleteModal.addEventListener('click', (event) => {
        if (event.target.className === 'delete-modal__button delete-modal__cancel-button') {
            deleteModal.className = 'modal-overlay_hidden';
        } else if (event.target.className === 'delete-modal__button delete-modal__confirm-button') {
            //удаляем элемент с экрана
            task.remove();
            deleteModal.className = 'modal-overlay_hidden';
            //удаляем элемент из массива
            const taskId = task.getAttribute('data-task-id');
            console.log(taskId);
            tasks.splice(tasks.findIndex((item) => item.id === taskId), 1);
            // console.log(taskId, tasks);
            
        }
    })
}

function addErrorToForm(errorText) {
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message-block';
    errorSpan.textContent = errorText;

    document.querySelector('.create-task-block').insertAdjacentElement('afterbegin', errorSpan);
}

function changeTheme(body) {
    const isNightThemeNow = body.getAttribute('data-current-theme') === 'nightTheme';
    console.log(isNightThemeNow, body.getAttribute('data-current-theme'))

    if (isNightThemeNow) {
        console.log('да');
        document.querySelectorAll('[data-current-theme = "nightTheme"]').forEach(element => {
            element.removeAttribute('style');
            element.removeAttribute('data-current-theme')
        })

    } else {
        console.log('нет')
        body.setAttribute('data-current-theme', 'nightTheme');
        body.setAttribute('style', `background: #24292E;`);

        body.querySelectorAll('.task-item').forEach((element) => {
            element.setAttribute('data-current-theme', 'nightTheme');
            element.setAttribute('style', 'color: #ffffff;')
        });
        body.querySelectorAll('button').forEach((element) => {
            element.setAttribute('data-current-theme', 'nightTheme');
            element.setAttribute('style', 'border: 1px solid #ffffff;')
        }); 

        console.log(body);
    }
}

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