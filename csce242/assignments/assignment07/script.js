document.getElementById("ice").onclick = () => {
    document.getElementById("repeat").innerHTML += "Ice Cream! <br>"
}

document.getElementById("slider").oninput = () =>{
    const value = document.getElementById("slider").value;

    document.getElementById("many").textContent = 
    `I want ${value} ice cream${value > 1 ? 's' : ''}!`;
}
document.getElementById("btn-change").onclick = () => {
    const change = document.getElementById("imgchange");

    change.src="images/icecream.jpg";
    change.classList.remove('hidden');
}