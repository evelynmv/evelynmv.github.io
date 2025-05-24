document.getElementById("btn-color-mood") = (event) => {
    const color = document.getElementById("txt-color").value;
    const colorP = document.getElementById("color-mood");

      if(color == "red"){
        colorP.innerHTML = "You are feeling angry";
    } else if(color == "blue") {
        colorP.innerHTML = "You are feeling sad";
    } else {
        colorP.innerHTML = "You don't have feelings";
    }

}