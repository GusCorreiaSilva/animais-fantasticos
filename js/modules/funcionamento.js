export default function initFuncionamento() {
}
const funcionamento = document.querySelector('[data-semana]')
const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)
console.log(horarioSemana);

const dataAgora = new Date()
const diaAgora = dataAgora.getDay()
const horarioAgora = dataAgora.getHours()

const semanoAberto = diasSemana.indexOf(diaAgora) !== -1
const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

if (semanoAberto && horarioAberto) {
  funcionamento.classList.add('aberto')
}