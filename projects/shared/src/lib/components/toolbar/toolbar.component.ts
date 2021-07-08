import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ai-toolbar',
  template: `
    <p>
      toolbar works!
    </p>
  `,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
