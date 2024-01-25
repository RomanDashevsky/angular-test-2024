import { generateDataArray } from './data-generators';
import { DEFAULT_DATA_LIST_SIZE } from '../constants';

describe('generateDataArray', () => {
  it('should generate an array of data items with default size', () => {
    const dataArray = generateDataArray();

    expect(dataArray.length).toBe(DEFAULT_DATA_LIST_SIZE);
    dataArray.forEach((item) => {
      expect(item.id).toBeDefined();
      expect(item.int).toBeDefined();
      expect(item.float).toBeDefined();
      expect(item.color).toBeDefined();
      expect(item.child).toBeDefined();
      expect(item.child.id).toBeDefined();
      expect(item.child.color).toBeDefined();
    });
  });

  it('should generate an array of data items with specified size', () => {
    const customSize = 5;
    const dataArray = generateDataArray(customSize);

    expect(dataArray.length).toBe(customSize);
  });

  it('should generate unique IDs for each data item', () => {
    const dataArray = generateDataArray(10);
    const uniqueIds = new Set(dataArray.map((item) => item.id));

    expect(uniqueIds.size).toBe(dataArray.length);
  });

  it('should generate different IDs for child items', () => {
    const dataArray = generateDataArray(10);

    dataArray.forEach((item) => {
      expect(item.id).toBeDefined();
      expect(item.child.id).toBeDefined();
      expect(item.id).not.toBe(item.child.id);
    });
  });
});
