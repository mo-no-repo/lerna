const b = require("b");

(async function main() {
  const users = await b();

  console.log(users.map((users) => users.login).join(", "));
})();
