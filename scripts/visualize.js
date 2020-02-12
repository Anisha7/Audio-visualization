// Visual 1 canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// Visual 2 canvas setup
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
// Visual 3 canvas setup
const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

// Visual 4 canvas setup
const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");

function render() {
  ctx.clearRect(0, 0, 300, 300);
  ctx2.clearRect(0, 0, 300, 300);
  ctx3.clearRect(0, 0, 300, 300);
  ctx4.clearRect(0, 0, 300, 300);

  analyser.getByteFrequencyData(frequencyArray);

  frequencyArray.forEach((f, i) => {
    drawSun(
      ctx,
      f,
      i,
      frequencyArray[i],
      (Math.PI * 2) / 200,
      300 / 2,
      300 / 2,
      300 / 5
    );
    drawBars(ctx2, f, i, frequencyArray[i], 300 / 200);
    drawFace(ctx3, f, 150/2, 150/2)
    drawCircles(ctx4, i, f, frequencyArray.length)
  });

  ctx.stroke();
  ctx2.stroke();
  ctx3.stroke();
  ctx4.stroke()

  requestAnimationFrame(render);
}
