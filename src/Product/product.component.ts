import { Component } from '@angular/core';

@Component({
    selector: "product",
    templateUrl: "./product.component.html",
    styleUrls:["./product.component.css"]

})

export class Productinfo {
   selectedradio:string = "all";
   flag:boolean=false;
   text_button:string="click to show";

    listofproduct: any = [
        { name: "TV", category: "electronic", quantity: 1, price: 1200, description: "OP" },
        { name: "AIRCONDITIONER", category: "electronic", quantity: 1, price: 1500, description: "OP" },
        { name: "SOCKS", category: "fashion", quantity: 1, price: 12000, description: "OP" },
        { name: "JEANS", category: "fashion", quantity: 1, price: 1870, description: "OP" },
        { name: "SAMSUNG", category: "mobile", quantity: 1, price: 9000, description: "OP" },
        { name: "APPLE", category: "mobile", quantity: 1, price: 1870, description: "OP" },
        { name: "MATHS", category: "books", quantity: 1, price: 870, description: "OP" },
        { name: "PHYSICS", category: "books", quantity: 1, price: 187, description: "OP" }

    ]

    gettotalitems(): number {
        return this.listofproduct.length;
    }
    gettotalelectronic(): number {
        return this.listofproduct.filter((e: { category: string; }) => e.category === "electronic").length;
    }
    gettotalfashion(): number {
        return this.listofproduct.filter((e: { category: string; }) => e.category === "fashion").length;
    }
    gettotalmobile(): number {
        return this.listofproduct.filter((e: { category: string; }) => e.category === "mobile").length;
    }
    gettotalbooks(): number {
        return this.listofproduct.filter((e: { category: string; }) => e.category === "books").length;
    }

    getselected(value: string) {
        this.selectedradio = value;
    }

    showdata(){
        if(this.flag===false){
            this.text_button="Click to hide";
            this.flag=true;
        }
        else{
            this.text_button="Click to show";
            this.flag=false;

        }
    }
    
}