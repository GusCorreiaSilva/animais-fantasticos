import initTabNav from "./modules/tabnav.js";
import initAccordion from "./modules/accordion.js";
import modal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fectch-bitcoin.js";
import ScrollSuave from "./modules/scrollSuave.js";
import initAnimaScroll from "./modules/initAnimaScroll.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

modal();
initTabNav();
initAccordion();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimaScroll();
