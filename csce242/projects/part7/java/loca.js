https://evelynmv.github.io/csce242/projects/part6/json/location.json

const getVenues = async () => {
  const url = 'https://evelynmv.github.io/csce242/projects/part6/json/location.json';

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched venues:", data); 
    return data;

  } catch (error) {
    console.error("Fetch error:", error); 
  }
};

const showVenues = async () => {
  const venues = await getVenues();

  const wrap = document.getElementById('venues'); 

  venues.forEach(v => {
    const section = document.createElement('div');
    section.classList.add('section');

    const show = document.createElement('div');
    show.classList.add('show');
    const img = document.createElement('img');
    img.src = v.image;
    img.alt = `Venue ${v.id}`;
    show.append(img);

    const info = document.createElement('div');
    info.classList.add('info');

    const h3 = document.createElement('h3');
    h3.innerHTML = `<strong>Venue ID:</strong> ${v.id}`;
    info.append(h3);

    const pDesc = document.createElement('p');
    pDesc.textContent = v.description;
    info.append(pDesc);

    const pPrice = document.createElement('p');
    pPrice.textContent = v.price;
    info.append(pPrice);

    section.append(show, info);
    wrap.append(section); // ❗️ If `wrap` is null, this will crash
  });
};

showVenues(); // ✅ START FUNCTION