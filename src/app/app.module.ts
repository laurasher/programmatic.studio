import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { KatazomeComponent } from './katazome/katazome.component';
import { EtchingComponent } from './etching/etching.component';
import { DyeingComponent } from './dyeing/dyeing.component';
import { AboutComponent } from './about/about.component';
import { PrintshopComponent } from './printshop/printshop.component';
import { TextileshopComponent } from './textileshop/textileshop.component';
import { StudioComponent } from './studio/studio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KatazomeComponent,
    EtchingComponent,
    DyeingComponent,
    AboutComponent,
    PrintshopComponent,
    TextileshopComponent,
    StudioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // {path: 'about', component: AboutComponent},
      {path: '', component: AboutComponent},
      {path: 'katazome', component: KatazomeComponent},
      {path: 'etching', component: EtchingComponent},
      {path: 'dyeing', component: DyeingComponent},
      {path: 'studio', component: StudioComponent},
      {path: 'printshop', component: PrintshopComponent},
      {path: 'textileshop', component: TextileshopComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
