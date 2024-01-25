import { DataTableItem } from '../models/data-table-item';
import { trackById } from './tackBy';
import { dataItemMock } from '../../../../../tests/mocks/data-item';

describe('trackById', () => {
  it('should return the ID of the DataTableItem', () => {
    const item: DataTableItem = new DataTableItem(dataItemMock);
    const result = trackById(0, item);

    expect(result).toBe(item.id);
  });

  it('should return the correct ID for different DataTableItems', () => {
    const item1: DataTableItem = new DataTableItem(dataItemMock);
    const item2: DataTableItem = new DataTableItem({ ...dataItemMock, id: 'def' });
    const result1 = trackById(0, item1);
    const result2 = trackById(1, item2);

    expect(result1).toBe(item1.id);
    expect(result2).toBe(item2.id);
  });
});
