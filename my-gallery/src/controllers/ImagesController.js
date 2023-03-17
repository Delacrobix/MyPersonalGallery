const LOCAL = process.env.REACT_APP_BACKEND_URL;

export async function getAllImages() {
  let _data;

  await fetch(`${LOCAL}/api/images/get-all`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      _data = data;
    })
    .catch((err) => {
      console.error(err);
    });

  return _data;
}

export async function getImage(id) {
  let _data;

  await fetch(`${LOCAL}/api/images/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      _data = data;
    })
    .catch((err) => {
      console.error(err);
    });

  return _data;
}

export function filterImages(tag, images) {
  let imagesFiltered;
  
  switch (tag) {
    case "animals":
      imagesFiltered = filterByTag(tag, images);
      break;
    case "people":
      imagesFiltered = filterByTag(tag, images);
      break;
    case "others":
      imagesFiltered = filterByTag(tag, images);
      break;
    default:
      return images;
  }

  return imagesFiltered;
}

function filterByTag(tag, images){
  let result = [];

  images.forEach(element => {
    if(element.tag === tag){
      result.push(element);
    }
  });

  return result;
}
