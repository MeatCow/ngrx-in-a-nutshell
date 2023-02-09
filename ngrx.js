const list = ["effects", "reducers", "selectors", "store", "actions"];
console.log("You seem to be having problems troubleshooting your NGRX state management...");

setInterval(() => {
  let random = Math.floor(Math.random() * 5);
  console.log(`Have you tried looking at the ${list[random]}?`);
}, 4000);
