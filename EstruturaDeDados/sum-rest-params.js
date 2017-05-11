let sum = (x =1, y = 2, z = 3) => {
    return x + y + z;
};

let params = [1,2,3];

console.log('sum:', sum(...params));