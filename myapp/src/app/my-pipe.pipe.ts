import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    name: 'stringCapitalizer'
})

export class MyPipePipe implements PipeTransform {
    transform (value: string): any {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            return value;
        }
    } 
}