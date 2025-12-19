module.exports = (str) => {
    if (typeof str !== 'string' || str.length === 0) return true;
    return str === str.toLowerCase();
};
