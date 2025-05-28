document.getElementById("arrow").onclick = () => {
    document.querySelector("#nav ul").classList.toggle("list");
}



document.getElementById("ex1").onclick = () => {
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "none";
}

document.getElementById("ex2").onclick = () => {
    document.getElementById("two").style.display = "block";
    document.getElementById("one").style.display = "none";
}



const bike = document.getElementById("bike");
const slider = document.getElementById("slider");
const box = document.getElementById("image");

let animationFrame;
    let position = 0;
    let speed = parseInt(slider.value);
    let running = false;

function animate() {
      if (!running) return;
      speed = parseInt(slider.value);
      position += speed;

      if (position > box.clientWidth) {
        position = -bike.clientWidth; 
      }

      bike.style.left = position + 'px';
      animationFrame = requestAnimationFrame(animate);
    }

document.getElementById("start").onclick = () => {
    if (!running) {
    running = true;
    animate();
    }
}

document.getElementById("stop").onclick = () => {
    running = false;
    cancelAnimationFrame(animationFrame);
}







const moonBtn = document.getElementById('moon-btn');
    const starBtn = document.getElementById('star-btn');
    const cloudBtn = document.getElementById('cloud-btn');

    moonBtn.onclick = () => draw('moon');
    starBtn.onclick = () => draw('star');
    cloudBtn.onclick = () => draw('cloud');

    function draw(shape) {
      const display = document.getElementById('show');
      display.innerHTML = ''; // Clear previous
      const div = document.createElement('div');

      if (shape === 'moon') {
        div.className = 'shape moon';
      } else if (shape === 'star') {
        div.className = 'shape star';
      } else if (shape === 'cloud') {
        div.className = 'shape cloud';
      }

      display.appendChild(div);
    }