import '@testing-library/jest-dom';
// import 'resize-observer-polyfill';
import worker from '../mocks/handlers';
beforeAll(() => {
  worker.listen();
});
afterEach(() => {
  worker.resetHandlers();
});
afterAll(() => {
  worker.close();
});

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };
global.ResizeObserver = require('resize-observer-polyfill');
