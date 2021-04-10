import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  constructor() { 

    var request = new XMLHttpRequest();
    //Creation du slider contenant les images obtenues par la requete
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const ville = document.querySelector('div.sportsmagazine-featured-slider');
            var response = JSON.parse(this.responseText);
            showImage(response,ville);
        }
    };
    request.open("GET","https://pixabay.com/api/?key=15492974-061bbda5374d4a3662d9709c3&q=Los+Angeles&image_type=photo&pretty=true");//Ouverture d'un requete
    request.send();//Envoie de la requete
    
  }
  ngOnInit(): void {
  
  }
  
}

function showImage(response: any,ville:any) {
  //On réalise l'opération un nombre de fois égal au nombre d'images voulues
  for (let i = 0; i < 25; i++) {
    //Creation des variables 
    var div1 = document.createElement('div');
    var span = document.createElement('span');
    var image = document.createElement('img');
    var div2 = document.createElement('div');
    var h2 = document.createElement('h2');

    

    div1.className="sportsmagazine-featured-slider-layer";//Attribution du nom de la class utilisée dans le code html

    div2.className="sportsmagazine-featured-caption";//Attribution du nom de la classe utilisée dans le code html
    image.src=response.hits[i].largeImageURL;//Recuperation de l'image et attribution dans la variable 
    span.className ="sportsmagazine-black-transparent";//Attribution du nom de la classe utilisée dans le code html
    
    //Attache les attributions réalisées plus haut dans les variables
    div1.appendChild(image);
    div1.appendChild(span);
    h2.appendChild(document.createTextNode(response.hits[i].tags));
    div2.appendChild(h2);
    div1.appendChild(div2);
    ville.appendChild(div1);
  }
  

}


