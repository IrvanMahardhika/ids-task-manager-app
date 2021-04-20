import {encrypt} from '@supports/helpers/encryption';

test('encrypt', () => {
  const password = 'amanda12345';
  const encryptedPassword = 'baf3f506dbdfb7b141ef9e';

  expect(encrypt(password)).toEqual(encryptedPassword);
});
