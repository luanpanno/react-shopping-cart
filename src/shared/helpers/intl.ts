const locale = 'pt-BR';

export const currency = new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: 'BRL',
});

export const decimal = new Intl.NumberFormat(locale, {
  minimumFractionDigits: 2,
});

export const integer = new Intl.NumberFormat(locale, {
  minimumFractionDigits: 0,
});
