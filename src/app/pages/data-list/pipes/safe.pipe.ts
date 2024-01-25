import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// To avoid xss attacks
@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}
  transform(value: string, type: string): SafeHtml | string {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);

      default:
        return value;
    }
  }
}
