async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw new Error(`Помилка запиту todo: ${response.status}`);
  }
  return response.json();
}

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error(`Помилка запиту user: ${response.status}`);
  }
  return response.json();
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