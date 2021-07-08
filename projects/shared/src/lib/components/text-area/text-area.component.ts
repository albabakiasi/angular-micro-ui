import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ai-text-area',
  template: `
    <p>
      text-area works!
    </p>
  `,
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
