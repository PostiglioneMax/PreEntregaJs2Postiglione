const availableFoods = [
    { name: "Eggs", calories: 68, carbs: 2, proteins: 6, fats: 5 },
    { name: "Oats", calories: 117, carbs: 51, proteins: 13, fats: 5 },
    { name: "Banana", calories: 110, carbs: 28, proteins: 1, fats: 0 },
    { name: "Manzana", calories: 52, carbs: 9, proteins: 0, fats: 0 },

    // mas?
];

const foodList = document.querySelector(".food-list");
const totalCalories = document.getElementById("totalCalories");
const totalCarbs = document.getElementById("totalCarbs");
const totalProteins = document.getElementById("totalProteins");
const totalFats = document.getElementById("totalFats");

const foods = [];

function constructora(foodName, calories, carbs, proteins, fats) {
    this.name = foodName;
    this.calories = calories;
    this.carbs = carbs;
    this.proteins = proteins;
    this.fats = fats;
}

function addFood() {
    const foodSelect = document.getElementById("foodSelect");
    const foodName = foodSelect.value || document.getElementById("foodName").value;
    const calories = parseInt(document.getElementById("calories").value);
    const carbs = parseInt(document.getElementById("carbs").value);
    const proteins = parseInt(document.getElementById("proteins").value);
    const fats = parseInt(document.getElementById("fats").value);

    if (foodName && !isNaN(calories) && !isNaN(carbs) && !isNaN(proteins) && !isNaN(fats)) {
        const food = new constructora(foodName, calories, carbs, proteins, fats);
        foods.push(food);
        displayFood(food);
        updateTotals();
        document.getElementById("foodName").value = "";
        document.getElementById("calories").value = "";
        document.getElementById("carbs").value = "";
        document.getElementById("proteins").value = "";
        document.getElementById("fats").value = "";
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function addSelectedFood() {
    const foodSelect = document.getElementById("foodSelect");
    const selectedFoodName = foodSelect.value;
    if (selectedFoodName) {
        const selectedFood = availableFoods.find((food) => food.name === selectedFoodName);
        if (selectedFood) {
            foods.push(selectedFood);
            displayFood(selectedFood);
            updateTotals();
            document.getElementById("foodSelect").value = "";
        }
    }
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
