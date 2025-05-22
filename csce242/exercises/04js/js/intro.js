/* When button clicked to a paragraph */

/* example 2 most used */
document.getElementById("btn-write").onclick = (event) =>{
    document.getElementById("writep").innerHTML = "You clicked the button";

    /* change the button text to say done */
    event.target.innerHTML = "Done!";

};




document.getElementById("btn-st").onclick = (event)=>{
    document.getElementById("stenp").innerHTML = "Starting...";

    event.target.innerHTML = "Started";
}

document.getElementById("btn-en").onclick = (event) => {
    document.getElementById("stenp").innerHTML = "Ended";

    event.target.innerHTML += "Ended";
}



document.getElementById("txt-name").onkeyup = (event) => {
    const userName = event.target.value;
     document.getElementById("welcomep").innerHTML = `Welcome ${userName}!`;

     /* Dont do this way anymore
    document.getElementById("welcomep").innerHTML = "Welcome " + userName + "!";
    */
    /*
    console.log("Hello World");
    */
}

/* Example to Change the innnerHTML
/* example 2 most used 
document.getElementById("btn-write").onclick = () =>{
    document.getElementById("writep").innerHTML = "You clicked the button";

    /* change the button text to say done 
    document.getElementById("btn-write").innerHTML = "Done!";
};

*/




/* 
Example 1

const writeParagraph =() =>{
    console.log("Hello Everyon!");
};
document.getElementById("btn-write").onclick=writeParagraph;
 */

/*
document.getElementById("btn-write").onclick = writeParagraph();
() means that it will be called even with out being clicked 
 */



