import { DataItemDto } from '../types';

// I don't now is it that you want to get about not raw data that will be used at table
// I think it could be better to add DataItem interface
//   and implement transform logic based on resting of dto object
// Also, transform could be implemented by fabric pattern

export class DataTableItem {
  id: string;
  int: number;
  float: number;
  color: string;
  child: {
    id: string;
    color: string;
  };

  private _maskId?: string | undefined;

  constructor(itemDto: DataItemDto) {
    this.id = itemDto.id;
    this.int = itemDto.int;
    this.float = itemDto.float;
    this.color = itemDto.color;
    this.child = { ...itemDto.child };
  }

  // just get/set case, also it could be implemented as constructor param
  get maskId(): string | undefined {
    return this._maskId;
  }

  set maskId(value: string | undefined) {
    this._maskId = value;
  }
}
