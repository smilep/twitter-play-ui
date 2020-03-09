import { Component } from '@angular/core';
import { TwitterService } from './twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TwitterService]
})
export class AppComponent {

  constructor(private twitterService: TwitterService){}
  title = 'twitter-play-ui';
  resultYes = '';
  resultNo = '';
  error = '';
  handleX = '';
  handleY = '';
  loading = false;

  public getData() {
    this.loading = true;
    if(!this.handleY || !this.handleY) {
      this.error = 'Please enter both Twitter handles!';
      this.resultYes = '';
      this.resultNo = '';
      this.loading = false;
      return;
    }
    this.twitterService.getResult(this.handleX, this.handleY).subscribe((data) => {
      this.error = '';
      if(data['isFollowing']) {
        this.resultYes = 'Yes!!';
        this.resultNo = '';
      } else {
        this.resultNo = 'No!';
        this.resultYes = '';
      }
      this.loading = false;
    },
    (error) => {
      console.log(error);
      this.error = 'Uh oh! Error ocurred ' + error['error']['message'];
      this.resultYes = '';
      this.resultNo = '';
      this.loading = false;
    });
  }
}
