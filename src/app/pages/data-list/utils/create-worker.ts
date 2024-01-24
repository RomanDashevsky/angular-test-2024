export const createWorker = () => {
  return new Worker(new URL('../workers/data-provider.worker.ts', import.meta.url), { type: 'module' });
};
