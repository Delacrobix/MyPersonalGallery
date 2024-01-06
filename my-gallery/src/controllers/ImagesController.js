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

export async function getImage(title) {
  let _data;

  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  // },
  await fetch(`${SEVER}/api/images/getByTitle/${title}`, {})
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      _data = data;
      // console.log('getImage data: ', data);
    })
    .catch((err) => {
      console.error(err);
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

export async function saveCache(files) {
  try {
    const cache = await caches.open('images-cache');

    const jsonData = JSON.stringify(files);
    const response = new Response(jsonData, {
      headers: { 'Content-Type': 'application/json' },
    });

    await cache.put('thumbnails', response);
  } catch (err) {
    throw new Error('saving cache files: ' + err.message);
  }
}

export async function getCache() {
  try {
    const cache = await caches.open('images-cache');
    const response = await cache.match('thumbnails');

    if (response) {
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        var responseData;

        if (response.body !== null) {
          responseData = await response.json();
        }

        return responseData;
      }
    } else {
      return response;
    }
  } catch (err) {
    throw new Error('getting cache files: ' + err.message);
  }
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
