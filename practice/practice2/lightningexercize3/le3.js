// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
/* Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with 
the keys as their values. Use those variables to look up the values. */

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.height);
console.log(empireStateBuilding.squareFeet);
console.log(empireStateBuilding.stories);
console.log(empireStateBuilding.eastWestLength);
console.log(empireStateBuilding.northSouthLength);

const remaining1 = "address"
const remaining2 = "constructionDate"
const remaining3 = "cost"
const remaining4 = "owner"
const remaining5 = "architect"

console.log(remaining1);
console.log(remaining2);
console.log(remaining3);
console.log(remaining4);
console.log(remaining5);

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// Lightning Exercise 2: Output only Andy and Zoe in the console.

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(instructors.partTime, instructors.fullTime);
console.log(instructors.fullTime[4], instructors.partTime[0]);