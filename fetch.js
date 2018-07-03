const fetch = require("isomorphic-fetch");

(async () => {
  const namesArray = new Array();
  for (let i = 0; i < 100; i++) {
    namesArray.push(
      Math.random()
        .toString(36)
        .substring(7)
    );
  }
  const response = await fetch(`http://localhost:3000/?name=${namesArray[0]}`);
  const json = await response.json();
  console.log(json.name);
})();
