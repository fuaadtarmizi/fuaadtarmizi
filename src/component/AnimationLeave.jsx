import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

const Sketch = (p5) => {
  let angle;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.clear(); // Clear the canvas (transparent background)
    angle = p5.PI / 7; // Base angle for symmetry
    p5.stroke(255);
    p5.noFill();
  };

  p5.draw = () => {
    p5.clear(); // Clear the canvas on each frame for transparency
    p5.translate(p5.width / 2, p5.height / 2); // Move origin to center

    // Animate the angle using sine for smooth motion
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 0, p5.PI / 3, p5.PI / 9);

    p5.strokeWeight(1);
    p5.stroke(255, 255, 200); // White stroke

    // Create the four main branches
    // Left-side branches
    p5.push();
    p5.rotate(-p5.PI / 2);
    drawFlower(60);
    p5.pop();

    p5.push();
    p5.rotate(-p5.PI / 6);
    drawFlower(60);
    p5.pop();

    // Right-side branches
    p5.push();
    p5.rotate(p5.PI / 6);
    drawFlower(60);
    p5.pop();

    p5.push();
    p5.rotate(p5.PI / 2);
    drawFlower(60);
    p5.pop();

    // Additional branches
    p5.push();
    p5.rotate(p5.PI / 1.2);
    drawFlower(60);
    p5.pop();

    p5.push();
    p5.rotate(p5.PI / 0.9);
    drawFlower(60);
    p5.pop();
  };

  const drawFlower = (len) => {
    if (len > 4) {
      for (let i = 0; i < 2; i++) { // Symmetry for sub-branches
        p5.push();
        p5.rotate(i * p5.PI / 5 + angle); // Rotate sub-branches with animation
        p5.line(0, 0, 0, -len); // Draw the branch
        p5.translate(0, -len);
        drawFlower(len * 0.6); // Recursive scaling for smaller branches
        p5.pop();
      }
    }
  };
};

const FractalFlower = () => (
  <div className="flex justify-center items-center" id="fractal-flower">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalFlower;
