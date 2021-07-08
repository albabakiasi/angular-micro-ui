import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ai-progress-bar',
  template: `
    <p>
      progress-bar works!
    </p>
  `,
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
