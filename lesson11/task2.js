function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Помилка запиту todo: ${response.status}`);
      }
      return response.json();
    });
}

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Помилка запиту user: ${response.status}`);
      }
      return response.json();
    });
}

const allResult = Promise.all([getTodo(), getUser()]);
const raceResult = Promise.race([getTodo(), getUser()]);

allResult
  .then(([todo, user]) => {
    console.log("Promise.all:", todo, user);
  })
  .catch((error) => {
    console.error("Promise.all помилка:", error);
  });

raceResult
  .then((firstResult) => {
    console.log("Promise.race:", firstResult);
  })
  .catch((error) => {
    console.error("Promise.race помилка:", error);
  });