import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/model/post';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  // lang = new BehaviorSubject<string>('en');
  // language = this.lang.asObservable();

  constructor(private http: HttpClient) { }

  getPostsList() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getPostById(id: number){
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/'+id)  
  }


}
