var figlet = require("figlet");

figlet("Let's Hack It,Kunal!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});