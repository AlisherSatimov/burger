let burger = document.querySelector("#burger");
let costBurger = document.querySelector(".cost");
let checkBurger = document.querySelector(".check");
let resetOrder = document.querySelector(".reset");
let removeItem = document.querySelector(".ingrediant");

let ingredientsImg = document.querySelector(".ingrediants-img");

let cheeseBtn = document.querySelector(".cheese");
let meatBtn = document.querySelector(".meat");
let onionBtn = document.querySelector(".onion");
let pickleBtn = document.querySelector(".pickle");
let saladBtn = document.querySelector(".salad");
let tomatoBtn = document.querySelector(".tomato");

let cost = 2;
let checkNumber = 10;

cheeseBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML +=
        '<img src="burger-layers/cheese.png" class="ingrediant">';
    cost += 2;
    costBurger.innerHTML = cost;
});

meatBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML +=
        '<img src="burger-layers/meat.png" class="ingrediant">';
    cost += 5;
    costBurger.innerHTML = cost;
});

onionBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML +=
        '<img src="burger-layers/onion.png" class="ingrediant">';
    cost += 1;
    costBurger.innerHTML = cost;
});

pickleBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML +=
        '<img src="burger-layers/pickle.png" class="ingrediant">';
    cost += 3;
    costBurger.innerHTML = cost;
});

saladBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML +=
        '<img src="burger-layers/salad.png" class="ingrediant">';
    cost += 1;
    costBurger.innerHTML = cost;
});

tomatoBtn.addEventListener("click", (e) => {
    ingredientsImg.innerHTML +=
        '<img src="burger-layers/tomato.png" class="ingrediant">';
    cost += 2;
    costBurger.innerHTML = cost;
});

checkBurger.addEventListener("click", (e) => {
    checkNumber += 1;
    alert(
        "Buyurtmangizning narxi jami $" +
            cost +
            " bo'ldi. \n" +
            "Sizning navbar raqamingiz: " +
            checkNumber +
            "\nYoqimli Ishtaxa"
    );
    ingredientsImg.innerHTML = "";
    cost = 1;
    costBurger.innerHTML = cost;
});

resetOrder.addEventListener("click", (e) => {
    ingredientsImg.innerHTML = "";
    cost = 1;
    costBurger.innerHTML = cost;
});

removeItem.addEventListener("dblclick", (e) => {
    removeItem.classList.add("dn");
    cost -= 2;
    costBurger.innerHTML = cost;
});
