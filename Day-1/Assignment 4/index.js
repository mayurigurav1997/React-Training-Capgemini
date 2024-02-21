function showName() {
    // console.log(id)
    // var buttonName =  document.getElementById(id).innerHTML;
    // document.getElementById("output").innerHTML = buttonName;
    const buttons = document.querySelectorAll("button");
    console.log(buttons)
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            console.log(event.target.textContent)
            output.textContent =  event.target.textContent;
        });
    });
}
function num(){
    
}