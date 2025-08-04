import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        "numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  function createAnimal(animal) {
    const divAnimal = document.createElement("div");
    divAnimal.classList.add("numero-animal");
    divAnimal.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span> `;
    return divAnimal;
  }
  fetchAnimais("./animaisapi.json");
}
