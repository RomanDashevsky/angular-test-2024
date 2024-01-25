import { Pipe, PipeTransform } from '@angular/core';
import { DataTableItem } from '../models/data-table-item';

// I don't know is it what are you expected from me
// if not it could be overridden at transform step, but we would get trackById issue
// with freezing row render for other fields of item because id will not update id,
// in this case possible solutions is change trackBy fn to check other fields, for example id + int + float
@Pipe({
  name: 'maskId',
})
export class MaskIdPipe implements PipeTransform {
  transform(value: DataTableItem): unknown {
    const maskId = value.maskId;

    return maskId ? maskId : value.id;
  }
}
