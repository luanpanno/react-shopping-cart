import { integer } from './intl';

export const masks = {
  integers(value: string | number) {
    let newValue = String(value).replace(/\D/g, '');

    if (newValue.length < 3) {
      newValue = newValue.padStart(3, '0');
    }

    const chars = newValue.split('');
    newValue = chars.join('');
    newValue = integer.format(+newValue);

    return +newValue;
  },
};
