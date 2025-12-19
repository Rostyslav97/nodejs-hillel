console.log('module m02 stage 1');

module.exports = (num) => {
    const res = num * num;
    console.log('module m02 stage 2');
    return res;
}