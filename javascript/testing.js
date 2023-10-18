const availableFoods = [
    { name: "Manzana", calories: 52, carbs: 9, proteins: 0, fats: 0 },
    { name: "Huevo", calories: 68, carbs: 0, proteins: 6, fats: 5 },
    // mas?
];

const listaAlimentos = document.getElementById("alimentos-list");

availableFoods.forEach((food, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${food.name} - <button onclick="addFood()">Agregar</button>`;
    listaAlimentos.appendChild(li);
});

const foodList = document.querySelector(".food-list");
const totalCalories = document.getElementById("totalCalories");
const totalCarbs = document.getElementById("totalCarbs");
const totalProteins = document.getElementById("totalProteins");
const totalFats = document.getElementById("totalFats");

const foods = [];

function addFood() {
    const foodName = document.getElementById("foodName").value;
    const calories = parseInt(document.getElementById("calories").value);
    const carbs = parseInt(document.getElementById("carbs").value);
    const proteins = parseInt(document.getElementById("proteins").value);
    const fats = parseInt(document.getElementById("fats").value);

    const food = {
        name: foodName,
        calories: calories,
        carbs: carbs,
        proteins: proteins,
        fats: fats,
    };

    foods.push(food);
    displayFood(food);
    updateTotals();
}

function displayFood(food) {
    const foodItem = document.createElement("div");
    foodItem.innerHTML = `${food.name} - ${food.calories} cal`;
    foodList.appendChild(foodItem);
}

function updateTotals() {
    let totalCal = 0,
        totalC = 0,
        totalP = 0,
        totalF = 0;

    for (const food of foods) {
        totalCal += food.calories;
        totalC += food.carbs;
        totalP += food.proteins;
        totalF += food.fats;
    }

    totalCalories.textContent = totalCal;
    totalCarbs.textContent = totalC;
    totalProteins.textContent = totalP;
    totalFats.textContent = totalF;
}
