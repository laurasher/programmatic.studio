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
  katazomeToggle = false;
  etchingToggle = false;
  // status = 'Enable';

  enableDisableRule(page:string) {
    console.log("current page ", page)
    if (page == "katazome"){
      this.etchingToggle = false;
      this.katazomeToggle = true;
    }
    if (page == "etching"){
      this.katazomeToggle = false;
      this.etchingToggle = true;
    }
    // this.status = this.katazomeToggle ? 'Enable' : 'Disable';
  }
}
