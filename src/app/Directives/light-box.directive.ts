import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective implements OnChanges{
  @Input('LightBox') heighLightColor: string = 'black';
  @Input() defaultColor: string = 'darkblue';
  constructor(private elemRef: ElementRef) {
    // this.elemRef.nativeElement.style.border = `3px solid  ${this.defaultColor}`;
  }
  ngOnChanges() {

    this.elemRef.nativeElement.style.border = `3px solid  ${this.defaultColor}`;
  }
  @HostListener('mouseover') MouseOver() {
    this.elemRef.nativeElement.style.border = `3px solid ${this.heighLightColor}`;
  }

  @HostListener('mouseout') MouseOut() {
    this.elemRef.nativeElement.style.border = `3px solid  ${this.defaultColor}`;
  }
}
