// Visual 1 canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function render() {
  ctx.clearRect(0, 0, 300, 300);

  const centerX = 300 / 2;
  const centerY = 300 / 2;
  const radius = 300 / 5;

  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);

  const bars = 200;
  const step = (Math.PI * 2) / bars;

  analyser.getByteFrequencyData(frequencyArray);

  frequencyArray.forEach((f, i) => {
    ctx.beginPath();
    // console.log(f)
    // ctx.strokeStyle = `hsl(${(328 + i) % 360}, 76%, ${86 - (i * 0.1)}%)`
    ctx.strokeStyle = `hsl(${(9 + f) % 360}, 85%, 55%)`;
    const barLength = frequencyArray[i] * 0.5;
    const y2 = Math.cos(step * i) * radius + centerX;
    const y1 = Math.sin(step * i) * radius + centerY;
    const x1 = Math.cos(step * i) * (radius + barLength) + centerX;
    const x2 = Math.sin(step * i) * (radius + barLength) + centerY;

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  });

  ctx.stroke();

  requestAnimationFrame(render);
}
