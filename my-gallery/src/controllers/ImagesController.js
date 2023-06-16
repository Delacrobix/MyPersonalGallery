const SEVER = process.env.REACT_APP_BACKEND_URL;

export async function getAllThumbnails() {
  let _data;

  await fetch(`${SEVER}/api/images/getThumbnails`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      _data = data;
      // console.log('GetAllThumbnails data: ', data);
    })
    .catch((err) => {
      console.error(err);
    });

  return _data;
}

export async function getImage(name) {
  let _data;

  await fetch(`${SEVER}/api/images/getByName/${name}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      _data = data;
      // console.log('getImage data: ', data);
    })
    .catch((err) => {
      throw new Error(err);
    });

  return _data;
}

export function filterImages(tag, images) {
  let imagesFiltered;

  switch (tag) {
    case 'animals':
      imagesFiltered = filterByTag(tag, images);
      break;
    case 'people':
      imagesFiltered = filterByTag(tag, images);
      break;
    case 'others':
      imagesFiltered = filterByTag(tag, images);
      break;
    default:
      return images;
  }

  return imagesFiltered;
}

function filterByTag(tag, images) {
  let result = [];

  images.forEach((element) => {
    if (element.tag === tag) {
      result.push(element);
    }
  });

  return result;
}
