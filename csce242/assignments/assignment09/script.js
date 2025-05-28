document.getElementById("drawBtn").onclick = () =>{
    const container = document.getElementById("container");
    container.innerHTML = "";


    //makes the townhouses
    for(let i =0; i < 6; i++) {
        const house = document.createElement("div");
        house.className = "townhouse";
        container.appendChild(house);
    }

    const stickmanDiv = document.createElement("div");
    stickmanDiv.id = "stickman";

    const stretchImg = document.createElement("img");
    stretchImg.src = "images/ex1.png"; // initial image
    stretchImg.id = "stretchImg";

    const exerciseBtn = document.createElement("button");
    exerciseBtn.id = "exerciseBtn";
    exerciseBtn.textContent = "Exercise";

    stickmanDiv.appendChild(stretchImg);
    stickmanDiv.appendChild(exerciseBtn);
    container.appendChild(stickmanDiv);

    // Exercise button functionality
    document.getElementById("exerciseBtn").onclick = () => {
        const stretches = [
        "images/ex1.pngg",
        "images/ex2.png",
        "images/ex3.png",
        "images/ex4.png",
        "images/ex5.png",
        "images/ex6.png"
        ];

    let index = 0;
    const interval = setInterval(() => {
        index++;
        if (index >= stretches.length) {
            clearInterval(interval);
        } else {
            document.getElementById("stretchImg").src = stretches[index];
        }
        }, 1000); // Change every 1 second
    };
}


