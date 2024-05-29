const outputElement = document.getElementById("output");
const inputElement = document.getElementById("dogAge");

const convertToNum = () => {
    const dogAge = Number(document.getElementById("dogAge").value);
    return dogAge;
};

const clearAll = () => {
    outputElement.innerHTML = "";
    inputElement.value = "";
};

const clearOutput = () => {
    outputElement.innerHTML = "";
};

const dogAgeToHumanAge = () => {
    const dogAge = convertToNum();

    clearOutput();

    if (isNaN(dogAge) || dogAge <= 0) {
        outputElement.innerHTML +=
        "<p>" + "Please enter a valid dog age." + "</p>"; 
    } else {
        const humanAge = (16 * Math.log(dogAge)) + 31;
        outputElement.innerHTML +=
        "<p>" + humanAge.toFixed(2) + "</p>";
        console.log(humanAge);
    }
};