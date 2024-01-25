import { SafePipe } from './safe.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

describe('SafePipe', () => {
  let pipe: SafePipe;
  let sanitizerSpy: jest.Mocked<DomSanitizer>;

  beforeEach(() => {
    sanitizerSpy = {
      bypassSecurityTrustHtml: jest.fn(),
    } as unknown as jest.Mocked<DomSanitizer>;

    pipe = new SafePipe(sanitizerSpy);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should call bypassSecurityTrustHtml with the provided value', () => {
    const value = '<div>Some HTML content</div>';
    const transformedValue: SafeHtml = 'transformed value' as SafeHtml;

    sanitizerSpy.bypassSecurityTrustHtml.mockReturnValueOnce(transformedValue);

    const result = pipe.transform(value, 'html');

    expect(sanitizerSpy.bypassSecurityTrustHtml).toHaveBeenCalledWith(value);
    expect(result).toBe(transformedValue);
  });

  it('should return the original value if type is not "html"', () => {
    const value = 'some text';

    const result = pipe.transform(value, 'other');

    expect(sanitizerSpy.bypassSecurityTrustHtml).not.toHaveBeenCalled();
    expect(result).toBe(value);
  });
});
