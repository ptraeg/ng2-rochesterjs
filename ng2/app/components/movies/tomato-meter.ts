import { Component, Input } from "angular2/core";
import { Movie } from '../../models/movie';

@Component({
  selector: 'tomato-meter',
  template: `
    <span [class]="setClasses()"></span>
  `,
  // Have to use relative paths per this - https://aigeec.com/angularjs-2-style-urls/
  styleUrls: ['./app/components/movies/tomato-meter.css']
})
export class TomatoMeter {

  @Input('rating') rating;

  constructor() {
  }

  setClasses() {
    let classString: string = "tomatometer ";

    if (this.rating === 'Certified Fresh') {
      classString += 'certified-fresh';

    } else if (this.rating === 'Fresh') {
      classString += 'fresh';

    } else {
      classString += 'rotten';
    }
    return classString;
  }

}
