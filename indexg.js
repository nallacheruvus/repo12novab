const { default: RSVP } = require("rsvp");

function dieToss() {
    return Math.floor(Math.random() * 6) + 1;
}
var promise = new RSVP.Promise((fullfill, reject) => {
    let n = dieToss();
    let m = dieToss();
    if ((n + m) > 10) {
        fullfill(n + m);
    } else {
        reject(n + m);
    }
});
promise.then(function (toss) {
    console.log("Its a perfect cast you won with a " + toss);
}, function (toss) {
    console.log("Sorry you have casted a " + toss + " on your dice better luck next time");
})