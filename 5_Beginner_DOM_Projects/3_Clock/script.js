const clock = document.querySelector("#clock");

/* 
We have targeted the clock section. Now we have to show the time. For this purpose, we create
a new "date" varibale and assign the Date() object to it because we know Date() object has information like
date and time of the system. 
we can acess the system's time by date.toLocaleTimeString() and set it to innerHTMl of the clock.
But it will only show the time when the page was loaded. To keep updating and changing the innerHTML
of our clock area, 
we can use setInterval() methode. It take two arguments
1- A callback function where we write our logic
2- A specific value of time in milliseconds after which we want to re-run our code of callback function
*/

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
