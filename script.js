function changeBgColor() {
   document.body.style.backgroundColor = 'blue'; 
   alert("whyyyy");
}

function visibilityGoalList() {
    let x = document.getElementById("breakdown");
    
    if (x.style.display === "block") {
        x.style.display = "none";
    } else { 
        x.style.display = "block";
    }
    }
    visibilityGoalList();
