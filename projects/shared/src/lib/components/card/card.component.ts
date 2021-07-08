import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ai-card',
  template: `
    <p>
      card works!
    </p>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
