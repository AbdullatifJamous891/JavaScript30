## Lessons Learned
This will give you a basic line-drawing canvas!
```html
<canvas id="draw" width="800" height="800"></canvas>
<script>
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function draw(e) {
    if(!isDrawing) return; // Stops function here if true.
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
  }

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
  });
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
  </script>
  ```

  And that is kinda crazy. What is this ES6 nonsense?

### Other takeaways
`[varX, varY] = [numX, numY]` -> ES6 allows you to set multiple variables like this.

`if (!var) return;` will stop a function wherever the line is placed, as long as the conditional is met.

HSL is a color-picking guy that takes color as 0-360, saturation as 0-100% and shade as 0-100% and looks like: `hsl(25, 50%, 50%)`

Lots of funky stuff available for canvas. `globalCompositeOperation` has all kinds of fun overlay things.