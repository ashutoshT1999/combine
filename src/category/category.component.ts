import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: "category",
    templateUrl: "./category.component.html"

})

export class categoryinfo {

    @Input()
    all: number = 0;
    @Input()
    electronic: number = 0;
    @Input()
    fashion: number = 0;
    @Input()
    mobile: number = 0;
    @Input()
    books: number = 0;


    num: number = 100;

    selectedCategory: string = "all";

    @Output() selectedCategoryevent = new EventEmitter<string>();

    selectedCategorydone() {
        this.selectedCategoryevent.emit(this.selectedCategory);
        // console.log(this.selectedCategory);
    }
}