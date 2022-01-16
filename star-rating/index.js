{
  /* <i class="far fa-star"></i>
<i class="fas fa-star"></i> */
}
let rating = 0;
const container = document.querySelector(".container");
const text = document.querySelector(".text");

function initialiseRating(count) {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= count; i++) {
    const icon = document.createElement("i");
    icon.dataset.val = i;
    icon.classList.add("far", "fa-star", "highlight");
    fragment.appendChild(icon);
  }
  container.appendChild(fragment);
  container.addEventListener("click", clickHandler);
  container.addEventListener("mouseover", hoverHandler);
  container.addEventListener("mouseleave", leaveHandler);
}

function hoverHandler(e) {
  const count = e.target.dataset.val;
  fill(count??rating);
}
function leaveHandler(e) {
  fill(rating);
}
function clickHandler(e) {
  const count = e.target.dataset.val;
  rating = count;
  fill(count);
  updateText(rating)
}
function fill(count) {
  for (let i = 0; i < container.children.length; i++) {
    if (i < count) {
      container.children[i].classList.remove("far");
      container.children[i].classList.add("fas");
    } else {
      container.children[i].classList.remove("fas");
      container.children[i].classList.add("far");
    }
  }
}
function updateText(val){
    text.innerText = "You have voted "+val+"!"
}
initialiseRating(5);
