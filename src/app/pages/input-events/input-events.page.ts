import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-events',
  templateUrl: './input-events.page.html',
  styleUrls: ['./input-events.page.scss'],
})
export class InputEventsPage implements OnInit {

  ngOnInit() {
    document.getElementById('prevent_key_code').addEventListener('keyup', event => {
      console.log(event.key);
      if (event.key === ' ') {
        event.stopPropagation();
      }
    }, false);
  }

}
