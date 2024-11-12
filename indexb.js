//Product starts from raw mat->finished 
const startProd = async (...rawmat) => {
    console.log(`Now mixing all the ${[...rawmat]}`);
    const mix = `Mixture of ${[...rawmat]}`;
    return mix;
}
const consolidate = async (...mix) => {
    let box;
    console.log(`Packing the mix by cutting hem into pieces ${[...mix]}`);
    box = `Cut pieces of ${[...mix]}`;
    return box;
}
const shipping = async (...box) => {
    console.log(`Now shipping and yarding the ${[...box]}`);
    const ready = `Boxes to be shipped ${[...box]}`;
    return ready;
}
startProd('Soap powder', 'Glycerine', 'Frangrance')
    .then(n => consolidate(n))
    .then(n => shipping(n)).then(n => console.log(n));