import { runSaga } from 'redux-saga';
import { fetchMovies } from '../redux/sagas';

describe('saga tests', () => {
  test('fetchMovies', async () => {
    const dispatched: any[] = [];
    await runSaga({ dispatch: (action) => dispatched.push(action) }, fetchMovies as any, {
      term: '338953'
    }).toPromise();
    expect(dispatched[0].type).toEqual('RECEIVE_MOVIES');
  });
});
