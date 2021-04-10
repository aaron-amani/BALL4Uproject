var reqURL = "https://kdbsports-nbaplayers.p.rapidapi.com/players/team?name=lakers";
const request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      const main = document.querySelector('div.joueur');
      var response = JSON.parse(this.responseText);
      putSliderImage(response,main);
  }
};


request.open("GET", reqURL);
request.setRequestHeader("X-RapidAPI-Key", "a863ab8093mshc096f61f89dd46ap18df74jsne41a36463df8");
request.setRequestHeader("X-Rapidapi-Host", "kdbsports-nbaplayers.p.rapidapi.com");
request.send();


function putSliderImage(response,main) {

  for (let i = 0; i < 17 ; i++) {
   
    var div1 = document.createElement("div");
    div1.className="sportsmagazine-featured-slider-layer";

    var img = document.createElement('img');
    var div = document.createElement('div');
    var span = document.createElement('span')
    var nomPrenom =document.createElement('h2');
    var span =document.createElement('span');
    var numero =document.createElement('span');
    var position =document.createElement('span');
    var careerPoints =document.createElement('span');
    var careerBlocks =document.createElement('span');
    var carrerAssists =document.createElement('span');
    var careerRebounds =document.createElement('span');

  
    span.setAttribute('class','sportsmagazine-black-transparent');
    div.setAttribute("class","sportsmagazine-featured-caption");
    numero.setAttribute('class','sportsmagazine-color');
    position.setAttribute('class','sportsmagazine-color');
    careerPoints.setAttribute('class','sportsmagazine-color');
    careerBlocks.setAttribute('class','sportsmagazine-color');
    carrerAssists.setAttribute('class','sportsmagazine-color');
    careerRebounds.setAttribute('class','sportsmagazine-color');
    
    img.src=response[i].headShotUrl;
    main.appendChild(img);
    main.appendChild(span);

    nomPrenom.appendChild(document.createTextNode(response[i].firstName+" "+response[i].lastName));
    numero.appendChild(document.createTextNode(response[i].jerseyNumber));
    position.appendChild(document.createTextNode(response[i].position));
    careerPoints.appendChild(document.createTextNode(response[i].careerPoints));
    careerBlocks.appendChild(document.createTextNode(response[i].careerBlocks));
    carrerAssists.appendChild(document.createTextNode(response[i].carrerAssists));
    careerRebounds.appendChild(document.createTextNode(response[i].careerRebounds));

    
    div.appendChild(nomPrenom);
    div.appendChild(numero);
    div.appendChild(position);
    div.appendChild(careerPoints);
    div.appendChild(careerBlocks);
    div.appendChild(carrerAssists);
    div.appendChild(careerRebounds);
    div1.appendChild(div);
    main.appendChild(div1);
  }
}