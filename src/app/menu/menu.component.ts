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
  // status = 'Enable';

  enableDisableRule(page:string) {
    console.log("current page ", page)
    if (page == "katazome"){
      this.aboutToggle = false;
      this.katazomeToggle = true;
      this.etchingToggle = false;
      this.dyeingToggle = false;
    }
    if (page == "etching"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = true;
      this.dyeingToggle = false;
    }
    if (page == "dyeing"){
      this.aboutToggle = false;
      this.katazomeToggle = false;
      this.etchingToggle = false;
      this.dyeingToggle = true;
    }
    // this.status = this.katazomeToggle ? 'Enable' : 'Disable';
  }
}
