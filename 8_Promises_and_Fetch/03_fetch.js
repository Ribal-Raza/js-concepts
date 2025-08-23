/** `fetch()` History:
 * - 1999: Microsoft ships XMLHTTP in IE5 (later standardized as XMLHttpRequest), enabling AJAX in the 2000s.
 * - ~2015: WHATWG Fetch + fetch() land in modern browsers: Promise-based, streaming, Request Response objects.
 * - 2022→2023+: Node.js adds global fetch in v18; stabilized by v21.
 * What is fetch()?
 * - fetch(input, init?) starts a network request and returns a Promise that resolves to a Response
 * - Use response.ok/response.status to check success,
 * - then response.json()/text()/blob() to read the body;
 * - handle errors with .catch() or async/await + try/catch.
 */
// then/catch chain
const fetchDetails1 = fetch("https://api.github.com/users/Ribal-Raza").then(
  (r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  }
);

console.log(fetchDetails1); // Promise { <pending> } — sync log, request not finished yet

fetchDetails1
  .then((data) => {
    console.log(
      `1-Fetch with promise\nUserName: ${data.name}\t|\tUser Id: ${data.id}\n`
    );
  })
  .catch((err) => {
    console.error("1-promise error:", err.message);
  })
  .finally(() => {
    console.log("1-promise done");
  });

// async/await version
async function fetchDetails2() {
  try {
    const r = await fetch("https://api.github.com/users/Ribal-Raza");
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();
    console.log(
      `2-Fetch with async...await\nUserName: ${data.name}\t|\tUser Id: ${data.id}`
    );
  } catch (err) {
    console.error("2-async error:", err.message);
  } finally {
    console.log("2-async done");
  }
}
fetchDetails2();

// Passing Headers, Body, and other options to fetch
/**
 * Headers: Extra info you attach to your request/response (like an envelope label).
 * Request types (HTTP Methods): GET, POST, PUT, PATCH, DELETE etc. They define what action you’re asking the server to do.
 * - GET → fetch data
 * - POST → send new data
 * - PUT → replace existing data
 * - PATCH → update partially
 * - DELETE → remove data
 * CORS: Security policy that decides which websites can talk to a server.
 * Body: The actual content/data you send with your request (only for methods like POST, PUT, PATCH).
 */

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((post) => {
    console.log(`\n3-Fetch with options\nPost Title: ${post.title}`);
  })
  .catch((err) => {
    console.error(err.message);
  })
  .finally(() => {
    console.log("3-fetch done");
  });

// UPDATE request with fetch
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "lorem isump is not understandable",
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((res) => {
    console.log(`\n4- PUT request\nPost title: ${res.title}`);
  })
  .catch((err) => {
    console.error(err.message);
  })
  .finally(() => {
    console.log("4-Updating title completed");
  });
