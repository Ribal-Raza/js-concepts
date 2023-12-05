/* Promise is an object which represents eventuall completion of an async task. For example, when we have to
get data from server or database, we can use async code but we have to know wether this task will be
fulfilled or not, here comes promises. They show wether an async task is pending, resolved or rejected.
We can write code for each condition.
Often times, promises are consumed. But it is important to understand that before their consumption,
their creation is important. We simply create a promise with new keyword, then we invoke instance of
Promise() object. It takes a callback function which has two parameters denoting resolution or rejection
of task.*/

//Promise creation
const firstPromise = new Promise((resolve, reject) => {
  //Do any async task like DB calls, API calls, cryptography (password encryption)
  // Here is simple example of setTimeout
  setTimeout(() => {
    console.log(`Task is completed`); // task
    resolve(); // set promise state to resolve, it connects with .then()
  }, 1000);
});

// Promise consumption
// As we know we have passed, resolve and reject parameters in Promise, .then() is related to resolve param
// .then() takes a callback function with a default parameter which handles resolve parameter
firstPromise.then(() => {
  console.log("Promise Consumed");
});

// we can do the whole task without storing promise in a varible like following
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Quick Task Completed`);
    resolve();
  }, 1000);
}).then(() => {
  console.log(`Quick Promise Consumed`);
});

/* Promise which gives some data on consumption. When we make a DB call or Network request, some data is
recieved. To get this data in promise consumption .then(), we pass it in resolve()*/
const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Data Recieved");
    resolve({ id: 100, city: "Islamabad", weather: "Sunny" });
  }, 1000);
});

// As now we know, we are expecting some data, which we have passed earlier in resolve, so we pass a param.
// in this case, parameter will be treated as object because we passed object in resolve()
thirdPromise.then((city) => {
  console.log(city);
});

/* In case the async task is rejected due to some error, we pass that error in reject(). While consuming
the promise after .then(), we use .catch(), it takes rejection status or error which we had provided in
reject() */
const fourthPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ id: 202, username: "Ribal", email: "razaraza@raza.com" });
    } else {
      reject("User Value not found");
    }
  }, 1000);
});

fourthPromise
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });

// When return some value, or save some value in a variable after consumption of promise with .then(), it takes another .then() to handle that returned value.
// After completing all the stuff, we can use .finally() in which we can write code to run after all thens and catches
fourthPromise
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally Promise consumed and resulted in resolve or reject");
  });

// consuming promises with async await instead of .then() and .catch(). Wrapping async await in try..catch block
// In some scenerios we can handle/consume promises with async and await keywords. But the problem with aysnc await is that it does not handle errors gracefully (with a good error desc). To resolve this issue, we wrap async await in try catch block

const fifthPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        language: "JavaScript",
        uses: "Web Frontend Side and Backend side",
        standards: "ES6, ES7+",
      });
    } else {
      reject("ERROR_ Request rejected");
    }
  }, 1000);
});

async function consumePromise() {
  try {
    const response = await fifthPromise; //fifth promise will execute and it's response will be stored
    console.log(
      `Promise Resolved with Async Await handled with try catch block`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise();

/* Network requests with fetch()
fetch() takes url some other parameters and returns a promise. So as we know we can handle promise via
.then() .cath() approach or via async await with try catch approach
*/
// fetch with async await and try...catch block
async function productData() {
  try {
    const response = await fetch("https://dummyjson.com/products/1");
    const data = await response.json(); // converting response in json
    console.log("API Request Response With Async Await");
    console.log(data);
  } catch (error) {
    console.log("E: " + error);
  }
}
productData();

// fetch with .then() .catch() approach
fetch(`https://dummyjson.com/products/2`)
  .then((response) => {
    console.log("API request resolved with '.then' '.catch'");
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("E: " + error);
  });
