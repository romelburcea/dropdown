const container = document.querySelector(".container")

container.style.visibility = "hidden"


const stuff = document.querySelector(".stuff")

stuff.addEventListener("click", () => {
    if(container.style.visibility === "hidden"){
        container.style.visibility = "visible"
        container.classList.add("visible")
    } else {
        container.style.visibility = "hidden"
        container.classList.remove("visible")
    }
})