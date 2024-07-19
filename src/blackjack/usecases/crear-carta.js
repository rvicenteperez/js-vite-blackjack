/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCarta = (carta) => {
  if (!carta) throw Error("la carta es un argumento obligatorio");
  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = document.createElement("img");
  imgCarta.src = `/assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");

  return imgCarta;
};
