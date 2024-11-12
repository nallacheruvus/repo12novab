async function aa() {
    console.log("First Function");
    return 10;
}
async function ab(b) {
    console.log("Second Function");
    console.log(b + " value from other guy");
    return b * b;
}
const ac = async (c) => {
    console.log("Third Function");
    console.log(c + " Value from previous function");
    return c * c * c;
}
const ad = async function (d) {
    console.log("Fourth Function");
    console.log(d + " Value from the previous guy");
    return d * d * d;
}
const ae = async function (e) {
    console.log("Fifth Function");
    console.log(e + 1 + ' The last value in chain');
}
//Chaining functions
aa().then(n => ab(n)).then(n => ac(n)).then(n => ad(n)).then(n => ae(n));
