
function displayRecipe(response) {
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generateRecipe(event) {
    event.preventDefault();
  
    let promptInput = document.querySelector("#user-prompt");
    let apiKey = "fa3f2cd24bo2f480851bd6ec4b0t2c4e";
    let context =
      "You are a AI food expert and love to write short recipes. Generate a recipe idea. Follow user instructions. Bold recipe name and show on one line. Start new line to display recipe 6 lines maximum. No rude content";
    let prompt = `User instructions: Generate a recipe based on a cuisine ${promptInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="incoming">⏳ Incoming... ${promptInput.value} recipe</div>`;
  
    axios.get(apiURL).then(displayRecipe);
  }
  
  let recipeFormElement = document.querySelector("#recipe-generator-form");
  recipeFormElement.addEventListener("submit", generateRecipe);