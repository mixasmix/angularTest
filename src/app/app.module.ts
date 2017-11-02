import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome/angular-font-awesome';
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import { MenuItem, ButtonModule, CheckboxModule, RadioButtonModule } from 'primeng/primeng';            //api

import {AppComponent} from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BacketBlockComponent } from './header/backet-block/backet-block.component';
import { TopMenuComponent } from './top-menu/top-menu.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        BacketBlockComponent,
        TopMenuComponent
    ],
    imports: [
        BrowserModule,
        AngularFontAwesomeModule,
        AccordionModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
