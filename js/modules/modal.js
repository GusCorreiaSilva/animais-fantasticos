export default function modal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function clickFora(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }
  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);

    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickFora);
  }
}
