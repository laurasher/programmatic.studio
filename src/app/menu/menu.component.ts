import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Initalize all to false
  aboutToggle = true;
  katazomeToggle = false;
  etchingToggle = false;
  dyeingToggle = false;
  studioToggle = false;
  printgalleryToggle = false;
  textilegalleryToggle = false;
  // status = 'Enable';

  enableDisableRule(page:string) {
    if (page == "about"){
      this.aboutToggle = true;
      this.katazomeToggle = false;
      this.etchingToggle = false;
      this.dyeingToggle = false;
      this.studioToggle = false;
      this.printgalleryToggle = false;
      this.textilegalleryToggle = false;
    }
    if (page == "katazome"){
      this.aboutToggle = false;
      this.katazomeToggle = true;
      this.etchingToggle = false;
      this.dyeingToggle = false;
      this.studioToggle = false;
      this.printgalleryToggle = false;
      this.textilegalleryToggle = false;
    }
    if (page == "etching"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = true;
      this.dyeingToggle = false;
      this.studioToggle = false;
      this.printgalleryToggle = false;
      this.textilegalleryToggle = false;
    }
    if (page == "dyeing"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = false;
      this.dyeingToggle = true;
      this.studioToggle = false;
      this.printgalleryToggle = false;
      this.textilegalleryToggle = false;
    }
    if (page == "studio"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = false;
      this.dyeingToggle = false;
      this.studioToggle = true;
      this.printgalleryToggle = false;
      this.textilegalleryToggle = false;
    }
    if (page == "printgallery"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = false;
      this.dyeingToggle = false;
      this.studioToggle = false;
      this.printgalleryToggle = true;
      this.textilegalleryToggle = false;
    }
    if (page == "textilegallery"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = false;
      this.dyeingToggle = false;
      this.studioToggle = false;
      this.printgalleryToggle = false;
      this.textilegalleryToggle = true;
    }
    // this.status = this.katazomeToggle ? 'Enable' : 'Disable';
  }
}
