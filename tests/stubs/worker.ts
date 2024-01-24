export class WorkerStub {
  postMessage = jest.fn();
  addEventListener = jest.fn();
  removeEventListener = jest.fn();
  terminate = jest.fn();
  onmessage = jest.fn();
  onmessageerror = jest.fn();
  dispatchEvent = jest.fn();
  onerror = jest.fn();
}
