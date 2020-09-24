import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { NotificationsService } from 'src/app/providers/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {


  posts: Post[] = [];
  spinner: boolean = true;

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
    console.log('======================> PostsListPage <=====================')

    this.notificationsService.getPostsList()
    .subscribe( 
      postsData => {
        // console.log('postsData => ', postsData)
        this.posts = postsData;
        this.spinner = false
      },
      error => {
        // console.log('error => ', error)
      });
  }

  logScrollStart(event) {
    console.log('logScrollStart=>', event)
  }


  logScrolling(event) {
    // console.log('logScrolling=>', event)
  }

  logScrollEnd(event) {
    console.log('logScrollEnd=>', event)
  }


}
