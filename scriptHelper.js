// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const div = document.getElementById("missionTarget")
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
            `;

}

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(testInput) === true) { //checks to see if the value is a number and if it is not, returns not a number
            return "Not a Number";
    } else if (isNaN(testInput) === false) { //checks to see if the value is a number and if it is 
        return "Is a Number";
    }
}
    //validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
   //make sure that the user entered valid info for each of the fields. Valid information for the fields means that the user submits a value that is easily converted to the correct data type for our fellow engineers. The pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers. 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let errorMessage = "Make sure to enter valid informaiton for each field!"
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        return errorMessage;
    } 
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    
    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
     //If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. 
     //The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.
    if (fuelLevel > 10000 && cargoLevel < 10000) {
        list.style.visibility = 'hidden';
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
    } else if (fuelLevel < 10000 || cargoLevel > 10000) { //I originally had two separate if statements here but figured out that depending on the input, sometimes it would execute both, or even execute both if statements and the else statement, resulting in the h2 indicating the shuttle was ready for launch even when the fuel level was too low. 
        list.style.visibility = 'visible';
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        if (fuelLevel < 10000){
            fuelStatus.innerHTML = "Fuel level too low for launch";
        }
        if (cargoLevel > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        }
    } else {
        
    }
    return "success"
    
}


async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            // console.log(json);
            return response.json();
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.round(Math.random() * planets.length); 
    console.log(planets[index]);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
