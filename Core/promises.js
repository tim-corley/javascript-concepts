// create a promise
let done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = "Here is the thing I built";
    resolve(workDone);
  } else {
    const why = "Still working on something else";
    reject(why);
  }
});

console.log(isItDoneYet);

// consume a promise
const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log("OK");
    })
    .catch(err => {
      console.error(err);
    });
};

console.log(checkIfItsDone());

// chaining w/ fetch()
const status = res => {
  if (res.status >= 200 && res.status < 300) {
    return Promise.resolve(res);
  }
  return Promise.reject(new Error(res.statusText));
};

const json = res => res.json();

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(status)
  .then(json)
  .then(data => {
    data.forEach(d => {
      if (d.title[0] === "q") {
        console.log(d.title);
      }
    });
  })
  .catch(error => {
    console.log("Request Failed", error);
  });

// promise.all()
const f01 = fetch("https://jsonplaceholder.typicode.com/users/3");
const f02 = fetch("https://jsonplaceholder.typicode.com/posts/5");

Promise.all([f01, f02])
  .then(res => {
    console.log("Array of results", res);
  })
  .catch(err => {
    console.log(err);
  });

// promise.race()
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "ONE");
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "TWO");
});

Promise.race([promiseOne, promiseTwo]).then(result => {
  console.log(result);
});