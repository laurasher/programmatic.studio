import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { KatazomeComponent } from './katazome/katazome.component';
import { EtchingComponent } from './etching/etching.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KatazomeComponent,
    EtchingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'katazome', component: KatazomeComponent},
      {path: 'etching', component: EtchingComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
