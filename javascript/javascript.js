const NUMBER_OF_DISPLAYS = 2;

var characterPicker = 1;
var updatedRequestURL = " "; // Global variable, used for search action.
var boolFirstLoad = true;
var requestURL;
var boolSearchTerm;
// List of People.
var arrCharacterNames = ["Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader", "Leia Organa", "Owen Lars", "Beru Whitesun lars", "R5-D4", "Biggs Darklighter", "Obi-Wan Kenobi", "Anakin Skywalker", "Wilhuff Tarkin", "Chewbacca", "Han Solo", "Greedo",
  "Jabba Desilijic Tiure", " DAM, NOTHING HERE. WHO IS NUMBER 17?", "Wedge Antilles", "Jek Tono Porkins", "Yoda", "Palpatine", "Boba Fett", "IG-88", "Bossk", "Lando Calrissian", "Lobot", "Ackbar", "Mon Mothma", "Arvel Crynyd", "Wicket Systri Warrick", "Nien Nunb",
  "Qui-Gon Jinn", "Nute Gunray", "Finis Valorum", "Padmé Amidala", "Jar Jar Binks", "Roos Tarpals", "Rugor Nass", "Ric Olié", "Watto", "Sebulba", "Quarsh Panaka", "Shmi Skywalker", "Darth Maul", "Bib Fortuna", "Ayla Secura", "Ratts Tyerell", "Dud Bolt", "Gasgano",
  "Ben Quadinaros", "Mace Windu", "Ki-Adi-Mundi", "Kit Fisto", "Eeth Koth", "Adi Gallia", "Saesee Tiin", "Yarael Poof", "Plo Koon", "Mas Amedda", "Gregar Typho", "Cordé", "Cliegg Lars", "Poggle the Lesser", "Luminara Unduli", "Barriss Offee", "Dormé", "Dooku", "Bail Prestor Organa",
  "Jango Fett", "Zam Wesell", "Dexter Jettster", "Lama Su", "Taun We", "Jocasta Nu", "R4-P17", "Wat Tambor", "San Hill", "Shaak Ti", "Grievous", "Tarfful", "Raymus Antilles", "Sly Moore", "Tion Medon", "Finn", "Rey", "Poe Dameron", "BB8", "Captain Phasma",
];


//Run the code to load content
autocomplete(document.getElementById("myInput"), arrCharacterNames);
MyRequest();

// ######################### FUNCTIONS DECLARED BELOW ############################################################

function ButtonReload() {
  /* Generate New Characte button is pressed.
  */
  boolFirstLoad = false;
  boolSearchTerm = false;
  //Clear movies section
  for (var counter = 1; counter <= 9; counter++) {
    document.getElementById('trailerLink' + counter).classList.add("d-none");
    document.getElementById('mobileTrailerLink' + counter).classList.add("d-none");
    document.getElementById('mobileLandscapeTrailerLink' + counter).classList.add("d-none");
  }
  MyRequest();
}

function ReloadWithSearch() {
  /* User is searching for person. Display content
     with the person seached.
  */
  boolFirstLoad = false;
  boolSearchTerm = true;
  //Clear movies section
  for (var counter = 1; counter <= 9; counter++) {
    document.getElementById('trailerLink' + counter).classList.add("d-none");
    document.getElementById('mobileTrailerLink' + counter).classList.add("d-none");
    document.getElementById('mobileLandscapeTrailerLink' + counter).classList.add("d-none");
  }
  MyRequest();
}

