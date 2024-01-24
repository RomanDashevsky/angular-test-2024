// TODO: use uuid generator to avoid duplication of IDs
import { DataItem } from '../types';
import randomColor from 'randomcolor';
import { DEFAULT_DATA_LIST_SIZE } from '../constants';

const generateRandomId = (): string => {
  return Math.random().toString(36).substring(7);
};

const generateRandomInteger = (): number => {
  return Math.floor(Math.random() * 1000);
};

const generateRandomFloat = (): number => {
  return parseFloat((Math.random() * 100).toFixed(18));
};

export const generateDataArray = (size: number = DEFAULT_DATA_LIST_SIZE): DataItem[] => {
  const dataArray: DataItem[] = [];

  for (let i = 0; i < size; i++) {
    const dataItem: DataItem = {
      id: generateRandomId(),
      int: generateRandomInteger(),
      float: generateRandomFloat(),
      color: randomColor(),
      child: {
        id: generateRandomId(),
        color: randomColor(),
      },
    };

    dataArray.push(dataItem);
  }

  return dataArray;
};
