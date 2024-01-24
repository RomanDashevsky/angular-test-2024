export interface DataProviderWorkerMessageRequest {
  size: number;
  getId: number;
  tickId: number;
}

export interface DataProviderWorkerMessageResponse {
  data: DataItemDto[];
  getId: number;
  tickId: number;
}

interface BaseDataItem {
  id: string;
  color: string;
}

// Raw type like
export interface DataItemDto extends BaseDataItem {
  int: number;
  float: number;
  child: BaseDataItem;
}

export interface DataItem extends BaseDataItem {
  int: number;
  float: number;
  child: BaseDataItem;
}
