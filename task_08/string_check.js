module.exports = (str) => {
    if (typeof str !== 'string' || str.length === 0) return true;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'A' && char <= 'Z') {
            return false;
        }
    }
    return true;
}