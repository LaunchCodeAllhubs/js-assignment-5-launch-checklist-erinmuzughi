// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    } else if (testInput === document.querySelector("input[name=pilotName]") || testInput === document.querySelector("input[name=copilotName]")){
        if (isNaN(testInput) === false) { //checks to see if the value is a number and if it is not
            return "Not a Number"
    }
    } 
    else if (testInput === document.querySelector("input[name=fuelLevel]") || testInput === document.querySelector("input[name=cargoMass]")){
        if (isNaN(testInput) === true) { //checks to see if the value is a number and if it is not
        return "Is a Number";
    } 
    //validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
   //make sure that the user entered valid info for each of the fields. Valid information for the fields means that the user submits a value that is easily converted to the correct data type for our fellow engineers. The pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers. 
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
