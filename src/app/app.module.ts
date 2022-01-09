import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { KatazomeComponent } from './katazome/katazome.component';
import { EtchingComponent } from './etching/etching.component';
import { DyeingComponent } from './dyeing/dyeing.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KatazomeComponent,
    EtchingComponent,
    DyeingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'katazome', component: KatazomeComponent},
      {path: 'etching', component: EtchingComponent},
      {path: 'dyeing', component: DyeingComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
