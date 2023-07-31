// Write your helper functions here!
// require('isomorphic-fetch');

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
    } else if (isNaN(testInput) === false) { //checks to see if the value is a number and if it is not
            return "Not a Number";
    } else if (isNaN(testInput) === true) { //checks to see if the value is a number and if it is 
        return "Is a Number";
    }
}
    //validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
   //make sure that the user entered valid info for each of the fields. Valid information for the fields means that the user submits a value that is easily converted to the correct data type for our fellow engineers. The pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers. 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // console.log("test")
    // const div = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `${pilot} Ready`;
    
    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `${copilot} Ready`;

    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    if (fuelLevel < 10000) {
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        //If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. 
        //The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.
    }
    if (cargoLevel > 10000) {
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    } else {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
    }
    
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
