function createNewArray(integers: Array<number>): Array<number> {
    return integers.map((value, indexM) => {
        return integers.reduce((result, value, indexR): number => {
            if (indexM != indexR) {
                return result * value
            } else return result
        }, 1)
    })
}

console.log(createNewArray([1, 2, 3, 4, 5]))
console.log(createNewArray([3, 2, 1]))
