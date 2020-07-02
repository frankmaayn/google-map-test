const resetButton = document.querySelector("#reset");

var map,
  google,
  styles,
  itBuilding, //Main IT Building
  sustainCenter, //Sustainability Center
  canvasZoom, //Canvas/Zoom Support Building
  busDepartment, //Business/Economics Department Building
  sierraHall, //Sierra Center 
  check = false, //checks if the location chosen is correct
  question = 0, //determines the next question
  correctAnswer = 0, //tracks correct answers
  wrongAnswer = 0; //tracks wrong answers

function initMap() {
  //hides the labels of certain buildings on the map
  styles = {
    default: null,
    hide: [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      }
    ]
  };

  //Disables certain functions of the map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.240182, lng: -118.529322 },
    zoom: 17,
    disableDefaultUI: true,
    scrollwheel: false,
    scaleControl: false,
    draggable: false,
    mapTypeControl: false
  });
  map.setOptions({ styles: styles["hide"] });

  //Sierra Hall
  sierraHall = [
    { lat: 34.238584, lng: -118.531574 },
    { lat: 34.238593, lng: -118.530048 },
    { lat: 34.238016, lng: -118.530003 },
    { lat: 34.238034, lng: -118.531709 }
  ];

  var sierraHallShape = new google.maps.Polygon({
    paths: sierraHall,
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: "green",
    fillOpacity: 0.25
  });

  // I.T Main Building
  itBuilding = [
    { lat: 34.240793, lng: -118.528435 },
    { lat: 34.240103, lng: -118.528428 },
    { lat: 34.240112, lng: -118.527546 },
    { lat: 34.24081, lng: -118.527558 }
  ];
  var itBuildingShape = new google.maps.Polygon({
    paths: itBuilding,
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: "green",
    fillOpacity: 0.25
  });

  //Sustainability Center
  sustainCenter = [
    { lat: 34.240918, lng: -118.526949 },
    { lat: 34.240896, lng: -118.526097 },
    { lat: 34.240698, lng: -118.526099 },
    { lat: 34.240669, lng: -118.52688 }
  ];

  var sustainCenterShape = new google.maps.Polygon({
    paths: sustainCenter,
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: "green",
    fillOpacity: 0.25
  });

  //Canvas & Zoom
  canvasZoom = [
    { lat: 34.239527, lng: -118.530056 },
    { lat: 34.240423, lng: -118.530058 },
    { lat: 34.240476, lng: -118.528513 },
    { lat: 34.239575, lng: -118.52864 }
  ];
  var canvasZoomShape = new google.maps.Polygon({
    paths: canvasZoom,
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: "green",
    fillOpacity: 0.25
  });

  //Business Department
  busDepartment = [
    { lat: 34.242465, lng: -118.531204 },
    { lat: 34.242491, lng: -118.530219 },
    { lat: 34.241555, lng: -118.530013 },
    { lat: 34.241391, lng: -118.530394 }
  ];

  var busDepartmentShape = new google.maps.Polygon({
    paths: busDepartment,
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: "green",
    fillOpacity: 0.25
  });

  google.maps.event.addListener(map, "dblclick", function(e) {
    question++;

    // Central IT Building
    if (question == 1) {
      if (google.maps.geometry.poly.containsLocation(e.latLng, itBuildingShape) == true) {
        check = true; //correct answer
      } else {
        check = false; //wrong answer
      }

      if (check == true) {
        //if correct
        document.getElementById("answer-one").style.color = "green";
        document.getElementById("answer-one").innerHTML = "You got it right!";
        correctAnswer++;
      } else {
        //if wrong
        itBuildingShape.setOptions({ fillColor: "red" });
        document.getElementById("answer-one").style.color = "red";
        document.getElementById("answer-one").innerHTML = "You got it wrong!";
        wrongAnswer++;
      }

      itBuildingShape.setMap(map);
      document.getElementById("question-two").innerHTML =
        "Sustainability Center?"; //Display next question
    }

    //Computer Science Department Question
    else if (question == 2) {
      if (google.maps.geometry.poly.containsLocation(e.latLng, sustainCenterShape) == true) {
        check = true; //correct answer
      } else {
        check = false; //wrong answer
      }

      if (check == true) {
        // if correct
        document.getElementById("answer-two").style.color = "green";
        document.getElementById("answer-two").innerHTML = "You got it right!";
        correctAnswer++;
      } else {
        //if wrong
        sustainCenterShape.setOptions({ fillColor: "red" });
        document.getElementById("answer-two").style.color = "red";
        document.getElementById("answer-two").innerHTML = "You got it wrong!";
        wrongAnswer++;
      }

      sustainCenterShape.setMap(map);
      document.getElementById("question-three").innerHTML =
        "Canvas/Zoom support?"; //Display next question
    }

    //Canvas and Zoom Support Question
    else if (question === 3) {
      if (google.maps.geometry.poly.containsLocation(e.latLng, canvasZoomShape) == true) {
        check = true; //correct answer
      } else {
        check = false; //wrong answer
      }

      if (check == true) {
        //if correct
        document.getElementById("answer-three").style.color = "green";
        document.getElementById("answer-three").innerHTML = "You got it right!";
        correctAnswer++;
      } else {
        // if wrong
        canvasZoomShape.setOptions({ fillColor: "red" });
        document.getElementById("answer-three").style.color = "red";
        document.getElementById("answer-three").innerHTML = "You got it wrong!";
        wrongAnswer++;
      }

      canvasZoomShape.setMap(map);
      document.getElementById("question-four").innerHTML =
        "Business/Economics Department?"; //Display next question
    }

    //Business and Economic Department Question
    else if (question == 4) {
      if (google.maps.geometry.poly.containsLocation(e.latLng, busDepartmentShape) == true) {
        check = true; //correct answer
      } else {
        check = false; //wrong answer
      }

      if (check == true) {
        // if correct
        document.getElementById("answer-four").style.color = "green";
        document.getElementById("answer-four").innerHTML = "You got it right!";
        correctAnswer++;
      } else {
        //if wrong
        busDepartmentShape.setOptions({ fillColor: "red" });
        document.getElementById("answer-four").style.color = "red";
        document.getElementById("answer-four").innerHTML = "You got it wrong!";
        wrongAnswer++;
      }

      busDepartmentShape.setMap(map);
      document.getElementById("question-five").innerHTML = "Sierra Hall?"; //Display next question
    }

    //Sierra Hall Question
    else if (question == 5) {
      if (google.maps.geometry.poly.containsLocation(e.latLng, sierraHallShape) == true) {
        check = true; //correct answer
      } else {
        check = false; //wrong answer
      }

      if (check == true) {
        //if correct
        document.getElementById("answer-five").style.color = "green";
        document.getElementById("answer-five").innerHTML = "You got it right!";
        correctAnswer++;
      } else {
        //if wrong
        sierraHallShape.setOptions({ fillColor: "red" });
        document.getElementById("answer-five").style.color = "red";
        document.getElementById("answer-five").innerHTML = "You got it wrong!";
        wrongAnswer++;
      }
      sierraHallShape.setMap(map);
    } else {
      // do nothing
    }

    //displays the current result
    document.querySelector("#correct-result").innerHTML = correctAnswer;
    document.querySelector("#wrong-result").innerHTML = wrongAnswer;
  });
}

//reset the program
function resetProgram() {
  document.querySelector("#answer-one").innerHTML = "";
  document.querySelector("#answer-two").innerHTML = "";
  document.querySelector("#answer-three").innerHTML = "";
  document.querySelector("#answer-four").innerHTML = "";
  document.querySelector("#answer-five").innerHTML = "";
  document.querySelector("#correct-result").innerHTML = "0";
  document.querySelector("#wrong-result").innerHTML = "0";
  question = 0; //set question back to 0
  correctAnswer = 0;
  wrongAnswer = 0;
  initMap(); //Gets rid of the shapes
}

//Reset Button event listener
resetButton.addEventListener("click", resetProgram);
