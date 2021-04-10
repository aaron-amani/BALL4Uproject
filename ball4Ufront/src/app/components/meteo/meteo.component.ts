import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  constructor() { 
    
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const meteo = document.querySelector('div.meteo');
            var response = JSON.parse(this.responseText);
            showMeteo(response,meteo);//Affiche la meteo dans le composant
        }
    };
    request.open("GET","http://api.weatherstack.com/current?access_key=6b4f2e62039bba9e75fe19dfffc7b65d&query=Los Angeles");//Ouvre un requete
    request.send();//L'envoie
    
  }
  ngOnInit(): void {
  }

  render(){}

}

function showMeteo(response: any,meteo:any) {

    var text1 = document.createElement('h1');//Zone de texte 1
    var text2 = document.createElement('h3');//Zone de texte 2
    var text3 = document.createElement('h3');//Zone de texte 3
    
    var temp=document.createTextNode(response.current.temperature+"°");//Variable qui contient la temperature de la ville
    var humidite=document.createTextNode("Humidité : "+response.current.humidity+"%");//Celle qui contient le taux d'humidité
    var dirVent=document.createTextNode("Sens du vent : "+response.current.wind_dir);//Celle pour la direction du vent
    var icon = document.createElement('img');//L'image relatif a la meteo
    icon.setAttribute("style", "height:20%;");//Definit les infos de l'icone
    icon.src=response.current.weather_icons;//Ajuste l'image à la meteo actuelle
    text1.appendChild(temp);//Ajoute la temperature a la zone de texte 1
    text2.appendChild(humidite);//Ajoute le taux d'humidité a la zone 2
    text3.appendChild(dirVent);//Ajoute la direction du vent a la zone 3
    //Ci-dessous, definit le style des zones de texte
    text1.setAttribute("style","color:white;");
    text2.setAttribute("style","color:white;");
    text3.setAttribute("style","color:white;");
    //Ajoute toute les infos dans la variable principale
    meteo.appendChild(text1);
    meteo.appendChild(text2);
    meteo.appendChild(text3);
    meteo.appendChild(icon);

}
