function generatePoem(event) {
  event.preventDefault();
  poemElement.classList.add("poem");
  new Typewriter(poemElement, {
    strings: "Loveliest of trees, the cherry now",
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

const poemFormElement = document.querySelector("form");
const poemElement = document.querySelector("#poem");

poemFormElement.addEventListener("submit", generatePoem);
