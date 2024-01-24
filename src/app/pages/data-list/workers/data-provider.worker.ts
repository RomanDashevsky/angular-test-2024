/// <reference lib="webworker" />

import { DataProviderWorkerMessageRequest } from '../types';
import { generateDataArray } from '../utils/data-generators';

addEventListener('message', ({ data }: MessageEvent<DataProviderWorkerMessageRequest>) => {
  const result = generateDataArray(data.size);

  postMessage({ ...data, data: result });
});
