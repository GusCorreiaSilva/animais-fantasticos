export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    // bind do this do obj ao callBack da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }
  //recebe um elemento do dom com numero em seu texto
  //incrementa de 0 até o numero final
  static incrementarNumero(n) {
    const total = +n.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      n.innerText = start;
      if (start > total) {
        n.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
  //ativa incrementar numero para cada numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach((n) => this.constructor.incrementarNumero(n));
  }
  // função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass));
    {
      this.observer.disconnect();
      animaNumeros();
    }
  }
  //Add o mutationObserver para verificar quando a classe ativa é add ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }
  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
