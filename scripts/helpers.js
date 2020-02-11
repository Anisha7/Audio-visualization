
function drawSun(c, f, i, item, step, centerX, centerY, radius) {
    c.beginPath();
    
    c.strokeStyle = `hsl(${(9 + f) % 360}, 85%, 55%)`;
    const barLength = item * 0.5;
    const y2 = Math.cos(step * i) * radius + centerX;
    const y1 = Math.sin(step * i) * radius + centerY;
    const x1 = Math.cos(step * i) * (radius + barLength) + centerX;
    const x2 = Math.sin(step * i) * (radius + barLength) + centerY;

    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.stroke();
}

function drawBars(c, f, i, item, step) {
    c.beginPath();
    c.strokeStyle = `hsl(${(9 + f) % 360}, 85%, 55%)`;
    const barLength = (item / 255) * 300;

    const x = step * i + 2;
    const y = barLength;

    c.moveTo(x, 0);
    c.lineTo(x, y);
    c.stroke();
}

// context.arc(x,y,r,sAngle,eAngle,counterclockwise);
function drawFace(c, f, centerX, centerY) {
    // face
    c.beginPath();
  
    angle = Math.random(2)
  
    c.arc(centerX + 75, centerY + 75, 50, 0, Math.PI * 2, true); // Outer circle
    c.fillStyle = `hsl(${(9 + f * 20) % 360}, 85%, 55%)`;
    c.fill();
  
    c.moveTo(centerX + 110, centerY + 75);
    c.arc(centerX + 75, centerY + 75, 35, 0, Math.PI * angle, false); // Mouth (clockwise)
    c.moveTo(centerX + 65, centerY + 65);
    c.arc(centerX + 60, centerY + 65, 5, 0, Math.PI * 2, true); // Left eye
    c.moveTo(centerX + 95, centerY + 65);
    c.arc(centerX + 90, centerY + 65, 5, 0, Math.PI * 2, true); // Right eye
    c.stroke();
  }