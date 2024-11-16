# ASCII Donut Animation Project (https://donut-web-pied.vercel.app/)[https://donut-web-pied.vercel.app/]

## Overview

This project is a web-based ASCII animation that renders a spinning 3D donut in real-time. Inspired by the mathematical concepts discussed in a1k0n's "donut math" blog post, the project implements a frame-by-frame rotation effect using trigonometry and depth buffering to achieve a 3D illusion on a 2D plane.

## Technologies Used

- **TypeScript**: Provides static type-checking to enhance code reliability and maintainability.
- **HTML Canvas**: Used for rendering the donut shape in a browser.
- **CSS**: For styling the page, including background and layout settings.
- **JavaScript Math Functions**: Employed for sine, cosine, and other trigonometric calculations crucial for creating the 3D effect.

## Learning Objectives

Through this project, I aim to:

1. **Understand 3D Projections**: Learn how to convert 3D coordinates into 2D space using projection techniques.
  
2. **Implement Depth Buffering**: Manage pixel depth to create realistic overlap and shading, giving the animation a sense of 3D rotation.

3. **Optimize for Real-Time Rendering**: Enhance efficiency in calculations to achieve smooth animation in the browser.

4. **Build an Interactive Canvas**: Learn to utilize HTML Canvas and TypeScript for creating graphical, animated content in a web project.

## Project Structure

- **index.html**: The main HTML file to structure the page layout.
- **/src**: Contains all TypeScript code for rendering the animation and handling 3D calculations.
- **/styles**: Basic CSS files to style the canvas and overall layout.

## Features

- Renders a rotating 3D ASCII donut in real time.
- Interactive and efficient, leveraging canvas for a smooth animation experience.
- Calculates lighting and depth based on viewing angles for realistic shading.

## How to Run the Project

To run this project locally:

1. Clone the repository:
   - git clone https://github.com/yourusername/ascii-donut.git
   - cd ascii-donut

2. Install any dependencies (if using a bundler):
   - Copy code
   - npm install
   
3. npm start


## Contribution 
This project is based on a1k0n's work on ASCII donut animations. For further reading and inspiration, visit [a1k0n's donut math article](https://www.a1k0n.net/2011/07/20/donut-math.html).
