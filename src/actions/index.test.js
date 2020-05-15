import maxios from 'moxios';

import { storeFactory } from '../../test/testUtils';


import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    maxios.install();
  });
  afterEach(() => {
    maxios.uninstall();
  });
  test('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    maxios.wait(() => {
      const request = maxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
