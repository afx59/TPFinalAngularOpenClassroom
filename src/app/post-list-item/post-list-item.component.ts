import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title : String;
  @Input() content : String;
  @Input() loveIts : number;
  @Input() created_at : Date;

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.loveIts++;
  }

  substract(){
    this.loveIts--;
  }

}
