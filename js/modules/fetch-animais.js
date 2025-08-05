import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);
  //cria a div contando info com o total de animais
  function createAnimal(animal) {
    const divAnimal = document.createElement("div");
    divAnimal.classList.add("numero-animal");
    divAnimal.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span> `;
    return divAnimal;
  }
  // preenche cada animal do dDOM
  function preecherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  //anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", "numeros", "ativo");
    animaNumeros.init();
  }

  //cria um animail através de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      //fetch espera a resposta e transforma em JSON
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      //Após a transformação de json, ativa as funções para preencher e animar os numeros
      animaisJson.forEach((animal) => preecherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
