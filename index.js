// let str = "Hey Iam On The Top";
// let itera = str[Symbol.iterator]();
// while (true) {
//     let res = itera.next();
//     if (res.done) break;
//     console.log(res.value);
// }
// const range = {
//     from: 1, to: 10
// }
// for (let i = range.from; i <= range.to; i++) {
//     console.log(i);
// }
let aLike = {
    0: "Hello", 1: "Hey There", length: 2
}
//ArrayLike
//1
async function aa() {
    let str = "";
    for (let i = 0; i < 1000; i++) {
        str += (i + 1);
    }
    return str;
}
aa().then(n => console.log(n));
// aa();
//2
const bb = async function () {
    return "Bram Stoker";
}
bb().then(n => console.log(n));

//3
const cc = async () => {
    return "Roseyln Code Compiler CSHARP";
}
cc().then(a => console.log(a));
const calSqr = async (a) => a * a;
calSqr(10).then(a => console.log(a));
const calSumsqr = async (a, b) => Math.hypot(a, b);
calSumsqr(2, 3).then(a => console.log(a));
const calSumarr = async (...a) => [...a].reduceRight((a, b) => a + b);
calSumarr(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).then(a => console.log(a));
const delRel = async function () {
    setTimeout(() => {
        console.log("Jack And Jill")
    }, 2000);
    return "test";
}
delRel().then(a => console.log(a));
console.log("*****Done");

