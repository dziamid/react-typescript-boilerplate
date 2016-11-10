/**
 * Test the request function
 */

import request, { ResponseError } from '../request';
import sinon = require ('sinon');


declare var window: IStubedWindow & Window;


describe('request', () => {
  // Before each test, stub the fetch function
  beforeEach(() => {
    sinon.stub(window, 'fetch');
  });

  // After each test, restore the fetch function
  afterEach(() => {
    window.fetch.restore();
  });

  describe('stubbing successful response', () => {
    // Before each test, pretend we got a successful response
    beforeEach(() => {
      const res = new Response('{"hello":"world"}', {
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      });

      window.fetch.returns(Promise.resolve(res));
    });

    it('should format the response correctly', (done) => {
      request('/thisurliscorrect')
        .catch(done)
        .then((json) => {

          const data = (json as any).data;

          expect(data.hello).toEqual('world');
          done();
        });
    });
  });

  describe('stubbing error response', () => {
    // Before each test, pretend we got an unsuccessful response
    beforeEach(() => {
      const res = new Response('', {
        status: 404,
        statusText: 'Not Found',
        headers: {
          'Content-type': 'application/json',
        },
      });

      window.fetch.returns(Promise.resolve(res));
    });

    it('should catch errors', (done) => {
      request('/thisdoesntexist')
        .then((json) => {

          const err = ((json as any).err as ResponseError);

          expect(err.response.status).toEqual(404);
          expect(err.response.statusText).toEqual('Not Found');
          done();
        });
    });
  });
});
