const obj = {
    name : "alex",
    age : 44,
    skills : ["ab", "cd"]
}

const jsonString = JSON.stringify(
    obj, 
    (key, value) => (typeof value === 'string') ? value.toUpperCase() : value, 
    2);
console.log(jsonString);