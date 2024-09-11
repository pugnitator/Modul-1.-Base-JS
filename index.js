getFastestLoadedPhoto([10, 11, 21]);

function getFastestLoadedPhoto(ids) {
  const GET_PHOTOS_URL = `https://jsonplaceholder.typicode.com/photos`;
  const requests = ids.map((id) => fetch(`${GET_PHOTOS_URL}/${id}`));

  Promise.race(requests)
    .then((response) => {
      switchLoader();
      console.log(response);
      const getImage = response.json();
      console.log(getImage);

      getImage
        .then((image) => {
          createPhotoElement(image);
        })
        .catch((error) => console.log("error", error))
        .finally(() => {
          switchLoader();
        });
    })
    .catch(() => console.log("error", error));
}

function createPhotoElement(image) {
  const photosList = document.querySelector("#data-container");
  const photoMainConteiner = document.createElement("li");
  const photoImage = document.createElement("img");
  const photoTitle = document.createElement("h3");

  photoImage.className = "photo-item__image";
  photoImage.src = `${image.url}`;

  photoTitle.className = `photo-item__title`;
  photoTitle.textContent = "accusamus beatae ad facilis cum similique qui sunt";

  photoMainConteiner.append(photoImage);
  photoMainConteiner.append(photoTitle);
  photosList.append(photoMainConteiner);
}

function switchLoader() {
  const loader = document.querySelector("#loader");

  if (loader.hidden) {
    loader.hidden = false;
  } else loader.hidden = true;
}