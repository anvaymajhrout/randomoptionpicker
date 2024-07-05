const optionsList = document.getElementById('options-list');
const newOptionInput = document.getElementById('new-option');
const addOptionButton = document.getElementById('add-option');
const pickButton = document.getElementById('pick');
const resetButton = document.getElementById('reset');
const resultParagraph = document.getElementById('result');

let options = [];

addOptionButton.addEventListener('click', addOption);
newOptionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addOption();
    }
});

pickButton.addEventListener('click', pickOption);
resetButton.addEventListener('click', resetOptions);

function addOption() {
    const newOption = newOptionInput.value.trim();
    if (newOption) {
        options.push(newOption);
        newOptionInput.value = '';
        renderOptionsList();
    }
}

function pickOption() {
    if (options.length > 0) {
        const randomIndex = Math.floor(Math.random() * options.length);
        const pickedOption = options[randomIndex];
        resultParagraph.textContent = `The picked option is: ${pickedOption}`;
    } else {
        resultParagraph.textContent = 'No options available!';
    }
}

function resetOptions() {
    options = [];
    newOptionInput.value = '';
    optionsList.innerHTML = '';
    resultParagraph.textContent = '';
}

function renderOptionsList() {
    optionsList.innerHTML = '';
    options.forEach((option, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = option;
        optionsList.appendChild(listItem);
    });
}