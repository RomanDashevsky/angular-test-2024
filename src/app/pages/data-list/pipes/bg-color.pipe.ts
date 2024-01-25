import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bgColor',
})
export class BgColorPipe implements PipeTransform {
  transform(value: string): string {
    if (this.isValidColor(value)) {
      return `<span style="background-color: ${value};">${value}</span>`;
    }

    return value;
  }

  private isValidColor(color: string): boolean {
    const s = new Option().style;

    s.color = color;

    return s.color !== '';
  }
}
