
function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generatePoem(event) {
    event.preventDefault();
  
    let promptInput = document.querySelector("#user-prompt");
    let apiKey = "fa3f2cd24bo2f480851bd6ec4b0t2c4e";
    let context =
      "You are a AI poem expert and love to write short poems. Generate a 3 line and seperate each line with a poem. Follow user instructions. No title, no rude content";
    let prompt = `User instructions: Generate a poem about ${promptInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Incoming... poem loading about ${promptInput.value}</div>`;
  
    axios.get(apiURL).then(displayPoem);
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);