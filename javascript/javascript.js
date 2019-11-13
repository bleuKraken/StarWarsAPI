const NUMBER_OF_DISPLAYS = 2;

// ######################### PLANET INFO START #################################################################
// API key and url
var requestPlanetURL = "https://swapi.co/api/planets/1";
// Have to make a new request
var requestPlanet = new XMLHttpRequest();
//I am going to GET, THIS URL
requestPlanet.open('GET', requestPlanetURL);
//What type is it?
requestPlanet.responseType = 'text';
//Send!
requestPlanet.send();

//Request fulfilled, whats happens on page load and when it returns?
requestPlanet.onload = function() {
  var planetDataResponse = requestPlanet.response;
  var planetDataParsed = JSON.parse(planetDataResponse);
  var planetDiameterKm = planetDataParsed.diameter;
  var planetDiameterMi = planetDiameterKm / 1.609344;
  planetDiameterMi = planetDiameterMi.toFixed(2);

  var planetName = document.getElementsByClassName('planetName');
  var planetTerrain = document.getElementsByClassName('terrain');
  var planetDiameter = document.getElementsByClassName('planetDiameter');
  var planetDiameterInMiles = document.getElementsByClassName('planetDiameterMi');
  var planetDaysInYear = document.getElementsByClassName('daysInYear');
  var planetHoursInDay = document.getElementsByClassName('hoursInDay');
  var planetGravity = document.getElementsByClassName('gravity');
  var planetClimate = document.getElementsByClassName('climate');
  var planetPopulation = document.getElementsByClassName('population');

  /*Find each class and add content. Each class is used twice, once for desktop and one for mobile. */
  for (var counter = 0; counter <= NUMBER_OF_DISPLAYS; counter++) {
    planetName[counter].innerHTML = planetDataParsed.name;
    planetTerrain[counter].innerHTML = planetDataParsed.terrain;
    planetDiameter[counter].innerHTML = planetDataParsed.diameter;
    planetDiameterInMiles[counter].innerHTML = planetDiameterMi;
    planetDaysInYear[counter].innerHTML = planetDataParsed.orbital_period;
    planetHoursInDay[counter].innerHTML = planetDataParsed.rotation_period;
    planetGravity[counter].innerHTML = planetDataParsed.gravity;
    planetClimate[counter].innerHTML = planetDataParsed.climate;
    planetPopulation[counter].innerHTML = planetDataParsed.population;
  }
}
// ######################### PLANET INFO END #################################################################

// ######################### CHARACTER INFO START ############################################################
var characterPicker = (Math.floor(Math.random() * 89) + 1);
if (characterPicker == 17) {
  characterPicker += 1;
}
// API key and url
var requestURL = "https://swapi.co/api/people/" + characterPicker + "/";
//var requestURL = "https://swapi.co/api/people/2/"; //TODO: DELTE THIS, USE LINE ABOVE INSTEAD

// Have to make a new request
var request = new XMLHttpRequest();
//I am going to GET, THIS URL
request.open('GET', requestURL);
//What type is it?
request.responseType = 'text';
//Send!
request.send();

