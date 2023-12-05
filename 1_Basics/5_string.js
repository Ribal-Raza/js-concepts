//initializing string
const firstName = "Ribal";
const lastName = "Raza";
const fullName = firstName + lastName; // concatination, combining two strings
console.log(fullName);
// concatinating strings with numbers
const age = 24;
console.log(fullName + "'s age is " + age + " years");
console.log(`${fullName}'s age is ${age} years`); // concatination with template literalls ``

// there is another way to initialize the string,
const myName = new String("Ribal"); // it suggests JS that type of this varibale is string
console.log(myName, typeof myName, myName[3]);
/* Here myName is an object, and it has key-value pairs like following:
{0:"R", 1:"i",  2:"b",  3:"a",  4:"l"}
It also gives us length of the string which is 5(if we count 0 too)*/

//string methods
const game = "Football";
console.log(game.length); // length of the string, how many characters are in the string
console.log(game.toUpperCase(), game.toLowerCase()); // converts string to upper or lowercase
console.log(game.charAt(4)); // finding a character at specific index
console.log(game.concat(" and Cricket")); // concats other value with string
console.log(game.indexOf("l"));
/* finds index of a character, in this case there are two l's at the end so 
it will return the index of l which comes first*/
console.log(game.substring(1, 5)); //returns substring with charaters starting from index 2 to 5
console.log(game.slice(2, 5), game.slice(-3, 6));
/* slice works same as substring. Substring treats negative values as 0 But slice can also accept negative values. For example in case of
game.slice(-3,4), slice will start from -3 (length is 8, starting from -3, 8-3 = 5) which is 5th index
to 6 */
console.log(game.split("t"));
/* split returns an array containing substring or substrings which are separated by specified 
character or characters in split argument */
const myLastName = "    Raza  ";
console.log(myLastName, "\n", myLastName.trim()); // trims the whitespaces from start and end of string
console.log(myLastName.replace("    ", "")); // replaces characters, here it replace whitespace
