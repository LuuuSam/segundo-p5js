function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255);
  
    // Líneas verticales.
    stroke(0);
    strokeWeight(10);
    line(100, 0, 100, height);
    line(200, 0, 200, height);
    line(300, 0, 300, height);
  
    // Líneas horizontales
    line(0, 100, width, 100);
    line(0, 200, width, 200);
    line(0, 300, width, 300);
  
    // Rellenar rectángulos
    noStroke();
    fill(255);
    rect(0, 0, 100, 100);
    rect(200, 0, 200, 100);
    rect(0, 200, 100, 200);
  
  
    
    
    
    
  }
  