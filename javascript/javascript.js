const NUMBER_OF_DISPLAYS = 2;


/*
READ ME
Idea - recreate javascript where on first load anykin skywaler loads.

Clicking on button generates random person.

Clicking on search, loads with searched person.

First load created 2 request,
Second load would make 2 request as well.
THird load would make another 2 request. 

*/



// ######################### CHARACTER INFO START ############################################################
var characterPicker = (Math.floor(Math.random() * 89) + 1);
if (characterPicker == 17) {
  characterPicker += 1;
}
// API key and url

var requestURL = "https://swapi.co/api/people/" + characterPicker + "/";
var defaultrequestURL = "https://swapi.co/api/people/5/";

var updatedRequestURL = " "; // Global variable, used for search action.





var boolPlanetFound = false;
var characterChosenPlanet;









MyRequest();

function MyRequest() {
if (updatedRequestURL === " ") {
  // Have to make a new request
  var request = new XMLHttpRequest();
  //I am going to GET, THIS URL
  request.open('GET', requestURL);
} else {
  request.open('GET', updatedRequestURL);
}

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
  characterChosenPlanet = dataParsed.homeworld;


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
  var characterHomePlanet = document.getElementsByClassName('character-homePlanet');

  //Add names to classes. Two diffrent displays have the same name
  for (var counter = 0; counter <= 1; counter++) {
    characterName[counter].innerHTML = dataParsed.name;
  }

  var homePlanets = [
    ["Tatooine", 1],
    ["Alderaan", 2],
    ["name", 3],
    ["name", 4],
    ["name", 5],
    ["Bespin", 6],
    ["Endor", 7],
    ["Naboo", 8],
    ["Coruscant", 9],
    ["Kamino", 10],

    ["Geonosis", 11],
    ["Utapau", 12],
    ["name", 13],
    ["Kashyyyk", 14],
    ["name", 15],
    ["name", 16],
    ["name", 17],
    ["Cato Neimoidia", 18],
    ["name", 19],
    ["Stewjon", 20],

    ["Eriadu", 21],
    ["Corellia", 22],
    ["Rodia", 23],
    ["Nal Hutta", 24],
    ["name", 25],
    ["Bestine IV", 26],
    ["name", 27],
    ["name", 28],
    ["Trandosha", 29],
    ["Socorro", 30],

    ["Mon Cala", 31],
    ["Chandrila", 32],
    ["Sullust", 33],
    ["Toydaria", 34],
    ["Malastare", 35],
    ["Dathomir", 36],
    ["Ryloth", 37],
    ["Aleen Minor", 38],
    ["Vulpter", 39],
    ["Troiken", 40],

    ["Tund", 41],
    ["Haruun Kal", 42],
    ["Cerea", 43],
    ["Glee Anselm", 44],
    ["Iridonia", 45],
    ["Tholoth", 46],
    ["Iktotch", 47],
    ["Quermia", 48],
    ["Dorin", 49],
    ["Champala", 50],

    ["Mirial", 51],
    ["Serenno", 52],
    ["Concord Dawn", 53],
    ["Zolan", 54],
    ["Ojom", 55],
    ["Skako", 56],
    ["Muunilinst", 57],
    ["Shili", 58],
    ["Kalee", 59],
    ["Umbara", 60],

    ["name", 61]
  ];

  //TODO: This checks if it is found, seems uneccasry but kinda does. Can be improved.
    if (characterChosenPlanet) {
      //planet found true
      boolPlanetFound = true;
    }

  // Home planet is found
  if (boolPlanetFound) {
    // Making new request if planet is found
    var requestPlanetURL = characterChosenPlanet;
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
        characterHomePlanet[counter].innerHTML = planetDataParsed.name;
      }
    }
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
}

// ######################### CHARACTER INFO END ############################################################









// ############################## SEARCH FUNCTION, BUTTON PRESSED ############################################
function SearchButtonPressed() {
  updatedRequestURL = "nothing";
  var characterFound = false;
  //Get name entered
  var characterSearch = document.getElementById("searchBox").value;

  // List of Planets.
  var characterListAPI = [
    ["Luke Skywalker", 1],
    ["C-3PO", 2],
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
    [" DAM, NOTHING HERE. WHO IS NUMBER 17?", 17],
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

    ["Sebulba", 41],
    ["Quarsh Panaka", 42],
    ["Shmi Skywalker", 43],
    ["Darth Maul", 44],
    ["Bib Fortuna", 45],
    ["Ayla Secura", 46],
    ["Ratts Tyerell", 47],
    ["Dud Bolt", 48],
    ["Gasgano", 49],
    ["Ben Quadinaros", 50],

    ["Mace Windu", 51],
    ["Ki-Adi-Mundi", 52],
    ["Kit Fisto", 53],
    ["Eeth Koth", 54],
    ["Adi Gallia", 55],
    ["Saesee Tiin", 56],
    ["Yarael Poof", 57],
    ["Plo Koon", 58],
    ["Mas Amedda", 59],
    ["Gregar Typho", 60],

    ["Cordé", 61],
    ["Cliegg Lars", 62],
    ["Poggle the Lesser", 63],
    ["Luminara Unduli", 64],
    ["Barriss Offee", 65],
    ["Dormé", 66],
    ["Dooku", 67],
    ["Bail Prestor Organa", 68],
    ["Jango Fett", 69],
    ["Zam Wesell", 70],

    ["Dexter Jettster", 71],
    ["Lama Su", 72],
    ["Taun We", 73],
    ["Jocasta Nu", 74],
    ["R4-P17", 75],
    ["Wat Tambor", 76],
    ["San Hill", 77],
    ["Shaak Ti", 78],
    ["Grievous", 79],
    ["Tarfful", 80],

    ["Raymus Antilles", 81],
    ["Sly Moore", 82],
    ["Tion Medon", 83],
    ["Finn", 84],
    ["Rey", 85],
    ["Poe Dameron", 86],
    ["BB8", 87],
    ["Captain Phasma", 88]
  ];

  //Running this loop about 87 times!
  for (var counter = 0; counter <= characterListAPI.length - 1; counter++) {
    // If the character is found in the list
    if (characterSearch === characterListAPI[counter][0]) {
      //WHO THE SEARCH FOUND
      characterFound = true;

      prompt("Its a match! Person: " + characterListAPI[counter][0] + ", Number: " + characterListAPI[counter][1]);
      updatedRequestURL = "https://swapi.co/api/people/" + characterListAPI[counter][1] + "/";

      prompt("New url: " + updatedRequestURL);
    }
  }




 // MAKE ENTIRE NEW REQUEST
 if(characterFound)
 {



















 }
























  //Nothing found from loop
  if (characterFound === false) {
    //NOTHING FOUND IN SEARCH
    prompt("No user named " + characterSearch);
  }


  return updatedRequestURL;
}
// ############################# END, SEARCH FUNCTION BUTTON PRESSED ###########################







// ################################### POINT OF NO RETURN ##############################################
