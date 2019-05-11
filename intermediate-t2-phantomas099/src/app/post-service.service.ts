import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }


  getPosts(): Observable<IPost[]>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(
      map((albums : Array<any>)=> {
        return <any>albums.map(album => album)
      })
    )
  }

  getComments(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  }
}