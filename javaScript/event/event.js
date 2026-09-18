let button = document.getElementById("btn");

button.addEventListener("click", () =>
     {
    document.querySelector(".box").innerHTML = "<b> you were clicked ! enjoy your time"
});

document.querySelector(".child").addEventListener("click", (e) => 
{
    e.stopPropagation(); // prevent from event bubbling
    alert("child was clicked")

})

document.querySelector(".childcontain").addEventListener("click", (e) => 
{
    alert("childcontain was clicked")

})
document.querySelector(".contain").addEventListener("click", (e) => 
{
    alert("contain was clicked")

})

function getRandomColor() {
    let val1 = Math.floor(Math.random() * 255);
    let val2 = Math.floor(Math.random() * 255);
    let val3 = Math.floor(Math.random() * 255);
return `rgb(${val1}, ${val2}, ${val3})`
}
let childcontain = document.querySelector(".childcontain");

setInterval(() =>  {
    childcontain.style.background = getRandomColor();
}, 1000)
