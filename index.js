const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;
const createNewPost = async () => {
    try {
        isLoading = true;
        const respose = await fetch(POSTS_URL, {
          method: "POST"
        });
        if(!respose.ok) throw new Error('error', error);
        const result = await respose.json();
        console.log(result);
    } catch(error) {
        console.log("error", error);
    } finally {
        isLoading = false;
    }

}

createNewPost();