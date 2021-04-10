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
            showMeteo(response,meteo);
        }
    };
    request.open("GET","http://api.weatherstack.com/current?access_key=6b4f2e62039bba9e75fe19dfffc7b65d&query=Los Angeles");
    request.send();
    
  }
  ngOnInit(): void {
  }

  render(){}

}

function showMeteo(response: any,meteo:any) {

    var text1 = document.createElement('h1');
    var text2 = document.createElement('h3');
    var text3 = document.createElement('h3');
    
    var temp=document.createTextNode(response.current.temperature+"°");
    var humidite=document.createTextNode("Humidité : "+response.current.humidity+"%");
    var dirVent=document.createTextNode("Sens du vent : "+response.current.wind_dir);
    var icon = document.createElement('img');
    icon.setAttribute("style", "height:20%;");
    icon.src=response.current.weather_icons;
    text1.appendChild(temp);
    text2.appendChild(humidite);
    text3.appendChild(dirVent);
    text1.setAttribute("style","color:white;");
    text2.setAttribute("style","color:white;");
    text3.setAttribute("style","color:white;");
    meteo.appendChild(text1);
    meteo.appendChild(text2);
    meteo.appendChild(text3);
    meteo.appendChild(icon);

}
