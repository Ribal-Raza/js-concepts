/**
 * @fileoverview Date and Time in JS
 */
// Date is an object in javascript that encapsulates an integer number.
// That integer number refers to milliseconds since 1 January 1970 mid-night
// So date and time are calculated by default from 1 January 1970 mid-night (the epoch)
// To get the current date and time
const currentDate = new Date();
console.log(currentDate);
// new Date() returns current date but that's not readable
// So we can try to covert the value of currentDate to string
console.log(currentDate.toString()); // Output's date and time in UTC
// The International Organization for Standardization format date and time is
console.log(currentDate.toISOString());
// Then to get date and time in local system's value
console.log(currentDate.toLocaleString());
// To get date only in local system value
console.log(currentDate.toLocaleDateString());
// To get time only in local system value
console.log(currentDate.toUTCString()); // Coordinated Universal Time format
// To get json version of date and time
console.log(currentDate.toJSON()); // output is similar to toISOString()

// We can also define a specifc date
const lastYearParty = new Date(2023, 10, 24);
// Date object can take params in order
// Year, monthIndex, date, hours, minutes, seconds, milliseconds
// monthIndex starts from 0, so to save November which is 11th month, you can write 10
console.log(lastYearParty.toLocaleString());
// Another syntax for saving date
const lastYearParty2 = new Date("11-24-2023"); // You can also write like "2023-11-24"
console.log(lastYearParty2.toLocaleString());
console.log(lastYearParty2.toDateString());

// Date.now() gives current time in milliseconds since the epoch
const now = Date.now();
console.log(`Milliseconds since epoch now: ${now}`);

const myCreatedDate = new Date("2024-09-13T12:30:00");
console.log(`My created date: ${myCreatedDate.toDateString()}`);

// milliseconds *since epoch*
const timeFromMyDate = myCreatedDate.getTime();
console.log(`Milliseconds since epoch at my date: ${timeFromMyDate}`);

// difference = how much time has passed
const diff = now - timeFromMyDate;
console.log(`Milliseconds passed since my date: ${diff}`);

// seconds passed
const secondsPassed = Math.floor(diff / 1000);
console.log(`Seconds passed since my date: ${secondsPassed}`);

// minutes passed
const minutesPassed = Math.floor(diff / (1000 * 60));
console.log(`Minutes passed since my date: ${minutesPassed}`);

// hours passed
const hoursPassed = Math.floor(diff / (1000 * 60 * 60));
console.log(`Hours passed since my date: ${hoursPassed}`);

// convert to days
const daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(`Days passed since my date: ${daysPassed}`);

// Local string date time
const newDate = new Date("07-26-2025");
console.log(`Local string date time: ${newDate.toLocaleString()}`);
// Some parameters for toLocaleString()
console.log(
  `Local string date time: ${newDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Asia/Karachi", // Time zone can be defined, It can be look up on Intl.supportedValuesOf('timeZone')
  })}`
);
