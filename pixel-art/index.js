const container = document.querySelector(".container")
const color = document.querySelector(".color")
let isMouseActive = false
console.log(container.clientWidth , container.clientHeight)

function initializeGrid(){
    const width = container.clientWidth
    const height = container.clientHeight
    const Frag = document.createDocumentFragment()
    for( let i=0; i< Math.floor((width*height)/225); i++ ){
        const pixel = document.createElement("div")
        pixel.dataset.pixelId = i
        pixel.classList.add("pixel",`pixel-${i}`)
        Frag.appendChild(pixel)
    } 
    container.appendChild(Frag)
    container.addEventListener("mousedown",mouseDownHandler)
    container.addEventListener("mouseover",mouseOverHandler)
    container.addEventListener("mouseup",mouseUpHandler)

}

function mouseDownHandler(e){
    e.preventDefault()
 isMouseActive = true
 fillColor(e)
}
function mouseOverHandler(e){
    e.preventDefault()
    if(!isMouseActive) return
    fillColor(e)
   }
function mouseUpHandler(e){
    e.preventDefault()
    isMouseActive = false
    fillColor(e)
   }
function fillColor(e){
    const pixelId = e.target.dataset.pixelId
    const pixel = document.querySelector(`.pixel-${pixelId}`)
    pixel.style.background = color.value
}
initializeGrid()