// Visual 2 canvas setup
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

function render2() {
  ctx2.clearRect(0, 0, 300, 300);
  analyser.getByteFrequencyData(frequencyArray);

  const bars = 200;
  const step = 300 / bars;

  frequencyArray.forEach((f, i) => {
    ctx2.beginPath();
    ctx2.strokeStyle = `hsl(${(9 + f) % 360}, 85%, 55%)`;
    const barLength = (frequencyArray[i] / 255) * 300;

    const x = step * i + 2;
    const y = barLength;

    ctx2.moveTo(x, 0);
    ctx2.lineTo(x, y);
    ctx2.stroke();
  });
  requestAnimationFrame(render2);
}
