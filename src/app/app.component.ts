import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      userName: '@nature',
      content: 'I saw a neet tree!',
    },
    {
      title: 'Snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
      userName: '@nature',
      content: 'I saw a snowy mountain!',
    },
    {
      title: 'Neat tree',
      imageUrl: 'assets/biking.jpeg',
      userName: 'biking1222',
      content: 'I did some biking today!',
    },
  ];
}
