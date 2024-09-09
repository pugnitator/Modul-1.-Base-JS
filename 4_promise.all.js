getUsers();



function getUsers() {
    const USER_LIST_URL = 'https://jsonplaceholder.typicode.com/users';
    const getUsersResult = fetch(USER_LIST_URL);
    getUsersResult
    .then((respons) => {
        if (respons.ok === false) {
            throw new Error('Ошибка выполнения запроса');
        }
        return respons.json();
    })
    .then((users) => {
        switchLoader();
        setTimeout(() => {
            console.log(users)
            users.forEach(user => {
                const userList = document.querySelector('#data-container');
                const userElement = createUserElement(user);
                userList.append(userElement);
            });
        }, 3000);
    })
    .catch((error) => console.log('error', error))
    .finally(() => {
        console.log('Я тут')
        switchLoader()
    })
    
}

function createUserElement(user) {
    const userElement = document.createElement('li');
    
    const userElementAnchor = document.createElement('a');
    userElementAnchor.href = '#';
    userElementAnchor.textContent = user.username;

    userElement.append(userElementAnchor);

    return userElement;
}

function switchLoader() {
    const loader = document.querySelector('#loader');

    if (loader.hidden) {
        // console.log('скрыт', loader.hidden);
        loader.hidden = false;
        // console.log('Открыт', loader.hidden);
    } else loader.hidden = true;
}