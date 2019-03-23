import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {MyPipePipe} from './my-pipe.pipe';
import {MyDirectiveDirective} from './my-directive.directive';

@NgModule ({ 
    declarations: [AppComponent, MyPipePipe, MyDirectiveDirective], //MyDirectiveDirective
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent],
})

    export class AppModule {
    
}