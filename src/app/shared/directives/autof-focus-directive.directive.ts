import { AfterContentInit, Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutofocusDirective implements OnChanges{

  @Input() public appAutoFocus!: boolean;

  public constructor(private el: ElementRef) {

  }

  public ngOnChanges() {
      setTimeout(() => {

          this.el.nativeElement.focus();

      }, 500);

  }

}