//Request fulfilled, whats happens on page load and when it returns?
request.onload = function() {
  var dataResponse = request.response;
  var dataParsed = JSON.parse(dataResponse);
  // Get units and convert
  var heightCm = dataParsed.height;
  var massKg = dataParsed.mass;
  //Converted vars
  parseFloat(heightCm);
  heightIn = heightCm / 2.54;
  var massLb = massKg * 2.2;
  // Decimal place value
  heightIn = heightIn.toFixed(2);
  massLb = massLb.toFixed(2)
  var filmTotal = dataParsed.films.length;
  //document.getElementsByClassName('name').innerHTML = dataParsed.name;
  var characterName = document.getElementsByClassName('name');
  var characterIdNumber = document.getElementsByClassName('character-id-number');
  var characterHeight = document.getElementsByClassName('character-height');
  var characterHeightIn = document.getElementsByClassName('character-heightIn');
  var characterMass = document.getElementsByClassName('character-mass');
  var characterMassLb = document.getElementsByClassName('character-massLb');
  var characterHair = document.getElementsByClassName('character-hair');
  var characterEyes = document.getElementsByClassName('character-eyes');
  var characterSkin = document.getElementsByClassName('character-skin');
  var characterBirth = document.getElementsByClassName('character-birth');
  var characterGender = document.getElementsByClassName('character-gender');

  //Add names to classes. Two diffrent displays have the same name
  for (var counter = 0; counter <= 1; counter++) {
    characterName[counter].innerHTML = dataParsed.name;

  }

  /*Find each class and add content. Each class is used twice, once for desktop and one for mobile. */
  for (var counter = 0; counter <= NUMBER_OF_DISPLAYS; counter++) {
    characterIdNumber[counter].innerHTML = " " + characterPicker;
    characterEyes[counter].innerHTML = dataParsed.eye_color;
    characterHeight[counter].innerHTML = dataParsed.height;
    characterHeightIn[counter].innerHTML = heightIn;
    characterMass[counter].innerHTML = dataParsed.mass;
    characterMassLb[counter].innerHTML = massLb;
    characterHair[counter].innerHTML = dataParsed.hair_color;
    characterSkin[counter].innerHTML = dataParsed.skin_color;
    characterBirth[counter].innerHTML = dataParsed.birth_year;
    characterGender[counter].innerHTML = dataParsed.gender;
  }

  var episodePicker = 0;
  var arrayFilmLength = dataParsed.films.length;
  //ARRAYS
  var romanNumber = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var episodeTitle = ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens", "The Last Jedi", "The Rise of Skywalker"];

  // For amount of movies this person shows up in, run until they are all displayed.
  for (var counter = 0; counter < arrayFilmLength; counter++) {
    var episodePicker = dataParsed.films[counter];
    //Check which movie value is in the location of array [] episode picker
    for (var movieCounter = 1; movieCounter <= 9; movieCounter++) {
      if (episodePicker == "https://swapi.co/api/films/" + movieCounter + "/") {
        episodePicker = movieCounter - 1;
        document.getElementById('trailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('episode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('episode' + movieCounter + 'TitleShow').innerHTML = episodeTitle[episodePicker];
        document.getElementById('mobileTrailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "hello";
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('mobileEpisode' + movieCounter + 'TitleShow').innerHTML = episodeTitle[episodePicker];
        //duplicate.Possible shrink.
        document.getElementById('mobileLandscapeTrailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('mobileLandscapeEpisode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('mobileLandscapeEpisode' + movieCounter + 'TitleShow').innerHTML = episodeTitle[episodePicker];
      }
    }
  }
}
// ######################### PLANET INFO END ############################################################

// TODO: REMOVE ME

function SearchButtonPressed() {
  var characterFound = false;
  //Get name entered
  var characterSearch = document.getElementById("searchBox").value;
  var characterListAPI = [
    ["Luke Skywalker", 1],
    [ "C-3PO", 2],
    ["R2-D2", 3],
    ["Darth Vader", 4],
    ["Leia Organa", 5],
    ["Owen Lars", 6],
    ["Beru Whitesun lars", 7],
    ["R5-D4", 8],
    ["Biggs Darklighter", 9],
    ["Obi-Wan Kenobi", 10],

    ["Anakin Skywalker", 11],
    ["Wilhuff Tarkin", 12],
    ["Chewbacca", 13],
    ["Han Solo", 14],
    ["Greedo", 15],
    ["Jabba Desilijic Tiure", 16],
    ["HEY, YOU HAVE BEEN ASLEEP IN A COMA FOR THE LAST FEW YEARS. ENCRYPTED MESSGAGE. YOUR REALITY IS FAKE.", 17],
    ["Wedge Antilles", 18],
    ["Jek Tono Porkins", 19],
    ["Yoda", 20],

    ["Palpatine", 21],
    ["Boba Fett", 22],
    ["IG-88", 23],
    ["Bossk", 24],
    ["Lando Calrissian", 25],
    ["Lobot", 26],
    ["Ackbar", 27],
    ["Mon Mothma", 28],
    ["Arvel Crynyd", 29],
    ["Wicket Systri Warrick", 30],


    ["Nien Nunb", 31],
    ["Qui-Gon Jinn", 32],
    ["Nute Gunray", 33],
    ["Finis Valorum", 34],

    ["Padmé Amidala", 35],

    ["Jar Jar Binks", 36],
    ["Roos Tarpals", 37],
    ["Rugor Nass", 38],
    ["Ric Olié", 39],
    ["Watto", 40],

    ["Name", 41],
    ["Name", 42],
    ["Name", 43],
    ["Name", 44],
    ["Name", 45],
    ["Name", 46],
    ["Name", 47],
    ["Name", 48],
    ["Name", 49],
    ["Name", 50],

    ["Name", 51],
    ["Name", 52],
    ["Name", 53],
    ["Name", 54],
    ["Name", 55],
    ["Name", 56],
    ["Name", 57],
    ["Name", 58],
    ["Name", 59],
    ["Name", 60],

    ["Name", 61],
    ["Name", 62],
    ["Name", 63],
    ["Name", 64],
    ["Name", 65],
    ["Name", 66],
    ["Name", 67],
    ["Name", 68],
    ["Name", 69],
    ["Name", 70],

    ["Name", 71],
    ["Name", 72],
    ["Name", 73],
    ["Name", 74],
    ["Name", 75],
    ["Name", 76],
    ["Name", 77],
    ["Name", 78],
    ["Name", 79],
    ["Name", 80],

    ["Name", 81],
    ["Name", 82],
    ["Name", 83],
    ["Name", 84],
    ["Name", 85],
    ["Name", 86],
    ["Name", 87]


  ];

  //Running this loop about 87 times!
  for(var counter = 0; counter <= characterListAPI.length - 1; counter++)
  {
    if(characterSearch === characterListAPI[counter][0])
    {
      characterFound = true;
      prompt("Its a match! Person: " + characterListAPI[counter][0]);
    }
  }



}


























// ################################### POINT OF NO RETURN ##############################################
