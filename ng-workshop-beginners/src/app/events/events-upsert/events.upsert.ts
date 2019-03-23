import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule([
    import: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild( routes; [
            (path: 'events/new', component: EventsUpsertComponent)

        ])
    ],

    declaration: [
        
    ]
])

export class EventsUpsertModule {

}