import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }

  @Input() backgroundColor: string;
  @Input() color: string;
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    this.element.nativeElement.style.color = this.color;
  }

}
