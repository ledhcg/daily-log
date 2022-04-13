function knapsack(items, limit) {
    let sortItems = items.sort((a, b) => {
        return a.weight - b.weight;
    });
    let totalWeight = 0;
    let arrayAvailability = [];
    let arrayClean = [];
    if (limit >=
        sortItems.reduce((total, currentItem) => {
            return total + currentItem.weight;
        }, totalWeight)) {
        arrayAvailability.push(sortItems);
        return arrayAvailability;
    }
    if (sortItems.length - 1) {
        sortItems.forEach((item, indexFR) => {
            callback(sortItems.filter((value, index) => {
                return index != indexFR;
            }), limit, arrayAvailability);
        });
    }
    arrayClean = unique(arrayAvailability);
    return arrayClean;
}
function unique(array) {
    let arrayClean = [];
    array.forEach((item, index) => {
        if (JSON.stringify(arrayClean).indexOf(JSON.stringify(array[index])) == -1) {
            arrayClean.push(array[index]);
        }
    });
    return arrayClean;
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
        items.forEach((item, indexFR) => {
            callback(items.filter((value, index) => {
                return index != indexFR;
            }), limit, arrayAvailability);
        });
    }
}
console.log(knapsack([
    { weight: 5, value: 10 },
    { weight: 2, value: 40 },
    { weight: 1, value: 30 },
    { weight: 3, value: 10 },
    { weight: 4, value: 40 },
    { weight: 6, value: 30 }
], 10));
//# sourceMappingURL=app.js.map