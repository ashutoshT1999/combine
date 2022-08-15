import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
@Component({
    selector: "content",
    templateUrl: "./content.component.html"
})

export class contentinfo {

    saveinfo(form: NgForm) {
        console.log(form.value)
        //    let info:any = form.value;
        //    console.log(info.email);
    }

}