import { Directive, HostListener } from '@angular/core';

@Directive ({
    selector: '[myDirective]'
})

export class MyDirectiveDirective {

    @HostListener('mouseClick') onClick() {
        console.log('###')
    }
}