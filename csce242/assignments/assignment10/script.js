//array
const images = {
   "It's Birthday": "images/birthday.jpg",
    "It's a Clown": "images/clown.jpg",
    "It's Raining": "images/rain.jpg",
    "It's Reading": "images/read.jpg",
    "It's Shoveling": "images/shovel.jpg",
    "It's Coding": "images/work.jpg"
};

const gallery = document.getElementById('pics');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('images');
const popupTitle = document.getElementById('title');
const closeBtn = document.getElementById('close');

//images load
   window.onload = () => {
      for (const [title, src] of Object.entries(images)) {
        const box = document.createElement('div');
        box.className = 'box';

        const img = document.createElement('img');
        img.src = src;
        img.alt = title;

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.textContent = title;

        box.appendChild(img);
        box.appendChild(overlay);

        box.addEventListener('click', () => {
          popupImage.src = src;
          popupTitle.textContent = title;
          popup.style.display = 'flex';
        });

        gallery.appendChild(box);
      }
    };

    // Close popup
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    // Close if user clicks outside popup content
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });