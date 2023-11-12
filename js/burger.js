let burger = document.querySelector("#burger");
let cheese = document.createElement("img");
cheese.setAttribute("src", "/burger-layers/cheese.png");
let meat = document.createElement("img");
meat.setAttribute("src", "/burger-layers/meat.png");
let onion = document.createElement("img");
onion.setAttribute("src", "/burger-layers/onion.png");
let pickle = document.createElement("img");
pickle.setAttribute("src", "/burger-layers/pickle.png");
let salad = document.createElement("img");
salad.setAttribute("src", "/burger-layers/salad.png");
let tomato = document.createElement("img");
tomato.setAttribute("src", "/burger-layers/tomato.png");

let ingredientsImg = document.querySelector(".ingredients-img");

let cheeseBtn = document.querySelector(".cheese");
let meatBtn = document.querySelector(".meat");
let onionBtn = document.querySelector(".onion");
let pickleBtn = document.querySelector(".pickle");
let saladBtn = document.querySelector(".salad");
let tomatoBtn = document.querySelector(".tomato");

let ingrePosition = 1;

cheeseBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML += '<img src="burger-layers/cheese.png">';
});

meatBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML += '<img src="burger-layers/meat.png">';
});

onionBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML += '<img src="burger-layers/onion.png">';
});

pickleBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML += '<img src="burger-layers/pickle.png">';
});

saladBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML += '<img src="burger-layers/salad.png">';
});

tomatoBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML += '<img src="burger-layers/tomato.png">';
});
