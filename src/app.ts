interface Item {
    weight: number
    value: number
}
function knapsack(items: Array<Item>, limit: number): Array<Array<Item>> {
    //Sort items array
    let sortItems: Array<Item> = items.sort((a, b) => {
        return a.weight - b.weight
    })
    let totalWeight: number = 0
    let arrayAvailability: Array<Array<Item>> = []
    let arrayClean: Array<Array<Item>> = []

    //Check if total of list items.value < limit => return
    if (
        limit >=
        sortItems.reduce((total, currentItem) => {
            return total + currentItem.weight
        }, totalWeight)
    ) {
        arrayAvailability.push(sortItems)
        return arrayAvailability
    }

    //Continue with callback
    if (sortItems.length - 1) {
        sortItems.forEach((item, indexFR) => {
            callback(
                sortItems.filter((value, index) => {
                    return index != indexFR
                }),
                limit,
                arrayAvailability
            )
        })
    }

    //Clean array = Remove duplicate items
    arrayClean = unique(arrayAvailability)

    return arrayClean
}

//Remove duplicate items
function unique(array: Array<Array<Item>>): Array<Array<Item>> {
    let arrayClean: Array<Array<Item>> = []
    array.forEach((item, index) => {
        //Check a item of array exist in arrayClean - If no exist, push that item into arrayClean
        if (JSON.stringify(arrayClean).indexOf(JSON.stringify(array[index])) == -1) {
            arrayClean.push(array[index])
        }
    })
    return arrayClean
}

function callback(items: Array<Item>, limit: number, arrayAvailability: Array<Array<Item>>) {
    let totalWeight: number = 0
    if (
        limit >=
        items.reduce((total, currentItem) => {
            return total + currentItem.weight
        }, totalWeight)
    ) {
        arrayAvailability.push(items)
    }

    if (items.length - 1) {
        items.forEach((item, indexFR) => {
            callback(
                items.filter((value, index) => {
                    return index != indexFR
                }),
                limit,
                arrayAvailability
            )
        })
    }
}

// console.log(
//     knapsack(
//         [
//             { weight: 1, value: 10 },
//             { weight: 2, value: 40 },
//             { weight: 3, value: 30 },
//             { weight: 4, value: 50 }
//         ],
//         10
//     )
// )

console.log(
    knapsack(
        [
            { weight: 5, value: 10 },
            { weight: 2, value: 40 },
            { weight: 1, value: 30 },
            { weight: 3, value: 10 },
            { weight: 4, value: 40 },
            { weight: 6, value: 30 }
        ],
        10
    )
)

// knapsack(
//     [
//         { weight: 5, value: 10 },
//         { weight: 2, value: 40 },
//         { weight: 1, value: 30 }
//     ],
//     10
// )
