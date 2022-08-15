import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "catpipe"
})

export class categorypipe implements PipeTransform {
    transform(value: any, category: string){
        if (category == "electronic") return "E-" + value;
        if (category == "fashion") return "F-" + value;
        if (category == "mobile") return "M-" + value;
        else return "B-" + value;
    }
}