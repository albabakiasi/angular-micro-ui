import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ai-toggle',
  template: `
    <p>
      toggle works!
    </p>
  `,
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
