import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { KatazomeComponent } from './katazome/katazome.component';
import { EtchingComponent } from './etching/etching.component';
import { DyeingComponent } from './dyeing/dyeing.component';
import { AboutComponent } from './about/about.component';
import { printgalleryComponent } from './printgallery/printgallery.component';
import { textilegalleryComponent } from './textilegallery/textilegallery.component';
import { StudioComponent } from './studio/studio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KatazomeComponent,
    EtchingComponent,
    DyeingComponent,
    AboutComponent,
    printgalleryComponent,
    textilegalleryComponent,
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
      {path: 'printgallery', component: printgalleryComponent},
      {path: 'textilegallery', component: textilegalleryComponent},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
