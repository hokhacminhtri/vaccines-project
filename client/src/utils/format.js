export const currencyFormat = (money = {}) => {
  return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
};
