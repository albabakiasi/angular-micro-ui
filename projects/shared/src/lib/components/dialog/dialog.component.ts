import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ai-dialog',
  template: `
    <p>
      dialog works!
    </p>
  `,
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
