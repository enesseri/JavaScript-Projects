const container = document.querySelector(".container");
const color = [
  "#6eff40",
  "#1345aa",
  "#ffe505",
  "#fd0e35",
];

//Div Creation

createBox(527);

function createBox(count) {
    for (let i = 0; i < count; i++) {
        let boxEl = document.createElement("div");
        boxEl.classList.add("box");
        container.appendChild(boxEl);
    }
}

const boxes = document.querySelectorAll(".box");

//Effect

boxes.forEach((box) => {
    box.addEventListener("mouseover", function () {
      let randomId = Math.floor(Math.random() * color.length);
  
      box.style.backgroundColor = `${color[randomId]}`;
    });
    box.addEventListener("mouseout", function () {
      setTimeout(function () {
        box.style.backgroundColor = "#444";
      }, 400);
    });
  });