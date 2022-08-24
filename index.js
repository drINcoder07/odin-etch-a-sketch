let inputSquare = document.getElementById('squaresPerSide');
let colorOutput = document.getElementById('color');
let resetAll = document.getElementById('clear');
const inputContainer = document.querySelector('.inputValue');
let result = document.createElement('div');
let resultColor = document.createElement('div');
inputContainer.append(result, resultColor);
TODO
// create grids as connected to inputSquare value
// define random button, eraser button

// FUNCTIONS
TODO
// create random function for random color pick


// EVENT LISTENERS
TODO
// attach event listener to random button for choosing colors for grids
// or attach event listener to grid if random button is clicked to randomly choose color
// attach event listener to eraser button

inputSquare.addEventListener('change', (e) => {
  result.textContent = e.target.value;
  console.log(e.target.value);
})

colorOutput.addEventListener('change', (e) => {
  resultColor.textContent = e.target.value;
  console.log(e.target.value)
})



