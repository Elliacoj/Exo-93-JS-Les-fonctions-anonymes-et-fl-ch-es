let buttonA = document.getElementById("alert");
let buttonS = document.getElementById("somme");

buttonA.addEventListener("click", () => {alert("Hello world");});
buttonA.addEventListener("keypress", (event) => {
    if(event.key ==="enter") {
        alert("Hello world");
    }
});

buttonS.addEventListener("click", () => {
    let div = document.createElement("div");
    document.body.append(div);
    div.innerHTML = (5 + 6).toString();
})