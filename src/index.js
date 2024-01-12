function displayPoem(response) {
  new Typewriter(poemElement, {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();

  const keywordInput = document.querySelector("#keyword-input");
  const apiKey = "9a7ca83bt1f54ebc3o8f9d804f5e2b0e";
  const context =
    "You are a poetic and romantic AI assistant. Your job is to generate a four line poem, using HTML format. Make sure to seperate every line with a <br />, but do NOT add a <br /> at the end of the poem. Use proper grammar. Do not use italized or bold text.";
  let prompt = `Generate a poem about ${keywordInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  poemElement.classList.add("poem");
  poemElement.innerHTML = `<strong class="generating" >⏳ Generating a poem about ${keywordInput.value}</strong>`;
}

const poemFormElement = document.querySelector("form");
const poemElement = document.querySelector("#poem");

poemFormElement.addEventListener("submit", generatePoem);
