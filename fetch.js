const fetch = require("isomorphic-fetch");

(async () => {
  const namesArray = new Array();
  const fetchURL = async name => {
    const response = await fetch(`http://localhost:3000/?name=${name}`);
    const json = await response.json();
    return json.name;
  };

  for (let i = 0; i < 10; i++) {
    namesArray.push(
      Math.random()
        .toString(36)
        .substring(7)
    );
  }

  const responses = await Promise.all(namesArray.map(fetchURL));
  console.log(responses);
})();
