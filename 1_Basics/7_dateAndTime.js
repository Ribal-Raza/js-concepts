/* Date and Time have been a pain point in JS. It means that it's a bit irritating to store and fetch
Date and Time from Date object of JS.
Date is a JS object which startes calculating time from January 1 1970 UTC (universal clock).
*/
// Defining Date
const ourDate = new Date();
console.log(ourDate, typeof ourDate); // It returns an object with a difficult to understand values
console.log(ourDate.toString()); // conversion of Date to string returns readable values

// Date Methods/Functions
console.log(ourDate.toDateString()); // return Day of the week, Month, Date and year of system
console.log(ourDate.toTimeString()); // returns system's time and standard in 24 hour format
console.log(ourDate.toISOString()); // return date and time in ISO (Internatial Standard Org) format
console.log(ourDate.toUTCString()); // returns system's date and time with respect to Universal time
console.log(ourDate.toLocaleString()); // returns system's format of date of and time
console.log(ourDate.toLocaleDateString()); // returns system's format of date
console.log(ourDate.toLocaleTimeString()); // returns system's format of time

/* there are some methodes that can get specific information from Date object like date, day, month,
year, time, hours, minutes, seconds, milliseconds and etc*/
console.log(
  ourDate.getDate(),
  ourDate.getDay(),
  ourDate.getMonth(),
  ourDate.getFullYear(),
  ourDate.getTime().toLocaleString(),
  ourDate.getHours(),
  ourDate.getMinutes(),
  ourDate.getSeconds()
);

// declaring custom date, value of Jan is 0 and of Dec is 11
const myDate = new Date(2023, 3, 25, 5, 33, 47);
/* paramter postions are year, month, date, hour, minute, seconds and milliseconds. Once can only define year too*/
console.log(myDate.toLocaleString());
//there are some other ways to define date
const myDate2 = new Date("2023-11-27"); // with strings and format YYYY-MM-DD
const myDate3 = new Date("11-27-2023"); // with strings in format MM-DD-YYYY
console.log(myDate2.toString(), myDate3.toString());
