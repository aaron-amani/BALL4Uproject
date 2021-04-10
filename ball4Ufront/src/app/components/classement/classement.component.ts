import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  constructor() {

    //lien de requete de l'API
    var reqURL = "https://api-basketball.p.rapidapi.com/standings?league=12&season=2020-2021&group=Western%20Conference";
    const request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var main = document.querySelectorAll(".ranking-content-row");
        var response = JSON.parse(this.responseText);
        //Affiche le classement
        getClassement(response,main);
      }
    };
  
    //Realise la requete
    request.open("GET", reqURL); //Lien
    request.setRequestHeader("X-RapidAPI-Key", "a863ab8093mshc096f61f89dd46ap18df74jsne41a36463df8");//Cle de la requete
    request.setRequestHeader("X-Rapidapi-Host", "api-basketball.p.rapidapi.com");//Host de la requete
    request.send();//Envoie de la requete

   }

  ngOnInit(): void {
  }

}

function getClassement(response: any,main:any) {
  //affiche les 15 equipes du classement
  for (let i = 0; i < 15; i++) {
    //Declaration des variables
    var positionLi = document.createElement('li');
    var imageLi = document.createElement('li');
    var totalMatchLi = document.createElement('li');
    var totalGagnerLi = document.createElement('li');
    var TotalPointLi = document.createElement('li');
    var div = document.createElement('div');
    var span = document.createElement('span');


    var positionTxt=document.createTextNode(response.response[0][i].position);
    var logo = document.createElement('img');
    logo.src=response.response[0][i].team.logo;//Recuperation du logo de l'équipe
    
    var totalMatchTxt=document.createTextNode(response.response[0][i].games.played);
    var totalGagnerTxt=document.createTextNode(response.response[0][i].games.win.total);
    var TotalPointTxt=document.createTextNode(response.response[0][i].games.lose.total);
    span.appendChild(document.createTextNode(response.response[0][i].team.name));

    //Attache les différents elements du classemtn
    div.setAttribute("class","ranking-logo");
    div.appendChild(span);
    //ci dessous attache le texte au componant
    positionLi.appendChild(positionTxt);
    imageLi.appendChild(logo);//Logo
    imageLi.appendChild(div);
    totalMatchLi.appendChild(totalMatchTxt);//Total de matchs joués
    totalGagnerLi.appendChild(totalGagnerTxt);//Total de matchs gagnés
    TotalPointLi.appendChild(TotalPointTxt);//Total de points
    
    main[i].appendChild(positionLi);
    main[i].appendChild(imageLi);
    main[i].appendChild(totalMatchLi);
    main[i].appendChild(totalGagnerLi);
    main[i].appendChild(TotalPointLi);

  }
  

}
