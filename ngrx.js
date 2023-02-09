const list = ["effects", "reducers", "selectors", "store", "actions"];

setInterval(() => {
  let random = Math.floor(Math.random() * 5);
  console.log(`Have you looked at the ${list[random]}?`);
}, 4000);
