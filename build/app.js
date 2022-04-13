function maximumValue({ maximumWeight, items }) {
    let totalWeight = 0;
    let arrayAvailability = [];
    let totalValueSource = items.reduce((total, currentItem) => {
        return total + currentItem.weight;
    }, totalWeight);
    if (maximumWeight >= totalValueSource) {
        return totalValueSource;
    }
    if (items.length - 1) {
        items.forEach((item, indexFE) => {
            callback(items.filter((value, index) => {
                return index != indexFE;
            }), maximumWeight, arrayAvailability);
        });
    }
    return findMaxTotalValue(arrayAvailability);
}
function findMaxTotalValue(array) {
    let resultArray = [];
    let maxTotalValue = 0;
    array.forEach((item, index) => {
        let total = item.reduce((total, item) => {
            return total + item.value;
        }, 0);
        if (total > maxTotalValue) {
            resultArray = item;
            maxTotalValue = total;
        }
    });
    return maxTotalValue;
}
function callback(items, limit, arrayAvailability) {
    let totalWeight = 0;
    if (limit >=
        items.reduce((total, currentItem) => {
            return total + currentItem.weight;
        }, totalWeight)) {
        arrayAvailability.push(items);
    }
    if (items.length - 1) {
        items.forEach((item, indexFE) => {
            callback(items.filter((value, index) => {
                return index != indexFE;
            }), limit, arrayAvailability);
        });
    }
}
const input = {
    maximumWeight: 10,
    items: [
        { weight: 2, value: 5 },
        { weight: 2, value: 5 },
        { weight: 2, value: 5 },
        { weight: 2, value: 5 },
        { weight: 10, value: 21 }
    ]
};
const expected = 21;
const input2 = {
    maximumWeight: 10,
    items: [
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 10, value: 50 }
    ]
};
const expected2 = 80;
console.log(`${maximumValue(input)} - E: ${expected}`);
console.log(`${maximumValue(input2)} - E: ${expected2}`);
//# sourceMappingURL=app.js.map