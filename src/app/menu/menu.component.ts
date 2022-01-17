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
  printshopToggle = false;
  textileshopToggle = false;
  // status = 'Enable';

  enableDisableRule(page:string) {
    if (page == "about"){
      this.aboutToggle = true;
      this.katazomeToggle = false;
      this.etchingToggle = false;
      this.dyeingToggle = false;
      this.studioToggle = false;
      this.printshopToggle = false;
      this.textileshopToggle = false;
    }
    if (page == "katazome"){
      this.aboutToggle = false;
      this.katazomeToggle = true;
      this.etchingToggle = false;
      this.dyeingToggle = false;
      this.studioToggle = false;
      this.printshopToggle = false;
      this.textileshopToggle = false;
    }
    if (page == "etching"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = true;
      this.dyeingToggle = false;
      this.studioToggle = false;
      this.printshopToggle = false;
      this.textileshopToggle = false;
    }
    if (page == "dyeing"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = false;
      this.dyeingToggle = true;
      this.studioToggle = false;
      this.printshopToggle = false;
      this.textileshopToggle = false;
    }
    if (page == "studio"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = false;
      this.dyeingToggle = false;
      this.studioToggle = true;
      this.printshopToggle = false;
      this.textileshopToggle = false;
    }
    if (page == "printshop"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = false;
      this.dyeingToggle = false;
      this.studioToggle = false;
      this.printshopToggle = true;
      this.textileshopToggle = false;
    }
    if (page == "textileshop"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = false;
      this.dyeingToggle = false;
      this.studioToggle = false;
      this.printshopToggle = false;
      this.textileshopToggle = true;
    }
    // this.status = this.katazomeToggle ? 'Enable' : 'Disable';
  }
}
