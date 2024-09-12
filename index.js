const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const getTodosByIds = async (ids) => {
  try {
    const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    // console.log(requests);
    const responses = await Promise.all(requests);
    responses.forEach((response) => {
        if(!response.ok) throw new Error("response error");
    })
    const dataResults = responses.map((data) => data.json());
    const allTasks = await Promise.all(dataResults);
    console.log(allTasks);
  } catch (error) {
    console.log("error", error);
  }
};
getTodosByIds([43, 21, 55, 100, 10]);