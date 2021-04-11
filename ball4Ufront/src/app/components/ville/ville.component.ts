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
            const image = document.querySelectorAll('img.ville');
            const h2 = document.querySelectorAll('h2.tags');
            var response = JSON.parse(this.responseText);
            showImage(response,image,h2);
        }
    };
    request.open("GET","https://pixabay.com/api/?key=15492974-061bbda5374d4a3662d9709c3&q=Los+Angeles&image_type=photo&pretty=true");//Ouverture d'un requete
    request.send();//Envoie de la requete
    
  }
  ngOnInit(): void {
  
  }
  
}

function showImage(response: any,image:any,h2:any) {
  //On réalise l'opération un nombre de fois égal au nombre d'images voulues
  for (let i = 0; i < 10; i++) {

    image[i].src=response.hits[i].largeImageURL;//Attribut l'image correspondante
    h2[i].appendChild(document.createTextNode(response.hits[i].tags));//Attache les infos relatives au lieu de la ville
  
  }
  

}




