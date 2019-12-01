console.log("playgroundTS");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"])
];

const run = triggers => {
  triggers.forEach(t => t());
  console.log("first");
};

run(triggers);
