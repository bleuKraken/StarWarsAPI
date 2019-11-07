

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
  for (var counter = 0; counter <= 1; counter++) {
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
  if(characterPicker == 17)
  {
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
    document.getElementById('name').innerHTML = dataParsed.name;

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

    /*Find each class and add content. Each class is used twice, once for desktop and one for mobile. */
    for (var counter = 0; counter <= 1; counter++) {
      characterIdNumber[counter].innerHTML = characterPicker;
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

    //For every link that shows, display that episode title
    var movieCounter = 0;
    var episodePicker = 0;

    var stringMovieLink = [
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/7/",
      "https://swapi.co/api/films/8/",
      "https://swapi.co/api/films/9/"
    ];

    var arrayFilmLength = dataParsed.films.length;
    //ARRAYS
    var romanNumber = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var episodeTitle = ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens", "The Last Jedi", "The Rise of Skywalker"];

    for (var counter = 0; counter < arrayFilmLength; counter++) {
      var episodePicker = dataParsed.films[counter];
      if (episodePicker == "https://swapi.co/api/films/1/") {
        movieCounter = 1;
        episodePicker = movieCounter - 1;
        document.getElementById('trailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('episode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('episode' + movieCounter + 'TitleShow').innerHTML = "The Phantom Menace";
        document.getElementById('mobileTrailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "hello";
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('mobileEpisode' + movieCounter + 'TitleShow').innerHTML = "The Phantom Menace";
      }

      if (episodePicker == "https://swapi.co/api/films/2/") {
        movieCounter = 2;
        episodePicker = movieCounter - 1;
        document.getElementById('trailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('episode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('episode' + movieCounter + 'TitleShow').innerHTML = "Attack of the Clones";
        document.getElementById('mobileTrailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "hello";
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('mobileEpisode' + movieCounter + 'TitleShow').innerHTML = "Attack of the Clones";
      }

      if (episodePicker == "https://swapi.co/api/films/3/") {
        movieCounter = 3;
        episodePicker = movieCounter - 1;
        document.getElementById('trailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('episode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('episode' + movieCounter + 'TitleShow').innerHTML = "Revenge of the Sith";
        document.getElementById('mobileTrailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "hello";
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('mobileEpisode' + movieCounter + 'TitleShow').innerHTML = "Revenge of the Sith";
      }

      if (episodePicker == "https://swapi.co/api/films/4/") {
        movieCounter = 4;
        episodePicker = movieCounter - 1;
        document.getElementById('trailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('episode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('episode' + movieCounter + 'TitleShow').innerHTML = "A New Hope";
        document.getElementById('mobileTrailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "hello";
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('mobileEpisode' + movieCounter + 'TitleShow').innerHTML = "A New Hope";
      }

      if (episodePicker == "https://swapi.co/api/films/5/") {
        movieCounter = 5;
        episodePicker = movieCounter - 1;
        document.getElementById('trailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('episode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('episode' + movieCounter + 'TitleShow').innerHTML = "The Empire Strikes Back";
        document.getElementById('mobileTrailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "hello";
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('mobileEpisode' + movieCounter + 'TitleShow').innerHTML = "The Empire Strikes Back";
      }

      if (episodePicker == "https://swapi.co/api/films/6/") {
        movieCounter = 6;
        episodePicker = movieCounter - 1;
        document.getElementById('trailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('episode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('episode' + movieCounter + 'TitleShow').innerHTML = "Return of the Jedi";
        document.getElementById('mobileTrailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "hello";
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('mobileEpisode' + movieCounter + 'TitleShow').innerHTML = "Return of the Jedi";
      }

      if (episodePicker == "https://swapi.co/api/films/7/") {
        movieCounter = 7;
        episodePicker = movieCounter - 1;
        document.getElementById('trailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('episode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('episode' + movieCounter + 'TitleShow').innerHTML = "The Force Awakens";
        document.getElementById('mobileTrailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "hello";
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('mobileEpisode' + movieCounter + 'TitleShow').innerHTML = "The Force Awakens";
      }

      if (episodePicker == "https://swapi.co/api/films/8/") {
        movieCounter = 8;
        episodePicker = movieCounter - 1;
        document.getElementById('trailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('episode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('episode' + movieCounter + 'TitleShow').innerHTML = "The Last Jedi";
        document.getElementById('mobileTrailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "hello";
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('mobileEpisode' + movieCounter + 'TitleShow').innerHTML = "The Last Jedi";
      }

      if (episodePicker == "https://swapi.co/api/films/9/") {
        movieCounter = 9;
        episodePicker = movieCounter - 1;
        document.getElementById('trailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('episode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('episode' + movieCounter + 'TitleShow').innerHTML = "The Rise of Skywalker";
        document.getElementById('mobileTrailerLink' + movieCounter).classList.remove("d-none");
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "hello";
        document.getElementById('mobileEpisode' + movieCounter).innerHTML = "Episode " + romanNumber[episodePicker] + ":";
        document.getElementById('mobileEpisode' + movieCounter + 'TitleShow').innerHTML = "The Rise of Skywalker";
      }
    }
  }
  // ######################### PLANET INFO END ############################################################
