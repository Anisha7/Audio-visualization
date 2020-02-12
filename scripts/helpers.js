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
  const happy = f > (255 * 0.75)
  const meh = f > (255 / 2)

  // face
  c.beginPath();

  // angle = Math.random(2)

  c.arc(centerX, centerY, 100, 0, Math.PI * 2, true); // Outer circle
  c.fillStyle = `hsl(${(f / 255) * 360}, 85%, 55%)`;
  console.log(`hsl(${(f / 255) * 360}, 85%, 55%)`);
  // c.fillStyle = 'blue'
  c.fill();

  if (happy) {
    c.moveTo(centerX + 35, centerY);
    c.arc(centerX, centerY, 35, 0, Math.PI, false); // Mouth (clockwise)
  }
  else if (meh) {
    c.moveTo(centerX + 35, centerY + 35);
    c.lineTo(centerX - 35, centerY + 35);
  }
  else { // sad
    c.moveTo(centerX + 35, centerY + 35);
    c.arc(centerX, centerY + 35, 35, 0, Math.PI, true); // Mouth (clockwise)
  }
  c.moveTo(centerX - 25, centerY - 20);
  c.arc(centerX - 30, centerY - 20, 5, 0, Math.PI * 2, true); // Left eye

  c.moveTo(centerX + 35, centerY - 20);
  c.arc(centerX + 30, centerY - 20, 5, 0, Math.PI * 2, true); // Right eye

  c.stroke();
}

function drawCircles(c, i, f, fx) {
  const tot = Math.sqrt(fx);
  const diff = 300 / tot; // space between and radius
  const radius = diff / 2 - diff / 12;
  const offset = radius;
  const x = (i % 32) * diff + offset;
  const y = Math.floor(i / 32) * diff + offset;

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, true);
  c.fillStyle = `hsl(${(9 + f * 20) % 360}, 85%, 55%)`;
  c.fill();
  c.stroke();
}
