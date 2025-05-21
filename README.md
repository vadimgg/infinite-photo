# Infinite Scroll Image Gallery

A JavaScript-based infinite scroll image gallery that uses a local image store instead of connecting to an external API. This approach allows for hosting on GitHub Pages without exposing API keys.

## 📋 Project Overview

This project creates an infinite scroll image gallery with a simulated API experience. As the user scrolls down the page, more images load automatically, creating a seamless browsing experience.

## Demo

Check out the live demo: [Infinite Photo](https://vadimgg.github.io/infinite-photo/)

## 🌟 Features

- **Infinite Scrolling**: Automatically loads more images as the user scrolls down
- **Mock API**: Simulates real API behavior with configurable delays and error rates
- **Local Image Store**: Uses local data instead of external API calls
- **Responsive Design**: Works on all device sizes
- **Loading Animations**: Visual feedback during image loading

## 📁 File Structure

```
.
├── index.html     # Main HTML document
├── script.js      # Main application logic
├── mock-api.js    # Simulated API functionality
├── photos.js      # Local image data store
├── style.css      # CSS styling
├── loader.svg     # Loading animation SVG
├── LICENSE        # License file
└── README.md      # This documentation
```

## 🚀 How It Works

1. The application loads a batch of images from the local image store when the page loads
2. As the user scrolls near the bottom of the page, the app requests more images
3. The mock API simulates network behavior by adding random delays
4. New images are added to the DOM with smooth loading transitions

## 🔧 Customization

### Changing Image Load Settings

In `script.js`, you can modify:
- The number of images loaded per batch
- The scroll threshold for loading new images

### Adjusting Mock API Behavior

In `mock-api.js`, you can configure:
- Min/max simulated network delay times
- Error rate probability
- Response format

### Adding More Images

To add more images to the gallery:
1. Open `photos.js`
2. Add new image objects to the array following the existing format

## 📝 Usage

Simply open `index.html` in a web browser to view the gallery. As you scroll down, more images will automatically load.

## 💻 Local Development

1. Clone this repository
2. Open `index.html` in your browser
3. Edit files as needed - no build step required
