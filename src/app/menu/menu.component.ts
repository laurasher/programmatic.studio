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

  katazomeToggle = true;
  // status = 'Enable';

  enableDisableRule() {
      this.katazomeToggle = !this.katazomeToggle;
      // this.status = this.katazomeToggle ? 'Enable' : 'Disable';
  }
}
