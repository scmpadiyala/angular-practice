import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "var_reverse",
  pure: true
})
export class PipesPipe implements PipeTransform {
  transform(srcValue: any, startIndex?: any, endIndex?: any): any {
    console.log("srcValue : " + srcValue);

    console.log("srcValue : " + startIndex + " : Param2 : " + endIndex);
    let newStdIds = [];

    let i = srcValue.length > endIndex ? endIndex : srcValue.length;

    i--;

    for (; i >= startIndex - 1; i--) {
      newStdIds.push(srcValue[i]);
    }

    return newStdIds;
  }
}
