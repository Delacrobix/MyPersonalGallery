//ImageDetailPage
export function adaptiveImage() {
  const cardContainer = document.querySelector('#card-detailImage-container');
  const card = document.querySelector('#card-body');
  const imageDetail = document.querySelector('#image-detail-img');
  const windowHeight = window.innerHeight;

  if (imageDetail.offsetHeight > 800) {
    const cardHeight = windowHeight - windowHeight * 0.001;

    card.style.height = `${cardHeight}px`;
    imageDetail.style.height = `${cardHeight - cardHeight * 0.17}px`;

    const imageWidth = imageDetail.width;

    cardContainer.style.width = `${imageWidth + imageWidth * 0.15}px`;
  }
}

// const observer = new MutationObserver(adaptiveImage);

// // Configuración del observador para observar cambios en los atributos, texto y/o hijos del elemento
// const config = {
//   attributes: true,
//   characterData: true,
//   childList: true,
//   subtree: true,
//   attributeOldValue: true,
//   characterDataOldValue: true,
// };

// observer.observe(cardContainer, config);
