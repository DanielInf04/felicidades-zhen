window.onload = () => {
    let times = 0;

    const interval = setInterval(() => {
        balloons();
        times++;

        if (times === 2) {
            clearInterval(interval);
        }
    }, 1000)

}

const screenStart = document.getElementById("screen-start");
const screenMain = document.getElementById("screen-main");

const btnAbrirSorpresa = document.getElementById("abrirSorpresa");

const cajaSorpresa = document.getElementById("cajaSorpresa");
const btnAbrirRegalo = document.getElementById("mostrarSorpresa");

btnAbrirSorpresa.addEventListener("click", () => {
    screenStart.classList.add("hidden");
    screenMain.classList.remove("hidden");
})

btnAbrirRegalo.addEventListener("click", () => {
    cajaSorpresa.classList.remove("hidden");
})