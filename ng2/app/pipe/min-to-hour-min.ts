import {Pipe} from 'angular2/core';
@Pipe({
  name: 'min2HrMin'
})
export class MinToHourMin {
  transform(totalMinutes:number):string {
    let hours:number = Math.floor(totalMinutes / 60);
    let minutes:number = totalMinutes % 60;
    let minutesStr:string = (minutes < 10 ? "0" : "") + minutes;
    return `${hours}:${minutesStr}`;    
  }
}