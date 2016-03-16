import { Component } from "angular2/core";

@Component({
  template: `
    <h1>About</h1>
    <div>Version {{version}}</div>
  `
})
export class AboutComponent {
  version: string;

  constructor() {
    this.version = "v0.0.1";
  }
}