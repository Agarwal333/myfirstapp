const openf = document.getElementById("openf");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

openf.addEventListener("click", () => {
    modal_container.classList.add("show");
});

close.addEventListener("click", () => {
    modal_container.classList.remove("show");
});



const opens = document.getElementById("opens");
const modal_containers = document.getElementById("modal_containers");
const closes = document.getElementById("closes");

opens.addEventListener("click", () => {
    modal_containers.classList.add("show");
});

closes.addEventListener("click", () => {
    modal_containers.classList.remove("show");
});


const opent = document.getElementById("opent");
const modal_containert = document.getElementById("modal_containert");
const closet = document.getElementById("closet");

opent.addEventListener("click", () => {
    modal_containert.classList.add("show");
});

closet.addEventListener("click", () => {
    modal_containert.classList.remove("show");
});


