/**
 * Q a third party library for promises
 */
var Q = require('q');
//1
const proma = Q.fcall(() => {
    return "Sir Issac Newton";
});
proma.then(c => console.log(c));
//2
const promb = () => {
    var deferred = Q.defer();
    deferred.resolve("This is a deferred value");
    return deferred.promise;
}
promb().then(c => console.log(c));
//3
const promc = Q.promised((r) => {
    console.log("Inside Promises");
    console.log(r);
    return r;
});
promc("test").then(c => console.log(c));

