import { Pipe, PipeTransform } from "@angular/core";
import { start } from "repl";

@Pipe({
  name: "reverse",
  //pure: false
})
export class RevesePipe implements PipeTransform {
  /*
   * This pipe reverse the array content
   */

  transform(srcArray: any, startindex?: number): any {
    let reverseorder = [];

    console.log("start Index " + startindex);
    let revIndex = startindex != undefined ? startindex : 0;

    for (let i = srcArray.length - 1; i >= revIndex; i--) {
      reverseorder.push(srcArray[i]);
    }

    return reverseorder;
  }
}
