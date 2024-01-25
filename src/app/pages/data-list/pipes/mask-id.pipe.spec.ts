import { MaskIdPipe } from './mask-id.pipe';
import { DataTableItem } from '../models/data-table-item';
import { dataItemMock } from '../../../../../tests/mocks/data-item';

describe('MaskIdPipe', () => {
  let pipe: MaskIdPipe;

  beforeEach(() => {
    pipe = new MaskIdPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return maskId if present', () => {
    const maskId = 'masked123';
    const item: DataTableItem = new DataTableItem(dataItemMock);

    item.maskId = maskId;
    const result = pipe.transform(item);

    expect(result).toEqual(maskId);
  });

  it('should return id if maskId is not present', () => {
    const item: DataTableItem = new DataTableItem(dataItemMock);
    const result = pipe.transform(item);

    expect(result).toEqual(item.id);
  });

  it('should return id if maskId is falsy', () => {
    const maskId = '';
    const item: DataTableItem = new DataTableItem(dataItemMock);

    item.maskId = maskId;
    const result = pipe.transform(item);

    expect(result).toEqual(item.id);
  });

  it('should return id if maskId is undefined', () => {
    const maskId = undefined;
    const item: DataTableItem = new DataTableItem(dataItemMock);

    item.maskId = maskId;
    const result = pipe.transform(item);

    expect(result).toEqual(item.id);
  });
});
