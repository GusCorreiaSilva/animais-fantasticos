export default class initToolTip {
  constructor(tools) {
    this.tools = document.querySelectorAll(tools);

    //bind do onj da classe ao callback
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    this.tooltipBox.style.left = event.pageX + 20 + "px";
  }

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
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
  onMouseOver(event) {
    // cria a tooltip e coloca numa propriedade
    this.criarToolTipBox(event.currentTarget);

    event.currentTarget.addEventListener("mousemove", this.onMouseMove);

    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tools.forEach((tool) => {
      tool.addEventListener("mouseover", this.onMouseOver);
    });
  }
  init() {
    if (this.tools.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
