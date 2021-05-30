var moment = require("moment");

console.log("Test");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);
