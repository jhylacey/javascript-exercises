const sumAll = (int1, int2) => {
    let sumTotal = 0;
    if ((int1 < 0 || int2 < 0) || (typeof int1 != "number" || typeof int2 != "number")) {
        return "ERROR";
    } else if (int1 > int2) {
        for (let i = int2; i <= int1; i++) {
            sumTotal += i;
        }
        return sumTotal;
    } else {
        for (let i = int1; i <= int2; i++) {
            sumTotal += i;
        }
        return sumTotal;
    }
};

// Do not edit below this line
module.exports = sumAll;
