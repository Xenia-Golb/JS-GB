const numberPrec = require('number-precision');
function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchase) => numberPrec.plus(acc, purchase), 0);

    total = numberPrec.times(total, discount);
    return total;
}
module.exports = calculateResultSum;