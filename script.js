// Write your JavaScript code here!

window.addEventListener("load", function() {
    const form = document.getElementById("launchForm");
    form.addEventListener("submit", function(event) {
       const pilotNameInput = document.querySelector("input[name=pilotName]");
       const copilotNameInput = document.querySelector("input[name=copilotName]");
       const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       const cargoMassInput = document.querySelector("input[name=cargoMass]");
       const list = document.getElementById("faultyItems");
       // stop the form submission
       
       if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
          alert("All fields are required!");
       } else {
       let resultsReturned = formSubmission(window.document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
        if (resultsReturned !== "success"){
            alert(`${resultsReturned}`)
       }
    }
    event.preventDefault();
    });
    
   let listedPlanets;
   let selectedPlanet;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   console.log("Testing Assigning myFetch to Listed Planets Response variable");
   console.log(listedPlanetsResponse);
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
   })
   
});