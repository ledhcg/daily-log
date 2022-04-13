interface Item {
    weight: number
    value: number
}

function maximumValue({
    maximumWeight,
    items
}: {
    maximumWeight: number
    items: Array<Item>
}): number {
    let totalWeight: number = 0
    let arrayAvailability: Array<Array<Item>> = []

    //Check if total of list items.value < limit => return
    let totalValueSource = items.reduce((total, currentItem) => {
        return total + currentItem.weight
    }, totalWeight)
    if (maximumWeight >= totalValueSource) {
        return totalValueSource
    }

    //Continue with callback
    if (items.length - 1) {
        items.forEach((item, indexFE) => {
            callback(
                items.filter((value, index) => {
                    return index != indexFE
                }),
                maximumWeight,
                arrayAvailability
            )
        })
    }

    return findMaxTotalValue(arrayAvailability)
}

function findMaxTotalValue(array: Array<Array<Item>>): number {
    let resultArray: Array<Item> = []
    let maxTotalValue: number = 0
    array.forEach((item, index) => {
        let total = item.reduce((total, item) => {
            return total + item.value
        }, 0)
        if (total > maxTotalValue) {
            resultArray = item
            maxTotalValue = total
        }
    })
    return maxTotalValue
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
        items.forEach((item, indexFE) => {
            callback(
                items.filter((value, index) => {
                    return index != indexFE
                }),
                limit,
                arrayAvailability
            )
        })
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
}
const expected = 21
const input2 = {
    maximumWeight: 10,
    items: [
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 10, value: 50 }
    ]
}
const expected2 = 80
console.log(`${maximumValue(input)} - E: ${expected}`)
console.log(`${maximumValue(input2)} - E: ${expected2}`)
