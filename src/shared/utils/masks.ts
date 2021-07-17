import { decimal as decimalConvert, integer } from './intl';

export const masks = {
  integers(value: string | number) {
    let newValue = String(value).replace(/\D/g, '');

    if (newValue.length < 3) {
      newValue = newValue.padStart(3, '0');
    }

    const chars = newValue.split('');
    newValue = chars.join('');
    newValue = integer.format(+newValue);

    return +newValue.replace('.', '');
  },

  decimal(value: string | number) {
    let newValue = String(value).replace(/[^0-9]/g, '');

    if (newValue) {
      if (newValue.length < 3) {
        newValue = newValue.padStart(3, '0');
      }

      const chars = newValue.split('');
      chars.splice(-2, 0, '.');
      newValue = chars.join('');
      newValue = decimalConvert.format(+newValue);
    }

    return newValue;
  },
};
