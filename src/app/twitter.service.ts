import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http:HttpClient) { }

  getResult(x:string, y:string) {
    return this.http.get(environment.twitterPlayServiceHost + '/follows/isXFollowsY?x=' + x + '&y=' + y);
  }
}
