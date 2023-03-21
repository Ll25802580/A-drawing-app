function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
  background(51);

  function canvasWave2D(sizeX,sizeY)
{
  loadPixels();
  const TAU = Math.PI * 2;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const red = 255 * 0.5 * sin(floor(y * x * TAU /sizeX)*4321) + 255 * 0.5
      
      const index = 4 * (x + y * width);
      pixels[index + 0] = red;
      pixels[index + 1] = sizeY;
      pixels[index + 2] = sizeX;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}

canvasWave2D(mouseX, mouseY);

  }
  
