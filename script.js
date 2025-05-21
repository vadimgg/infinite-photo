const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

let photosArray = [];

const count = 10;

// Unsplash API
const apiKey = "";
const apiUrl = `https://api.unsplash.com/photos/random/?count=${count}&client_id=${apiKey}`;

function setAttributes(item, attrs) {
  for (const [key, value] of Object.entries(attrs)) {
    item.setAttribute(key, value);
  }
}

function imageLoadedEvenHandler() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

function buildPhotoElement(photo) {
  const item = document.createElement("a");
  setAttributes(item, {
    href: photo.links.html,
    target: "_blank",
  });

  const img = document.createElement("img");
  setAttributes(img, {
    src: photo.urls.regular,
    alt: photo.alt_description,
    title: photo.alt_description,
  });

  img.addEventListener("load", imageLoadedEvenHandler);

  item.appendChild(img);
  imageContainer.appendChild(item);
}

// Create elements in the DOM
function displayPhotos(photos) {
  console.log(photos);
  totalImages += photos.length;
  photos.forEach(buildPhotoElement);
}

// Get photos
async function getPhotosFromUnsplash() {
  try {
    const res = await fetch(apiUrl);
    return await res.json();
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

async function getPhotos() {
  try {
    // const res = await fetch(apiUrl);
    // return await res.json();
    return await mockApi.fetchPhotos(count);
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    loader.hidden = false;
    getPhotos().then(displayPhotos);
  }
});

getPhotos().then(displayPhotos);
