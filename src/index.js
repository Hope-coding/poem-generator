function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#poem', {
        strings: "A poem will go here...",
        autoStart: true,
        delay: 5,
        cursor: ""
      });
    }

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);