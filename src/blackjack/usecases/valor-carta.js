// pedirCarta();
/**
 * Esta función me permite obtener el valor a la carta
 * @param {String} carta
 * @returns {Number}  valor de la carta
 */

export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
