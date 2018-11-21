import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  @Input("appHighlight")
  highlightColor: string;

  constructor(private elementRef: ElementRef) {
    this.highlightText();
  }

  highlightText() {
    console.log("color : " + this.highlightColor);

    this.highlightColor =
      this.highlightColor == undefined ? " Blue" : this.highlightColor;

    this.elementRef.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.highlightText();
  }
}
