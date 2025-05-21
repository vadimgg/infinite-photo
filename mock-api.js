const imageStore = {
  images: local_photos,

  // Keep track of which page we're on
  currentPage: 0,

  // How many images to return per "request"
  imagesPerPage: 10,

  // Method to get a batch of images
  getImages: function (count = this.imagesPerPage) {
    // Calculate starting index
    const startIdx = this.currentPage * this.imagesPerPage;

    // If we've gone through all images, loop back to beginning
    if (startIdx >= this.images.length) {
      this.currentPage = 0;
      return this.getImages(count);
    }

    // Get a slice of images
    const endIdx = Math.min(startIdx + count, this.images.length);
    const imageBatch = this.images.slice(startIdx, endIdx);

    // Update current page for next request
    this.currentPage++;

    return imageBatch;
  },

  // Reset to beginning
  reset: function () {
    this.currentPage = 0;
  },

  // Shuffle images to get different results on reload
  shuffle: function () {
    // Fisher-Yates shuffle algorithm
    for (let i = this.images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.images[i], this.images[j]] = [this.images[j], this.images[i]];
    }
    this.reset();
    return this;
  },
};

const mockApi = {
  // Configurable settings
  settings: {
    // Simulate network delay (min and max in ms)
    minDelay: 300,
    maxDelay: 800,

    // Simulate occasional errors (0-1, probability of error)
    errorRate: 0.05,
  },

  // Generate a random delay between min and max
  getRandomDelay() {
    return Math.floor(
      Math.random() * (this.settings.maxDelay - this.settings.minDelay) +
        this.settings.minDelay,
    );
  },

  // Simulate whether this request will error
  shouldError() {
    return Math.random() < this.settings.errorRate;
  },

  // Fetch photos with simulated network behavior
  async fetchPhotos(count = 10) {
    return new Promise((resolve, reject) => {
      // Add random delay to simulate network
      setTimeout(() => {
        // Get images from our image store
        const photos = imageStore.getImages(count);

        // Resolve with photos
        resolve(photos);
      }, this.getRandomDelay());
    });
  },

  // Reset the API state (resets the image store)
  reset() {
    imageStore.reset();
  },
};
