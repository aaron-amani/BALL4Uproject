import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor() { 

    var channelID = "UC8CSt-oVqy8pUAoKSApTxQw";
    var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          var video = document.querySelectorAll("iframe#video");
          var response = JSON.parse(this.responseText);
          getVideo(response,video);
      }
  };
  request.open("GET","https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID);
  request.send();

  }

  ngOnInit(): void {
  }

}

function getVideo(response: any,video: any) {

  for (let i = 0; i < video.length; i++) {
    var link = response.items[i].link;
    var id = link.substr(link.indexOf("=")+1);
    video[i].setAttribute("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
  }
}