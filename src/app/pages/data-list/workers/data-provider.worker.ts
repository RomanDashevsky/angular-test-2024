/// <reference lib="webworker" />

import { DataProviderWorkerMessageRequest } from '../types';
import { generateDataArray } from '../utils/data-generators';

addEventListener('message', ({ data }: MessageEvent<DataProviderWorkerMessageRequest>) => {
  const result = generateDataArray(data.size);

  console.log('Worker handle message', data);
  console.log(result);

  postMessage({ ...data, data: result });
});
