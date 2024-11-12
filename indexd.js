// const funa = async () => {
//     return "First Function Async";
// }
// const proma = new Promise((res, rej) => {
//     res(funa());
// });
// const funb = async () => {
//     return "Second Function Async";
// }
// const promb = new Promise((res, rej) => {
//     res(funb());
// });
// const func = async () => {
//     return "Third Function Async";
// }
// const promc = new Promise((res, rej) => {
//     res(func());
// });
// const fund = async () => {
//     return "Fourth Function Async";
// }
// const promd = new Promise((res, rej) => {
//     res(fund());
// });
// const fune = async () => {
//     return "Fifth Function Async";
// }
// const prome = new Promise((res, rej) => {
//     res(fune());
// });

// const aProm = [proma, promb, promc, promd, prome];
// // aProm.forEach(n => {
// //     n.then(a => console.log(a));
// // });

// Promise.all(aProm).then(r => console.log(r))
//     .catch(c => console.log(c))
//     .finally(() => {
//         console.log("calling finally");
//     });
// const bProm = [new Promise((res, rej) => res("First Promise")),
// new Promise((res, rej) => res("Second Promise")),
// new Promise((res, rej) => res("Third Promise")),
// new Promise((res, rej) => res("Fourth Promise")),
// new Promise((res, rej) => res("Fifth Promise"))
// ];
// Promise.all(bProm)
//     .then(c => console.log(c))
//     .catch(c => console.log(c))
//     .finally(() => {
//         console.log("Finally");
//     });
const aprom = new Promise((res, rej) => {
    console.log("First Prom");
    res("A Promise");
});
const bprom = new Promise((res, rej) => {
    console.log("Second Prom");
    res("B Promise");
});
const cprom = new Promise((res, rej) => {
    console.log("Third Prom");
    res("C Promise");
});
const dprom = new Promise((res, rej) => {
    console.log("Fourth Prom");
    res("D Promise");
});
const eprom = new Promise((res, rej) => {
    console.log("Fifth Prom");
    res("E Promise");
});
//Promise chaining
eprom.then(dprom).then(cprom).then(bprom).then(aprom).then(c => console.log(c));
//Write a promise which takes a param
const tFunc = async (a) => {
    return Math.sqrt(a);
}
const promp = new Promise((Res, rej) => {
    Res(tFunc(21));
})

promp.then(c => console.log(c));
