import { PostServiceService } from './../post-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../post';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() myPost: IPost;
  comments: Array<any>;
  loading: boolean = false;
  constructor(private posts: PostServiceService) { }

  ngOnInit() {
  }
  loadComments(id:number){
    this.posts.getComments(id).
    pipe(
      tap(() => this.loading = true),
      delay(1000)
    )
    .subscribe(
      (val:any) => {
        this.comments = val;
        this.loading = false;
        
      },
      (err) => {
        console.log(err);
        this.loading = false;
        
      },
      () => this.loading = false
    )
    
  }

}
