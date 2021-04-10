import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor() { 

    var channelID = "UC8CSt-oVqy8pUAoKSApTxQw";//id de la chaine des lakers
    var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";//url permettant de recuperer une chaine youtube
    var request = new XMLHttpRequest();
    //creation d'un iframe qui contiendra la video
    request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          var video = document.querySelectorAll("iframe#video");
          var response = JSON.parse(this.responseText);
          getVideo(response,video);
      }
  };
    //ouverture de la requette et envoi
  request.open("GET","https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID);
  request.send();

  }

  ngOnInit(): void {
  }

}
//Fonction pour recuperer les videos
function getVideo(response: any,video: any) {
  //recupere l'id des video a afficher et creer un lien
  for (let i = 0; i < video.length; i++) {
    var link = response.items[i].link;
    var id = link.substr(link.indexOf("=")+1);
    video[i].setAttribute("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
  }
}
