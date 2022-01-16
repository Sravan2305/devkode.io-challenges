const imageCount = 5
let ind = 1

const carousel = document.querySelector(".carousel")
const left = document.querySelector(".left")
const right = document.querySelector(".right")

function fillImage(){
    const img = document.createElement("img")
    img.src = `assets/img${ind}.jpg`
    img.classList.add("image")
    return img
}
carousel.appendChild(fillImage())

left.addEventListener("click",()=>{
const img = carousel.querySelector("img")
ind = ind>1?ind-1:5
img.src = `assets/img${ind}.jpg`

})
console.log(right)
right.addEventListener("click",()=>{
    const img = carousel.querySelector("img")
    ind = ind<5?ind+1:1
    img.src = `assets/img${ind}.jpg`
    })
