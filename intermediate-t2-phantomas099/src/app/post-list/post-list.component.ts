import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postsItem:any;
  constructor(private posts:PostServiceService
     )  {
      this.newMethod();
  }

  private newMethod() {
    
  }

  ngOnInit() {
    this.posts.getPosts().subscribe(
      val => {
        this.postsItem = val        
      },
      err => {
        console.log(err);
        
      }
    )
  }

}
