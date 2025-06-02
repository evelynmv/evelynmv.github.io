class Tacos {
  constructor(name, image, meat, toppings, tortillas, extras, price) {
    this.name = name;
    this.image = image;
    this.meat = meat;
    this.toppings = toppings;
    this.tortillas = tortillas;
    this.extras = extras;
    this.price = price;
  }

  getSection(index) {
    const section = document.createElement('div');
    section.className = 'taco-img';
    section.dataset.index = index;

    const img = document.createElement('img');
    img.src = `images/${this.image}`;
    img.alt = this.name;

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerText = this.name;

    section.appendChild(img);
    section.appendChild(overlay);

    section.addEventListener('click', () => {
      Tacos.showPopup(this);
    });

    return section;
  }

    static showPopup(taco) {
    document.getElementById('modalTitle').innerText = taco.name;
    document.getElementById('image').src = `images/${taco.image}`;
    document.getElementById('meat').innerText = taco.meat;
    document.getElementById('toppings').innerText = taco.toppings;
    document.getElementById('tortilla').innerText = taco.tortillas;
    document.getElementById('extra').innerText = taco.extras;
    document.getElementById('price').innerText = taco.price;

    document.getElementById('main').style.display = 'block';
    }
}

// Sample hotdogs
const tacos = [
  new Tacos("Al Pastor", "pastor.jpeg", "Marinated Pork",["Pineapple", " Chilli Peppers", " Coriander", " Onions"], ["Corn Tortillas", "Flour Tortillas"], "None", 14.85),
  new Tacos("Carne Asada", "carneasada .jpeg", "Grilled and sliced beef usually skirt steak, flap steak, or flank steak though chuck steak can also be used.", ["Coriander", " Onions",  "Lime"], ["Corn Tortillas", " Flour Tortillas"], "None", 14.50),
  new Tacos("Carnitas", "carnitas.jpeg", "Slow-cooked Pork", ["Coriander", " Onions", " Lime"], "Corn Tortillas", "None", 14.00),
  new Tacos("Quesabirria", "quesabirria.jpeg", "Birria-style cooked beef", ["Melted Cheese", " Coriander", " Onions", " Lime"], "Corn Tortillas", "A side of broth for dipping", 16.50)
];

const container = document.getElementById('show');
tacos.forEach((hd, index) => {
  container.appendChild(hd.getSection(index));
});

// Modal close logic
document.getElementById('closeBtn').onclick = () => {
  document.getElementById('main').style.display = 'none';
};
window.onclick = (event) => {
  if (event.target === document.getElementById('main')) {
    document.getElementById('main').style.display = 'none';
  }
};
