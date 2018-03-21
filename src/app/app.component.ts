import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus nullam. ',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Un de plus',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus nullam. ',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'And another one',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus nullam. ',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
