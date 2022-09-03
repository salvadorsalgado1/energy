import { render, screen } from '@testing-library/react';
import App from './App';

test('react tests', async () => {

  let testing = 2;
  await expect(testing).toEqual(2);
});
