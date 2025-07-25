export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((li, index) => {
      li.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
