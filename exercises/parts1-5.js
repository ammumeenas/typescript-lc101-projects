// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
// let spacecraftName:string='Determination';
// let speedMph:number	=17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// let milesPerKilometer:number=0.621;
// // Part 2: Print Days to Mars
// // let milesToMars :number= kilometersToMars * milesPerKilometer;
// // let hoursToMars :number= milesToMars / speedMph;
// // let daysToMars:number=hoursToMars / 24;
// // Code an output statement here (use a template literal):
// console.log(`${spacecraftName} would take ${daysToMars} days`);
// // Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway :number):number{
//     let milesAway :number=kilometersAway* milesPerKilometer;
//     let hoursToLocation:number=milesAway/speedMph;
//     let totaldaysToMars:number=hoursToLocation/24;
//     return totaldaysToMars;
// }
// console.log(`${getDaysToLocation(kilometersToMars)} and ${spacecraftName}`);
// console.log(`${getDaysToLocation(kilometersToTheMoon)} and ${spacecraftName}`);
// // Move your output statement from part 2 here. Update the template literal to call
// // the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class

    function Spacecraft(name, speedMph) {
        this.name = name;
        this.speedMph = speedMph;
        this.milesPerKilometer = 0.621;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = this.milesPerKilometer * kilometersAway;
        var speedMph = this.speedMph;
        var hoursToLocation = milesAway / speedMph;
        var totaldaysToMars = hoursToLocation / 24;
        return totaldaysToMars;
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft("Determination", 17500);
console.log(spaceShuttle.getDaysToLocation(kilometersToMars) + " and " + spaceShuttle.name);
console.log(spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " and " + spaceShuttle.name + ".");
// Create an instance of the class here:n
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
