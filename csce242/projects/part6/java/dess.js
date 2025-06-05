const getDresses = async () => {
  const url = "https://evelynmv.github.io/csce242/projects/part5/json/dress.json";
  try {
    const response = await fetch(url);
    console.log(response); // <-- helpful
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
};

// ---------- 2. build & inject the HTML ----------
const showDresses = async () => {
  const dresses = await getDresses();
  const dressesDiv = document.getElementById("dresses");

  dresses.forEach(dress => {
    // outer wrapper ---------------------------------------------------------
    const section = document.createElement("div");
    section.classList.add("section");

    // left column (image) ----------------------------------------------------
    const showDiv = document.createElement("div");
    showDiv.classList.add("show");
    const img = document.createElement("img");
    img.src  = dress.image;
    img.alt  = `Dress ${dress.id}`;
    showDiv.append(img);

    // right column (info) ----------------------------------------------------
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const h3 = document.createElement("h3");
    h3.innerHTML = `<strong>Dress ID:</strong> ${dress.id}`;
    infoDiv.append(h3);

    const pDesc = document.createElement("p");
    pDesc.textContent = dress.description;
    infoDiv.append(pDesc);

    const pPrice = document.createElement("p");
    pPrice.textContent = dress.price;
    infoDiv.append(pPrice);

    // assemble & drop into the DOM ------------------------------------------
    section.append(showDiv, infoDiv);
    dressesDiv.append(section);
  });
};

showDresses(); 