const { default: RSVP } = require("rsvp");

const dieToss = () => Math.floor(Math.random() * 6) + 1;
function tossASix() {
    return new RSVP.Promise((fulfill, reject) => {
        var n = dieToss();
        if (n === 6) {
            fulfill(n);
        } else {
            reject(n);
        }
    });
}
function logAndToss(toss) {
    console.log("Tossed a " + toss + " need to try again");
    return tossASix();
}
const logSuccess = (toss) => {
    console.log("Managed to toss a " + toss + " a success");
}
const logFailure = (toss) => {
    console.log("Tossed a " + toss + " too bad...");
}
tossASix()
    .then(null, logAndToss)
    .then(null, logAndToss)
    .then(logSuccess, logFailure);
