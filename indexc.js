const myasync = async () => {
    return Math.sqrt(2);
}
let proma = new Promise(function (resolve, reject) {
    const a = false;
    if (a) {
        resolve(myasync());
    } else {
        reject("This has timed out");
    }
});

proma.then(a => console.log(a)).catch(n => console.log(n));
(new Promise((res, rej) => { res("Iam a promise") })).then(b => console.log(b)).catch(c => console.log(c));
(new Promise((res, rej) => {
    const aa = false;
    aa ? res("Iam a new promise") : rej("Iam rejected");
})).then(a => console.log(a)).catch(e => console.log(e));
const tester = async () => {
    let str = "";
    for (let i = 0; i < 1000; i++) {
        // const a = "sqrt(" + (i + 1) + ")=" + Math.sqrt(i + 1) + ";"
        const a = `Sqrt(${i + 1})=${Math.sqrt(i + 1)};`;
        str += a;
    }
    return str;
}
let promb = new Promise((res, rej) => {
    res(tester());
});
function helpFun(a) {
    const pp = a.split(";");
    pp.forEach(element => {
        console.log(element);
    });
}
promb.then(a => helpFun(a)).catch(b => console.log(b));

const afun = async () => {
    let str = "";
    for (let i = 0; i < 10000; i++) {
        str += `Log(${i + 1})=${Math.log(i + 1)};`;
    }
    return str;
}

const bfun = async () => {
    const tt = await afun();
    return tt;
}

const promc = new Promise((res, rej) => {
    res(bfun());
});

promc.then(a => helpFun(a)).catch(c => console.log(c));


