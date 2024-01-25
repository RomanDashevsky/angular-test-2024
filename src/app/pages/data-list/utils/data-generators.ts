// TODO: use uuid generator to avoid duplication of IDs
import randomColor from 'randomcolor';
import { DEFAULT_DATA_LIST_SIZE } from '../constants';
import { DataItemDto } from '../types';

const generateRandomId = (): string => {
  return Math.random().toString(36).substring(7);
};

const generateRandomInteger = (): number => {
  return Math.floor(Math.random() * 1000);
};

const generateRandomFloat = (): number => {
  return parseFloat(Math.random().toFixed(18));
};

export const generateDataArray = (size: number = DEFAULT_DATA_LIST_SIZE): DataItemDto[] => {
  const dataArray: DataItemDto[] = [];

  for (let i = 0; i < size; i++) {
    const dataItem: DataItemDto = {
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
