// we have to make seperate js file for each html file to avoid errors !


document.getElementById("startgamebtn").addEventListener("click", function(){
    const name1 = document.getElementById("input_box1").value.trim(); // .trim() removes blanks so the user doesn't just INPUT BLANKS
    const name2 = document.getElementById("input_box2").value.trim();

    let valid = true;

    document.getElementById("input_text1").textContent = "";
    document.getElementById("input_text2").textContent = "";

    if(name1 === ""){
        document.getElementById("input_text1").textContent = "Please enter a name before starting the game";
        valid = false;
    }
  
    if(name2 === ""){
        document.getElementById("input_text2").textContent = "Please enter a name before starting the game";
        valid = false;
    }
    if(valid){
        localStorage.setItem('player1', name1); // player1 is a string key, this means store whatever is in name1 inside player1
        localStorage.setItem('player2', name2)
        window.location.href = "guess2.html";
    }
});




