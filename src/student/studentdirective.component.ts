import { Directive ,ElementRef, Host, HostBinding ,Input } from "@angular/core";

@Directive({
    selector:"[highlight]"
})

export class highlightDirective{
    @Input() bgcolor:string="";
    @Input() font:string="";

    @HostBinding('style.background-color') bg:string="";
    @HostBinding('style.font-weight') bold:string="";

    ngOnInit(){
        this.bg = this.bgcolor;
        this.bold = this.font;
    }
}