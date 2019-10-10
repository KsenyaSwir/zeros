module.exports = function iter(expression) {
    let arr = expression.split("*");
    let iter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("!!")) {
            let item = parseInt(arr[i]);
            while (item >= 5) {
                num = 5;
                while ((item % num) === 0) {
                    num = num * 5;
                    iter++;
                }
                item = item - 2;
            }
        } else if (arr[i].includes("!")) {
            let item = parseInt(arr[i]);
            while (item > 0) {
                item = Math.floor(item / 5);
                iter = iter + item;
            }
        }
    }
    return iter;
}