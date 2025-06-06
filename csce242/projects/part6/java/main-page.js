const imageData = [
    { link: "her.html", title: "Accessories", img: "images/Main/Tiara.png" },
    { link: "her.html", title: "Beauty", img: "images/Main/Makeup.png" },
    { link: "decor.html", title: "Church Decor", img: "images/Main/Church.png" },
    { link: "court.html", title: "Dama Dress", img: "images/Main/Dama.png" },
    { link: "court.html", title: "Entertainment", img: "images/Main/Enter.png" },
    { link: "her.html", title: "Flower", img: "images/Main/Flower.png" },
    { link: "decor.html", title: "Food", img: "images/Main/Food.png" },
    { link: "decor.html", title: "Party Decor", img: "images/Main/Decor.png" },
    { link: "transportation.html", title: "Transportation", img: "images/Main/Limo.png" },
    { link: "court.html", title: "Tuxedo", img: "images/Main/Tux.png" },
    { link: "location.html", title: "Venue", img: "images/Main/Venue.png" },
    { link: "her.html", title: "Quince Dress", img: "images/Main/dress.png" }
  ];

  const container = document.getElementById("out");

  for (let i = 0; i < imageData.length; i += 4) {
    const tableDiv = document.createElement("div");
    tableDiv.className = "table";

    imageData.slice(i, i + 4).forEach(item => {
      const wrapper = document.createElement("div");
      wrapper.className = "img-wrapper";

      wrapper.innerHTML = `
        <a href="${item.link}">
          <img src="${item.img}" alt="${item.title}">
          <div class="overlay">${item.title}</div>
        </a>
      `;

      tableDiv.appendChild(wrapper);
    });

    container.appendChild(tableDiv);
  }