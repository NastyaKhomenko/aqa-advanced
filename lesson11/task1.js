function logWithDelay(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}
logWithDelay("Test", 4000);