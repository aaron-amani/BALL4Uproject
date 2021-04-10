import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  constructor() { 

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const ville = document.querySelector('div.sportsmagazine-featured-slider');
            var response = JSON.parse(this.responseText);
            showImage(response,ville);
        }
    };
    request.open("GET","https://pixabay.com/api/?key=15492974-061bbda5374d4a3662d9709c3&q=Los+Angeles&image_type=photo&pretty=true");
    request.send();
    
  }
  ngOnInit(): void {
  
  }
  
}

function showImage(response: any,ville:any) {

  for (let i = 0; i < 25; i++) {

    var div1 = document.createElement('div');
    var span = document.createElement('span');
    var image = document.createElement('img');
  
    var div2 = document.createElement('div');
    var h2 = document.createElement('h2');

    

    div1.className="sportsmagazine-featured-slider-layer";

    div2.className="sportsmagazine-featured-caption";
    image.src=response.hits[i].largeImageURL;
    span.className ="sportsmagazine-black-transparent";
    
    div1.appendChild(image);
    div1.appendChild(span);
    h2.appendChild(document.createTextNode(response.hits[i].tags));
    div2.appendChild(h2);
    div1.appendChild(div2);
    ville.appendChild(div1);
  }
  

}


