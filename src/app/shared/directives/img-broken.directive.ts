import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @HostListener('error') errorHandler(): void {
    const elementNative = this.elementHost.nativeElement;

    elementNative.src = '../../../assets/img/imgBroken.jpg';
  }

  constructor(private elementHost: ElementRef) {}
}
