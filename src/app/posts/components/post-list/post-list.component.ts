import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      id: '213123',
      body: 'ajdhkajds'
    },
    {
      id: '12332',
      body: 'HALO!'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
