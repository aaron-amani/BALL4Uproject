import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendrier-match',
  templateUrl: './calendrier-match.component.html',
  styleUrls: ['./calendrier-match.component.css']
})

export class CalendrierMatchComponent implements OnInit {
  
  loadAPI: Promise<any>;
  
  constructor() { 
      const url = 'https://tv-sports.fr/widget.js'; 
      this.loadAPI = new Promise((resolve) => {
          console.log('resolving promise...');
          loadScript(url);
      });
    
  }

  ngOnInit(): void {
  }
  
}

function loadScript(url:any) {
  console.log('preparing to load...')
  let node = document.createElement('script');
  node.src = url;
  node.type = 'text/javascript';
  node.async = true;
  node.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(node);
}

