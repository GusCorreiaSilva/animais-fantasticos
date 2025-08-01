export default class initToolTip {
  constructor(tools) {
    this.tools = document.querySelectorAll(tools);

    //bind do onj da classe ao callback
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  //move a tip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  //remove a tooltip e os event de mouseMove e mouseÇeave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }
  //cria a tooltip e coloca no body
  criarToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  //cria a tooltip e cria os event mouseMove e mouseLeave ao target ao passar o mouse por cima do mapa
  onMouseOver(event) {
    // cria a tooltip e coloca numa propriedade
    this.criarToolTipBox(event.currentTarget);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }
  //add os event de mouseMove a cada tooltip do site
  addTooltipsEvent() {
    this.tools.forEach((tool) => {
      tool.addEventListener("mouseover", this.onMouseOver);
    })
  }
  init() {
    if (this.tools.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
