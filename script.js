// main definitions
const container = document.createElement("div")
const settings = document.createElement("div")
const clearButton = document.createElement("button")
const sliderBar = document.createElement("div")
const sliderBarText = document.createElement("p");

// settings container
settings.id = "settings"
document.body.appendChild(settings)

//clear button
settings.appendChild(clearButton)
clearButton.textContent = "Clear"
clearButton.style.padding = "10px"

// slider bar
settings.appendChild(sliderBar);
sliderBar.classList.add("slider-bar")
// add input to slider
const sliderBarInput = document.createElement("input")
sliderBarInput.type = "range"
sliderBarInput.min = 1
sliderBarInput.max = 20
sliderBarInput.defaultValue = 10
sliderBarInput.id = "slider-input"
sliderBar.appendChild(sliderBarInput)
sliderBar.appendChild(sliderBarText)

// update slider value
sliderBarInput.addEventListener("input", () =>{
    clearSketchPad()
    deleteGrid()
    createGrid(sliderBarInput.value)
})


// main container for grid
container.id = "container"
document.body.appendChild(container)


//container style
let containerWidth = 720;
let containerHeight = 720;
container.style.border = "1px solid grey"
container.style.width = containerWidth + "px"
container.style.height = containerHeight + "px"

// create grids
function createGrid(sliderValue){
    for(i=0; i<sliderValue**2;i++){
        container.appendChild(document.createElement("div"))
    }
}

function deleteGrid(){
    // gridBoxes.forEach(gridBox => {gridBox.remove()})}
    document.removeChild(container);
}
    
// init sketch
createGrid(sliderBarInput.value)


const gridBoxes = container.querySelectorAll("div");
console.log(gridBoxes)

// add style to gridbox
let boxWidth = Math.round(containerWidth/sliderBarInput.value)
let boxHeight = Math.round(containerHeight/sliderBarInput.value)
console.log("Slider default: " + sliderBarInput.value)

gridBoxes.forEach(
    gridBox => {
        gridBox.style.border = "0px solid black"
        gridBox.style.height = boxHeight + "px"
        gridBox.style.width = boxWidth + "px"
        gridBox.classList.add("grid-box")
    }
)

// mouseover to change color
gridBoxes.forEach(gridBox => {
    gridBox.addEventListener("mouseover", () => {
        let red = Math.round(Math.random()*155);
        let green = Math.round(Math.random()*155);
        let blue = Math.round(Math.random()*155);
        gridBox.style.backgroundColor = `rgb(${red},${green},${blue})`;
    })
})



// clear sketchpad with button
clearButton.addEventListener("click", clearSketchPad)

// clear function
function clearSketchPad(){
    gridBoxes.forEach(gridBox => {
        gridBox.style.background = "";
        console.log("clear function activated")
    })
}