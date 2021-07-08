import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ai-sidenav',
  template: `
    <p>
      sidenav works!
    </p>
  `,
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
