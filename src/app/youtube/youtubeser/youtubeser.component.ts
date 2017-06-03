import { Component, OnInit ,Injectable  } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
//import {SafeResourceUrl, DomSanitizationService} from '@angularplatform-browser/index';

import 'rxjs/add/operator/catch';@Injectable()

@Component({
  selector: 'app-youtubeser',
  templateUrl: './youtubeser.component.html',
  styleUrls: ['./youtubeser.component.css']
})
export class YoutubeserComponent implements OnInit {

  constructor(private http: Http) { }

  videoList : any;
  searchKey : string = 'cricket';
  timer: any;
  videoObj : any;
  relatedVideo : any;
  ListOrVideo : string = "List";
  url :any;

  ngOnInit() {
    var obj = this.fetchVideos('cricket');
    console.log(obj);

  this.apiHit();

  }

  play(id){

    this.videoDetail(id).subscribe(data=>{
      console.log(data);
        this.videoObj = data.items;
        console.log(this.videoObj);
     //   this.url = sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/XHCVWWsQmUs');
      },
      err =>{
        console.log(err);
      }
    )

    this.getRelatedVideo(id).subscribe(data=>{
        console.log(data);
        this.relatedVideo = data.items;
      },
      err =>{
        console.log(err);
      }
    )

    this.ListOrVideo = "Video";
  }

  apiHit(){
    this.fetchVideos(this.searchKey).subscribe(data=>{
        this.videoList = data.items;
      },
      err =>{
        console.log(err);
      }
    )
  }




  doKeyup(e: string) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.apiHit();
    }, 500);
  }

  doKeydown(){
    clearTimeout(this.timer);
  }

  fetchVideos(query: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}`+            '&maxResults=50' +            '&type=video' +            '&key=AIzaSyDZO84ectyO42qUBE98WxWYO7rVLkNIezE').map(response => response.json())    }
  videoDetail(id){        return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}`+            '&type=video' +            '&key=AIzaSyDZO84ectyO42qUBE98WxWYO7rVLkNIezE')            .map(response => response.json())    }
  getRelatedVideo(id){        return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}`+            '&maxResults=10' +            '&type=video' +            '&key=AIzaSyDZO84ectyO42qUBE98WxWYO7rVLkNIezE')            .map(response => response.json())    }

}
