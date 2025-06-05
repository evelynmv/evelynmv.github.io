/* ---------- 1. fetch the JSON ---------- */
const getVenues = async () => {
  const url = 'https://evelynmv.github.io/csce242/projects/part6/json/location.json';            // update if the file lives elsewhere
  
  try {
        const response = await fetch(url);
        return response.json();
    }catch(error){
        console.log(error);
    }
}; 

/* ---------- 2. build & inject markup --- */
const showVenues = async () => {
  const venues = await getVenues();
  const wrap   = document.getElementById('venues');

  venues.forEach(v => {
    // outer wrapper
    const section = document.createElement('div');
    section.classList.add('section');

    // image column
    const show = document.createElement('div');
    show.classList.add('show');
    const img  = document.createElement('img');
    img.src = v.image;
    img.alt = `Venue ${v.id}`;
    show.append(img);

    // info column
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

    // assemble
    section.append(show, info);
    wrap.append(section);
  });
};

showVenues();           // kick it off