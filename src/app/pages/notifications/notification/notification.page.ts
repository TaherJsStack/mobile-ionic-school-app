import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationsService } from 'src/app/providers/notifications.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  subscription: Subscription;
  spinner: boolean = true;
  post: Post;

  constructor( private route: ActivatedRoute, private notificationsService: NotificationsService ) { }

  ngOnInit() {
    console.log('==============================> PostPage <======================================')
    
    this.route.paramMap
    .subscribe( (paramMap: ParamMap ) => {
      if ( paramMap.has('id') ) {
          this.subscription = this.notificationsService.getPostById(+paramMap.get('id'))
          .subscribe( 
            postData => { 
              this.post = postData;
              this.spinner = false
            },
            err => { 
              // console.log('post error ==>', err)
            }
          )
        } else {
          console.log('no param map')
        }
      });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


}
