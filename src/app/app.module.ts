import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {HomePageComponent} from './home-page/home-page.component'
import {AppRoutingModule} from './app-routing.module'
import {AboutPageComponent} from './about-page/about-page.component'
import {AboutExtraPageComponent} from './about-page/about-extra-page/about-extra-page.component'
import {ColorDirective} from './shared/color.directive'
import {PageNamePipe} from './shared/page-name.pipe'
import {AboutPageModule} from './about-page/about-page.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    // AboutPageComponent,
    // AboutExtraPageComponent,
    // ColorDirective,
    // PageNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // AboutPageModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
