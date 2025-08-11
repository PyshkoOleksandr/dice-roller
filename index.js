document.addEventListener("DOMContentLoaded", main);

function main() {
    const rollButton = document.getElementById("roll-button");
    rollButton.onclick = onRoll;
}

function onRoll() {
    console.log("Roll");
    const numberInput = document.getElementById("number-input");
    const diceContainer = document.getElementById("dices-container");

    const diceNumber = Number(numberInput.value);
    diceContainer.innerHTML = "";

    for (let i = 0; i < diceNumber; ++i) {
        const side = getRandomSide();
        const img = document.createElement("img");
        const widthPercent = 100 / Math.min(diceNumber, 3);

        img.src = `resources/dice-${side}.png`;
        img.alt = `dice-${side}`;
        img.style.width = `${widthPercent}%`;
        diceContainer.appendChild(img);
    }
}

function getRandomSide() {
    return Math.floor(Math.random() * 6) + 1;
}
