function createNewArray(integers) {
    return integers.map((value, indexM) => {
        return integers.reduce((result, value, indexR) => {
            if (indexM != indexR) {
                return result * value;
            }
            else
                return result;
        }, 1);
    });
}
console.log(createNewArray([1, 2, 3, 4, 5]));
console.log(createNewArray([3, 2, 1]));
//# sourceMappingURL=app.js.map