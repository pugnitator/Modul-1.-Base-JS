const ALBUMS_URL = `https://jsonplaceholder.typicode.com/albums`;
renderAlbums();

async function renderAlbums() {
  try {
    switchLoader();
    const response = await fetch(ALBUMS_URL);
    if (!response.ok) throw new Error("url error");
    const albumsList = await response.json();
    albumsList.forEach((album) => {
      createAlbumElement(album);
    });
  } catch (error) {
    console.log("error", error);
    addErrorToDataConteiner();
  } finally {
    switchLoader();
  }
}

function createAlbumElement(album) {
  const albumsList = document.querySelector("#data-container");
  const albumElement = document.createElement("li");
  albumElement.textContent = album.title;

  albumsList.append(albumElement);
}

function addErrorToDataConteiner() {
  const albumsList = document.querySelector("#data-container");
  albumsList.textContent = "Произошла ошибка в получении данных об альбомах...";
}

function switchLoader() {
  const loader = document.querySelector("#loader");
  if (loader.hidden) {
    loader.hidden = false;
  } else loader.hidden = true;
}
