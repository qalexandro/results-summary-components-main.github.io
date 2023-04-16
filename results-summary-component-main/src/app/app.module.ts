import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftCardComponent } from './Components/left-card/left-card.component';
import { RightCardComponent } from './Components/right-card/right-card.component';
import { AspectComponent } from './Components/aspect/aspect.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './Components/button/button.component';

@NgModule({
  declarations: [AppComponent, LeftCardComponent, RightCardComponent, AspectComponent, ButtonComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
