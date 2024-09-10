const usersIdArray = [1, 5, 4, 2, 10];
getUsersBiId(usersIdArray);

function getUsersBiId(usersId) {
  const USER_LIST_URL = "https://jsonplaceholder.typicode.com/users";
  //получить промисы с запросом по каждому пользователю
  const requests = usersId.map((id) => fetch(`${USER_LIST_URL}/${id}`));
  console.log(requests);

  //осуществить запросы по каждому пользователю и сохранить ответы в массив
  Promise.all(requests)
    .then((responses) => {
      console.log(responses);
      const result = responses.map((response) => response.json());
      Promise.all(result)
        .then((users) => {
          switchLoader();
          users.forEach((user) => {
            const userList = document.querySelector("#data-container");
            const userElement = createUserElement(user);
            userList.append(userElement);
          });
        })
        .catch((error) => console.log("error", error))
        .finally(() => {
          switchLoader();
        });
    })
    .catch((error) => {
      throw new Error("Ошибка первого промиса");
    });
}

function createUserElement(user) {
  const userElement = document.createElement("li");

  const userElementAnchor = document.createElement("a");
  userElementAnchor.href = "#";
  userElementAnchor.textContent = user.username;

  userElement.append(userElementAnchor);

  return userElement;
}

function switchLoader() {
  const loader = document.querySelector("#loader");

  if (loader.hidden) {
    loader.hidden = false;
  } else loader.hidden = true;
}
