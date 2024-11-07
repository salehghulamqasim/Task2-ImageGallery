# Task2-ImageGallery
# Image Slider Project

This project is a simple image slider built with HTML, CSS, and JavaScript. It includes the functionality to display images in a sliding carousel format with navigation buttons and a play/pause button to control the slideshow. The slider also pauses automatically when the user hovers over the images.

## Features

- **Automatic Slideshow**: The images automatically slide at an interval.
- **Manual Navigation**: Users can navigate between images using the "previous" and "next" buttons.
- **Pause and Play**: A play/pause button allows users to pause and resume the slideshow.
- **Hover to Pause**: The slideshow pauses when hovering over the images and resumes when the mouse leaves.

## How It Works

The image slider consists of a set of images that move horizontally within a container. The slider is controlled through:
1. **Navigation buttons** (`prev-btn` and `next-btn`) for manual sliding.
2. **Pause button** (`pause-btn`) for pausing and resuming the automatic slideshow.
3. **Hover functionality**: Pauses the slideshow when hovering over the images, and resumes when the mouse moves out.

### JavaScript Functions:
- **showSlide()**: Displays the current slide.
- **nextSlide()**: Moves to the next slide.
- **startSlideShow()**: Starts the automatic slideshow.
- **stopSlideShow()**: Stops the automatic slideshow.
- **Event listeners**: Listen for user interactions like button clicks and hover events.

## Before and After

### Before:
- The slider was a static display of images without any interactivity.

### After:
- The slider is now interactive with a manual navigation feature, a pause/play button, and hover-to-pause functionality for the slideshow.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/image-slider.git
