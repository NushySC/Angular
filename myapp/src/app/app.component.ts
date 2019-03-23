import { Component, ElementRef, Input, ViewChild } from '@angular/core'; //Input

@Component ({
    selector : 'app-root',
    template: `
    <input #myInput [(ngModel)]="myVar">
    <div>{{myVar}}</div>
    <button (click)="myMethod()">Click Me</button><br><br>

    <div *ngIf="isVisible">
    I show/I dissappear
    </div><br>

    <div *ngFor="let i of items" [ngStyle]="style">
    Item {{ i }}
    </div>
    
    {{ myText | stringCapitalizer }}
    `
})

export class AppComponent {
    myText : string = 'example';
    @ViewChild('myInput') myInput: ElementRef;

    @Input() myVar: string;
    isVisible: boolean = true;
    style = {'border': '2px solid black'};
    items: Array<number> = [1, 2, 3, 4, 5];

    constructor() {
        // this.myTitle = 'My First Angular Aplication' this was render in the component before. MyInput  view child, wtf is that
        console.log(this.myVar); //undefined
        }

    ngOnInit() {
        console.log(this.myVar); //value provided from outside
    }

    ngAfterViewInit(): void {
        console.log(this.myInput.nativeElement);
    }

    myMethod(): void {
        this.isVisible = !this.isVisible;
    }
}