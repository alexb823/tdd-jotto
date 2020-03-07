import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns the default initial state of "false", when no actions are passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
test('returns state of "true", when receives action type CORRECT_GUESS', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
