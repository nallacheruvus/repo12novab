async function myFunc() {
    await new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Promise Inside An Async Function");
        }, 2000);
    });
}
myFunc().then(c => console.log(c));
console.clear();
async function aFunc(a, b) {
    await new Promise((res, rej) => {
        setTimeout(() => {
            console.log(Math.hypot(a, b));
        }, 3000);
    })
}
aFunc(2, 3).then(c => console.log(c));
async function* fetchUser() {
    const tt = { id: 1, name: "satish" };
    yield await JSON.stringify(tt);
}
const aa = fetchUser();
aa.next().then(({ value, done }) => {
    console.log(value);
});
class Books {
    constructor(name, auth) {
        this.name = name;
        this.auth = auth;
    }
}
function tttt() {
    async function retBooks() {
        const arr1 = ["Ramayan", "Mahabharat", "Gita", "Sakuntalam", "My Experiments with truth"];
        const arr2 = ["Valmiki", "Vyas", "Krishna", "Kalidasa", "MK Gandhi"];
        let arr3 = [];
        for (let i = 0; i < arr1.length; i++) {
            let book = new Books(arr1[i], arr2[i]);
            arr3.push(book);
        }
        const tt = await arr3;
        return tt;
    }
    async function* bookGen() {
        const tt = await retBooks();
        yield JSON.stringify(tt);
    }
    let bGen = bookGen();
    bGen.next().then(({ value, done }) => {
        console.log(value);
    });
}
function Person(name, email) {
    this.name = name;
    this.email = email;
}
var arr1 = ['John', 'Jeevan', 'Ram', 'Peter', 'Ali'];
var arr2 = ['John@yahoo.com', 'Jeevan@yahoo.com', 'Ram@yahoo.com', 'Peter@yahoo.com', 'Ali@yahoo.com'];
var pArr = [];
for (let i = 0; i < arr1.length; i++) {
    let per = new Person(arr1[i], arr2[i]);
    pArr.push(per);
}
let len = pArr.length;
function* PerGen() {
    let i = 0;
    while (i < len) {
        yield pArr[i];
        i++;
    }
}
let perGen = PerGen();
// perGen.next().then(({ value, done }) => {
//     console.log(JSON.stringify(value));
// });
for (let i = perGen.next(); i.done !== true; i = perGen.next()) {
    const aa = i.value;
    console.log(aa);
}
async function* PerGenA() {
    let aa = await pArr;
    yield await JSON.stringify(aa);
}
const perFun = PerGenA();
perFun.next().then(({ value, done }) => {
    console.log(value);
});