function MyRequest() {
  /* Send request to API,
     retrieve the data. Then populate content into site.
  */
  var boolPlanetFound = false;
  var characterChosenPlanet;
  var request = new XMLHttpRequest();
  // Check if the page is first loaded, button pressed, or search used.
  if (boolFirstLoad) {
    requestURL = "https://swapi.co/api/people/1/";
  } else if (boolSearchTerm) {
    requestURL = updatedRequestURL;
  } else {
    // Pick a random person to dispaly
    characterPicker = (Math.floor(Math.random() * 89) + 1);
    if (characterPicker == 17) {
      characterPicker += 1;
    }
    requestURL = "https://swapi.co/api/people/" + characterPicker + "/";
  }
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
    characterChosenPlanet = dataParsed.homeworld;
    var episodePicker = 0;
    var arrayFilmLength = dataParsed.films.length;
    //ARRAYS
    var romanNumber = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var episodeTitle = ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens", "The Last Jedi", "The Rise of Skywalker"];

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

    // Multi Di Array of planets known.
    var homePlanets = [
      ["Tatooine", 1],
      ["Geonosis", 11],
      ["Eriadu", 21],
      ["Mon Cala", 31],
      ["Tund", 41],
      ["Mirial", 51],
      ["Alderaan", 2],
      ["Utapau", 12],
      ["Corellia", 22],
      ["Chandrila", 32],
      ["Haruun Kal", 42],
      ["Serenno", 52],
      ["name", 3],
      ["name", 13],
      ["Rodia", 23],
      ["Sullust", 33],
      ["Cerea", 43],
      ["Concord Dawn", 53],
      ["name", 4],
      ["Kashyyyk", 14],
      ["Nal Hutta", 24],
      ["Toydaria", 34],
      ["Glee Anselm", 44],
      ["Zolan", 54],
      ["name", 5],
      ["name", 15],
      ["name", 25],
      ["Malastare", 35],
      ["Iridonia", 45],
      ["Ojom", 55],
      ["Bespin", 6],
      ["name", 16],
      ["Bestine IV", 26],
      ["Dathomir", 36],
      ["Tholoth", 46],
      ["Skako", 56],
      ["Endor", 7],
      ["name", 17],
      ["name", 27],
      ["Ryloth", 37],
      ["Iktotch", 47],
      ["Muunilinst", 57],
      ["Naboo", 8],
      ["Cato Neimoidia", 18],
      ["name", 28],
      ["Aleen Minor", 38],
      ["Quermia", 48],
      ["Shili", 58],
      ["Coruscant", 9],
      ["name", 19],
      ["Trandosha", 29],
      ["Vulpter", 39],
      ["Dorin", 49],
      ["Kalee", 59],
      ["Kamino", 10],
      ["Stewjon", 20],
      ["Socorro", 30],
      ["Troiken", 40],
      ["Champala", 50],
      ["Umbara", 60],
      ["name", 61]
    ];

    //Add names to classes. Two diffrent displays have the same name
    characterName[0].innerHTML = dataParsed.name;

    // Check is the planet is possible to find.
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
// ##### CHARACTER INFO END ############





function SearchButtonPressed() {
  /* After a characters name has been entered,
     and clicks of the "search" button. These actions are ran.
  */
  var characterFound = false;
  //Grab what user entered
  var characterSearch = document.getElementById("myInput").value;
  // List of Planets.
  var characterListAPI = [
    ["Luke Skywalker", 1],
    ["Anakin Skywalker", 11],
    ["Palpatine", 21],
    ["Nien Nunb", 31],
    ["Sebulba", 41],
    ["Mace Windu", 51],
    ["Cordé", 61],
    ["Dexter Jettster", 71],
    ["Raymus Antilles", 81],
    ["C-3PO", 2],
    ["Wilhuff Tarkin", 12],
    ["Boba Fett", 22],
    ["Qui-Gon Jinn", 32],
    ["Quarsh Panaka", 42],
    ["Ki-Adi-Mundi", 52],
    ["Cliegg Lars", 62],
    ["Lama Su", 72],
    ["Sly Moore", 82],
    ["R2-D2", 3],
    ["Chewbacca", 13],
    ["IG-88", 23],
    ["Nute Gunray", 33],
    ["Shmi Skywalker", 43],
    ["Kit Fisto", 53],
    ["Poggle the Lesser", 63],
    ["Taun We", 73],
    ["Tion Medon", 83],
    ["Darth Vader", 4],
    ["Han Solo", 14],
    ["Bossk", 24],
    ["Finis Valorum", 34],
    ["Darth Maul", 44],
    ["Eeth Koth", 54],
    ["Luminara Unduli", 64],
    ["Jocasta Nu", 74],
    ["Finn", 84],
    ["Leia Organa", 5],
    ["Greedo", 15],
    ["Lando Calrissian", 25],
    ["Padmé Amidala", 35],
    ["Bib Fortuna", 45],
    ["Adi Gallia", 55],
    ["Barriss Offee", 65],
    ["R4-P17", 75],
    ["Rey", 85],
    ["Owen Lars", 6],
    ["Jabba Desilijic Tiure", 16],
    ["Lobot", 26],
    ["Jar Jar Binks", 36],
    ["Ayla Secura", 46],
    ["Saesee Tiin", 56],
    ["Dormé", 66],
    ["Wat Tambor", 76],
    ["Poe Dameron", 86],
    ["Beru Whitesun lars", 7],
    ["Hidden Character", 17],
    ["Ackbar", 27],
    ["Roos Tarpals", 37],
    ["Ratts Tyerell", 47],
    ["Yarael Poof", 57],
    ["Dooku", 67],
    ["San Hill", 77],
    ["BB8", 87],
    ["R5-D4", 8],
    ["Wedge Antilles", 18],
    ["Mon Mothma", 28],
    ["Rugor Nass", 38],
    ["Dud Bolt", 48],
    ["Plo Koon", 58],
    ["Bail Prestor Organa", 68],
    ["Shaak Ti", 78],
    ["Biggs Darklighter", 9],
    ["Jek Tono Porkins", 19],
    ["Arvel Crynyd", 29],
    ["Ric Olié", 39],
    ["Gasgano", 49],
    ["Mas Amedda", 59],
    ["Jango Fett", 69],
    ["Grievous", 79],
    ["Obi-Wan Kenobi", 10],
    ["Yoda", 20],
    ["Wicket Systri Warrick", 30],
    ["Watto", 40],
    ["Ben Quadinaros", 50],
    ["Gregar Typho", 60],
    ["Zam Wesell", 70],
    ["Tarfful", 80],
    ["Captain Phasma", 88]
  ];

  //Compare what the user entered to what database has.
  for (var counter = 0; counter <= characterListAPI.length - 1; counter++) {
    // If the character is found in the list
    if (characterSearch === characterListAPI[counter][0]) {
      //New request value.
      characterFound = true;
      updatedRequestURL = "https://swapi.co/api/people/" + characterListAPI[counter][1] + "/";
      characterPicker = characterListAPI[counter][1];
      break;
    }
  }

  //Nothing found from loop
  if (characterFound === false) {
    //NOTHING FOUND IN SEARCH
    prompt("No user found. Check spelling?");
  }
  // Refresh content
  ReloadWithSearch();
}

function autocomplete(inp, arr) {
  /*  Grab the searchbox from html file with ID value.
      Compare it to database, create dropdown of suggested
  */
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
}

// ################################### POINT OF NO RETURN ##############################################
