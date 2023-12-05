/* History:
1- In 1998, Internet Explorer 5 introduced XMLHttpRequest API to fetch XML Data. It was used in AJAX.
2- With the passage of time, XMLHttpRequest became difficult to work with in large web apps.
3- In 2015, fetch() API was introduced and it made it easier to fetch data Asyncrounously. But it was limited to the browser (or DOM).
4- In 2022, fetch API was officially included in node.js and now it's available natively.

What is fetch()?
fetch() is a global method which starts the process of fetching resource from network. It returns a 
promise which is fulfilled once the response is available. That promise then resolves to the response
object in result of request.
Most commonly fetch() is handled with .then() and .catch() approach. But it can also be handled with
async...await and try...catch.*/
