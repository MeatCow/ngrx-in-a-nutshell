const list = [
  "effects",
  "reducers",
  "selectors",
  "store",
  "actions",
  "facade that you should delete, and replace with direct dispatches to the store",
  "services",
  "data-services",
];
console.log(
  "You seem to be having problems troubleshooting your NGRX state management..."
);

setInterval(() => {
  let random = Math.floor(Math.random() * list.length);
  let useNgrxData = Math.random() <= 0.1;
  console.log(`Have you tried looking at the ${list[random]}?`);
  if (useNgrxData) {
    console.log(
      "You know, with all these problems have you considered using the ngrx-data or ngrx-entity libraries?"
    );
    console.log(
      "ngrx-data:   ",
      "https://github.com/johnpapa/angular-ngrx-data"
    );
    console.log("ngrx-entity: ", "https://ngrx.io/guide/entity");
  }
}, 4000);
