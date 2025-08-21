import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenu = document.querySelectorAll(dropdownMenus);
    //define touchstart e click argumento padrão de events caso o usuario não o defina
    if (this.events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeClass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //ativa o dropdownMenu e ativa a função que ativa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }
  //add os eventos ao dropdownMenu
  addDropdownMenusEvent() {
    this.dropdownMenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }
  init() {
    if (this.dropdownMenu.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
