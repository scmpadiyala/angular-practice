import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  DoCheck,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "app-cdchild",
  templateUrl: "./cdchild.component.html",
  styleUrls: ["./cdchild.component.css"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CdchildComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input() stdids: any[];

  @Input() student: any;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach();
  }

  ngOnChanges() {
    // this.changeDetector.reattach();
  }

  ngOnInit() {}

  ngDoCheck() {
    // this.changeDetector.markForCheck();
    this.changeDetector.detectChanges();
  }

  ngAfterContentInit() {
    // this.changeDetector.markForCheck();
  }
}
