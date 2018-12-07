import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-samplesecurity",
  templateUrl: "./samplesecurity.component.html",
  styleUrls: ["./samplesecurity.component.css"]
})
export class SamplesecurityComponent implements OnInit {
  // HTML Part
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  securehtmlsnippet;

  // URL Part
  sampleUrl = 'javascript:alert("Hi there")';
  trustedUrl;

  constructor(private sanitizer: DomSanitizer) {
    // this.securehtmlsnippet = this.htmlSnippet;

    this.securehtmlsnippet = sanitizer.bypassSecurityTrustHtml(
      this.htmlSnippet
    );

    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.sampleUrl);
  }

  ngOnInit() {}
}
